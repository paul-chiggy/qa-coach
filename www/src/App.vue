<template>
  <div id="wrapper">
    <div id="wrapper_inner">
      <Header />
      <Body />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout_blocks/Header.vue";
import Footer from "./components/layout_blocks/Footer.vue";
import Body from "./components/layout_blocks/Body.vue";

export default {
  name: "QA Coach",
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
html, body {
  height: 100%;
}
body {
  margin: 0px;
  display: block;
  position: relative;
  background-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgb(36, 36, 36);
  height: 100%;
  position: relative;
}
a {
  color: #2e2e2e
}
a:hover {
  color:rgb(106, 105, 105);
}
h1, h2, h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
