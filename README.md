# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

### `yarn start`

### `yarn create vite todo-vite`

react
typescript + SWC

### `yarn install`

### `yarn add styled-components --dev @types/styled-components`

### `yarn add react-router-dom --dev @types/react-router-dom`

### `yarn add zustand --dev`

### `yarn add @types/node --dev`

### `yarn dev` => http://localhost:5173/ vite local정상작동

### `yarn add -D vite-plugin-svgr`

### `yarn add -D sass-embedded`

### `yarn run dev` => http://localhost:5173/ local Todo-vite 정상작동

### `yarn config list`

### `yarn login registry` http://0.0.0.0:4873/

    username:
    password:
    email

### `yarn publish`

    verdaccio http://0.0.0.0:4873/ 업로드 완료!!
