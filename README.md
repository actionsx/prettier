# Prettier Github Action

[![build][build-badge]][build-url] [![code style][code-style-badge]][prettierrc]
[![license][license-badge]][license-file]

Native, blazingly-fast `prettier` CLI on Github Actions, allows you to run every
`prettier` CLI command on Github Actions without having to install Node.js or
any dependency in advance.

## Usage

```yml
- uses: actions/checkout@v2 # Check out the repository first.
- uses: actionsx/prettier@v2
  with:
    # prettier CLI arguments.
    args: --check .
```

## License

This project is licensed under the [MIT License][license-file].

<!-- Links -->

[license-file]: /LICENSE
[prettierrc]: /.prettierrc.json
[build-url]:
  https://github.com/actionsx/prettier/actions?query=branch%3Amaster+workflow%3ACI

<!-- Badges -->

[build-badge]:
  https://img.shields.io/github/workflow/status/actionsx/prettier/CI
[license-badge]: https://img.shields.io/github/license/actionsx/prettier
[code-style-badge]:
  https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=white
