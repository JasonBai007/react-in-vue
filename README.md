# react-in-vue

借助插件`vuera`，实现在`vue`项目中使用`react`组件。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### How to use React Components in a Vue project

1. 安装 vuera 等依赖

```sh
npm i vuera react react-dom @babel/plugin-transform-react-jsx
```

2. 配置 babel.config.js，使得可以解析 jsx 文件

```js
module.exports = {
  plugins: ["@babel/plugin-transform-react-jsx"],
};
```

3. 在 main.js 中使用 vuera 插件

```js
import { VuePlugin } from "vuera";
Vue.use(VuePlugin);
```

4. 新增 React 组件

```jsx
import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
}

export default HelloMessage;
```

5. 引入并使用 react 组件

```html
<template>
  <div id="app">
    <HelloVue msg="I'm a Vue Component." />
    <HelloReact msg="I'm a React Component" />
  </div>
</template>

<script>
  import HelloVue from "./components/vue/HelloVue.vue";
  import HelloReact from "./components/react/HelloReact.jsx";
  export default {
    name: "App",
    components: {
      HelloVue,
      HelloReact,
    },
  };
</script>
```
