<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.jpg" width="400"/>
    <HelloVue msg="I'm a Vue Component" />
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
