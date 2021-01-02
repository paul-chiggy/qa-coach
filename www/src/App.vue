<template>
  <div>
    <Header />
    <div id="main">
      <div class="content">
        <router-view></router-view>
      </div>
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "QA Coach",
  components: {
    Header,
    Footer,
    Sidebar
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
.content {
  width: 66.6%;
}
</style>
