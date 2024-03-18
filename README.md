# vue-base-architecture

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

## Microfrontend Settings

To add a new microfrontend to the ecosystem, follow these steps:

### Configure vite.config.ts

`vite-plugin-federation`\*\*: In the `vite.config.ts` file of your new microfrontend, configure `vite-plugin-federation` to expose the modules or components you want to share.

```typescript
// vite.config.ts of the microfrontend
import { defineConfig } from 'vite'
import federation from 'vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'your_microfrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/Component.vue'
      },
      shared: ['vue']
    })
  ],
  server: {
    port: 5003
  }
})
```

### Change Ports

Define preview in the package.json of the microfrontend with your port.

```json
  "preview": "vite preview --port 5003 --strictPort"
```

(In this case, the microfrontend will run the preview on port 5003)

### Update the Layout

#### Update vite.config.ts

Go to the layout project and update its configuration to include the new microfrontend. This usually involves updating the `vite.config.ts` file to consume the new `remoteEntry.js`.

```typescript
// vite.config.ts of the layout
import { defineConfig } from 'vite'
import federation from 'vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      remotes: {
        your_microfrontend: 'http://localhost:5003/assets/remoteEntry.js'
      },
      shared: ['vue']
    })
  ]
})
```

#### Declare Module

Go to the file remotes.d.ts for declare module

```typescript
declare module "your_microfrontend/*"{}
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
