# Prettier Github Action

![build][build-badge] ![license][license-badge] ![code style][code-style-badge]

Native, blazingly-fast `prettier` CLI on Github Actions, allows you to run any
`prettier` CLI commands on Github Actions without installing Node.js or any
dependency in advance.

## Usage

```yml
- uses: actions/checkout@v2  # Always check out the repository first
- uses: actionsx/prettier@v2
  with:
    # prettier CLI arguments.
    args: --check .
```

## License

This project is licensed under the [MIT License][license-file].

Copyright © 2020-present, ActionsX. All rights reserved.

<!-- Links -->

[license-file]: /LICENSE

<!-- Badges -->

[build-badge]:
  https://img.shields.io/github/workflow/status/actionsx/prettier/CI
[license-badge]: https://img.shields.io/github/license/actionsx/prettier
[code-style-badge]:
  https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=white
