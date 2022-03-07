# Watson

## VScode Extensions

1.  [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
2.  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3.  [MDX support](https://marketplace.visualstudio.com/items?itemName=JounQin.vscode-mdx)

## VSCode Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.options": {
    "extensions": [".js", ".jsx", ".md", ".mdx", ".vue"]
  },
  "eslint.validate": ["markdown", "mdx", "javascript", "vue"],
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[md]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[mdx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Install dependencies & compiles for development (Storybook)

```
yarn install
yarn sb
```

## Create library bundle

```
yarn create:lib
```

## Release a new Watson version (patch)

```
yarn release:patch
```
