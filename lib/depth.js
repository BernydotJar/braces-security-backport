'use strict';

const { MAX_NESTING_DEPTH } = require('./constants');

const nestingError = () => new RangeError(`Input exceeds maximum nesting depth of ${MAX_NESTING_DEPTH}`);

const assertNestingDepth = depth => {
  if (depth > MAX_NESTING_DEPTH) {
    throw nestingError();
  }
};

const assertParentDepth = node => {
  let hops = 0;
  let parent = node && node.parent;

  while (parent) {
    hops++;
    if (hops > MAX_NESTING_DEPTH + 1) {
      throw nestingError();
    }
    parent = parent.parent;
  }
};

const validateArray = value => {
  const stack = [{ value, depth: 1 }];

  while (stack.length > 0) {
    const item = stack.pop();
    assertNestingDepth(item.depth);

    for (const child of item.value) {
      if (Array.isArray(child)) {
        stack.push({ value: child, depth: item.depth + 1 });
      }
    }
  }
};

const validateAst = ast => {
  const stack = [{ node: ast, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node || typeof node !== 'object') continue;

    assertNestingDepth(depth);
    assertParentDepth(node);

    if (Array.isArray(node.value)) {
      validateArray(node.value);
    }

    if (!node.nodes) continue;
    if (!Array.isArray(node.nodes)) {
      throw new TypeError('Expected node.nodes to be an array');
    }

    for (let index = node.nodes.length - 1; index >= 0; index--) {
      const child = node.nodes[index];
      const childDepth = depth + (child && Array.isArray(child.nodes) ? 1 : 0);
      stack.push({ node: child, depth: childDepth });
    }
  }
};

module.exports = { assertNestingDepth, validateAst };
