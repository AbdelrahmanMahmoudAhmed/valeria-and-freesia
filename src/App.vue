<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  direction: rtl;
  overflow-x: hidden;
}

#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(54, 54, 54);
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  font-family: Playfair Display, serif, serif;
}
.container {
  width: 90%;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 96%;
  }
}
</style>
