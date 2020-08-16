# Prettier Github Action

![build][build-badge]
![license][license-badge]
![code style][code-style-badge]

Native `prettier` CLI for Github Actions.

## Usage

```yml
- uses: actionsx/prettier@v2
  with:
    # prettier CLI arguments.
    args: --check .
```

## License

This project is licensed under the [MIT License][license-file].

Copyright © 2020 - present, ActionX. All rights reserved.

<!-- Links -->

[license-file]: /LICENSE

<!-- Badges -->

[build-badge]: https://img.shields.io/github/workflow/status/actionsx/prettier/CI
[license-badge]: https://img.shields.io/github/license/actionsx/prettier
[code-style-badge]: https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=white
