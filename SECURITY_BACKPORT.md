# LabTether security backport

This directory starts from the published `braces@3.0.3` npm archive:

`sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==`

LabTether adds a maximum structural nesting depth to address
[CVE-2026-93687 / GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
while no patched upstream release is available. The guard covers parsed brace and
parenthesis groups, direct AST inputs, parent chains, and nested expansion arrays.

The upstream package remains MIT licensed. This is a local reviewed backport. It
is not an upstream `braces` release.
