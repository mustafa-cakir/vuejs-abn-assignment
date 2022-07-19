# vuejs-abn-assignment

VueJS assignment for ABM AMRO. Crafted with love by Mustafa Cakir

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

#### Helpers
- `src/helpers/constants` includes the constants of the project (i.e: URLs)
- `src/helpers/utils` includes the handy common methods that are used by multiple components or services through the project

#### Mocks
- `src/mocks` folder includes the mocked JSON file and `msw` configurations to run the mock server.

#### Router
- `src/router/index.ts` includes the router of the project


#### Services
- `src/services/fetchs.ts` file includes the fetch services that is used to make request, and can be used through the entire project

#### Types
- `src/types/types.ts` file includes the types of the dataType that is being used in different components/services

#### Views
- `src/views` folder includes the views of the project


## Test
 Project includes total of 48 unit test cases within 18 files.

```sh
 ✓ src/services/__tests__/fetch.spec.ts (3)
 ✓ src/components/Accounts/__tests__/AccountCard.spec.ts (5)
 ✓ src/views/__tests__/AccountsView.spec.ts (1)
 ✓ src/components/Transactions/__tests__/TransactionsContainer.spec.ts (7)
 ✓ src/components/common/__tests__/Header.spec.ts (3)
 ✓ src/components/Accounts/__tests__/AccountGroup.spec.ts (3)
 ✓ src/components/common/__tests__/Checkbox.spec.ts (5)
 ✓ src/views/__tests__/TransactionsView.spec.ts (2)
 ✓ src/components/common/__tests__/AlertBox.spec.ts (5)
 ✓ src/components/Transactions/__tests__/TransactionsLoading.spec.ts (1)
 ✓ src/views/__tests__/HomeView.spec.ts (1)
 ✓ src/components/common/__tests__/FeatherIcon.spec.ts (2)
 ✓ src/components/common/__tests__/ScrollWithShadow.spec.ts (1)
 ✓ src/components/common/__tests__/Footer.spec.ts (1)
 ✓ src/components/common/Shimmer/__tests__/ShimmerLoadingContainer.spec.ts (1)
 ✓ src/components/common/Shimmer/__tests__/SimmerItem.spec.ts (1)
 ✓ src/helpers/__tests__/utils.spec.ts (5)
 ✓ src/components/Accounts/__tests__/AccountsLoading.spec.ts (1)

Test Files  18 passed (18)
     Tests  48 passed (48)
      Time  473ms

```


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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
