# Yggdrasill

A minimal theme for [Hugo](https://gohugo.io/).

> **⚠︎ Work in Progress ⚠︎**
>
> Please visit https://yggdrasill.rudeigerc.dev for the latest demo of the theme. The theme is under development and the styles may not remain the same.

The design is partially inspired by:

- [vividvilla/ezhil](https://github.com/vividvilla/ezhil)
- [MUI: The React component library you always wanted](https://mui.com/)
- [Diu.notes](https://notes.ljl.li/)

## Installation

### Install with Hugo Modules

```shell
# Initialize the Hugo module system
$ hugo mod init github.com/<your_user>/<your_project>
```

In `config.toml`:

```toml
theme = "github.com/rudeigerc/yggdrasill"

# Import the theme
[module]
[[module.imports]]
  path = "github.com/rudeigerc/yggdrasill"
```

Please refer to the [Hugo documentation](https://gohugo.io/hugo-modules/use-modules/) for more information about installation with Hugo modules.

### Install with Git Submodules

```shell
$ git submodule add https://github.com/rudeigerc/yggdrasill themes/yggdrasill
```

In `config.toml`:

```toml
theme = "yggdrasill"
```

## Update

### Update with Hugo Modules

```shell
$ hugo mod get -u github.com/rudeigerc/yggdrasill
```

### Update with Git Submodules

```shell
$ git submodule update --remote
```

## Development

Yggdrasill uses [pnpm](https://pnpm.io/) as the package manager for development, mostly for linting and formatting.

```shell
$ pnpm install
```

## License

Yggdrasill is licensed under the MIT License.
