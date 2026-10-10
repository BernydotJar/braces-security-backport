# braces 3.0.3 local security backport

This repository is a vendored MIT-licensed copy of braces@3.0.3 with an independent security patch from the public LabTether backport authored 2026-10-07, for GHSA-vfj7-8cjw-p6xm / CVE-2026-93687. Upstream has not shipped a fixed release as of 2026-10-09. A nesting-depth limit is added to parsing, expansion, AST traversals and flattening. The package version deliberately remains 3.0.3 and is not represented as an upstream patched release. Dependency consumers must pin an exact commit SHA and review the original provenance:

- https://github.com/advisories/GHSA-vfj7-8cjw-p6xm
- https://gist.github.com/watari-dev/1299cb4f19f9362b1a1495d143c7eb00
- https://www.npmjs.com/package/braces/v/3.0.3

Only public open-source library code and tests are committed, no application or private source.
