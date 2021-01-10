# 🔨 actionsx/prettier

[![Checks status][checks status]][checks url]
[![Dependabot status][dependabot status]][dependabot url]
[![Code style][code style]][code style url]
[![License][license badge]][license url]

🔥 Native, blazingly-fast `prettier` CLI on Github Actions, allows you to run
every `prettier` CLI command on Github Actions without having to install Node.js
or any dependency in advance.

> Average completion time: 5-8s - 7x faster than self-implemented workflow (with
> cache enabled).

## Usage

```yml
- uses: actions/checkout@v2 # Check out the repository first.
- uses: actionsx/prettier@v2
  with:
    # prettier CLI arguments.
    args: --check .
```

## License

This project is licensed under the [MIT License][license url].

<!-- Links -->

[checks status]:
  https://img.shields.io/github/checks-status/actionsx/prettier/master?logo=Github
[dependabot status]:
  https://img.shields.io/badge/dependabot-enabled-025e8c?logo=Dependabot
[license badge]: https://img.shields.io/github/license/actionsx/prettier
[code style]:
  https://img.shields.io/badge/code%20style-prettier-F7B93E?logo=Prettier
[checks url]:
  https://github.com/actionsx/prettier/actions?query=workflow%3ACI+branch%3Amaster
[dependabot url]: /.github/dependabot.yml
[code style url]: /.prettierrc.json
[license url]: /LICENSE
