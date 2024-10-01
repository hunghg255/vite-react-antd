# Vite + Antd + Jotai

## Getting Started

First, run the development server:

```bash
# Install package
npm install

# Run development server
npm run dev

# Run production server
npm run build
npm run preview
```

## Gen Icon

```js
1. Copy file svg to `public/svgIcon`
2. Run command: `npm run gen-icon`
3. Check component `Icon` in `src/components/UI/Icon/Icon.tsx`
4. View icon in `http://localhost:4005/public/svgtocss/icon-demo.html`
```

More: Install extenstion to preview icon: [Icon-Preivew](https://marketplace.visualstudio.com/items?itemName=hunghg255.iconify-preview)

## Gen Color

1. Update color to `styles/color-preview.json`

- Add value
  Example:

```js
{
   Light: {
     primary: {
       "8": '#FF0000',
     }
   }
}
```

More: Install extenstion to preview color: [Color-Preivew](https://marketplace.visualstudio.com/items?itemName=hunghg255.color-preview)

## Commit Convention

[commit-convention](.github/commit-convention.md)

## Library Docs

```md
1. Vitejs: hhttps://vitejs.dev/

2. State management Reactjs: https://jotai.org/

3. Library UI: https://ant.design

4. Library for request api: https://www.npmjs.com/package/umi-request

5. Library Multiple Language: https://react.i18next.com/

6. Library Hooks popular: https://ahooks.js.org/

7. Library dayjs: https://day.js.org/

8. Processing CSS: https://sass-lang.com/guide

9. Routing: https://reactrouter.com/

10. Generate page: https://github.com/hunghg255/react-generate-pages#readme
```

```md
Debug Form: https://www.npmjs.com/package/antd-form-devtools
```
