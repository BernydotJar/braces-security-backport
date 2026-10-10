'use strict';
const assert = require('node:assert/strict');
const braces = require('./');
const nested = '{'.repeat(150)+'a'+ '}'.repeat(150);
for (const op of [() => braces.parse(nested), () => braces(nested), () => braces.expand(nested)]) {
  assert.throws(op, /maximum nesting depth/i);
}
assert.deepEqual(braces.expand('{a,b}'), ['a','b']);
assert.ok(braces('{a,b}').length >= 1);
console.log('security and compatibility: PASS');
