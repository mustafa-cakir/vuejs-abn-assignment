# vuejs-abn-assignment

This template should help get you started developing with Vue 3 in Vite.

## Initial Setup 

- Project is initialized using `create-vue`
- `sass-loader` and `node-sass` are added project in order to use scss within the style tag, [more info about pre-processors](https://vue-loader.vuejs.org/guide/pre-processors.html#sass)


## Project Folder Structure
#### Assets
- Assets (fonts, images and style files) are stored in the `src/assets/` folder 
- `/src/assets/styles/mixins` is the file that includes the scss variables, colors, functions and methods to be used through the entire project. So, this scss file should be imported to Vue files within the `<style scoped lang="scss">` scope as follow:

```sh 
<style scoped lang="scss">
  @import "src/assets/styles/mixins"; ``
  // your scss lines here  
</style>
```
- `/src/assets/styles/_ui.scss` file includes the global styles that will be used throughout the entire website.

#### Components
- Components are stored in the `src/components/` folder
- `src/components/common` includes the common components that are used by more than one component.
- `src/components/Accounts` includes the accounts page's components
- `src/components/Transactions` includes the transactions page's components

## Test



## Project Setup

```sh
npm install
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
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
