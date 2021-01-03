<template>
  <div id="main">
    <Content />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

export default {
    name: "body-main",
    components: {
        Sidebar,
        Content
    }
}
</script>

<style scoped>
#main {
  max-width: 768px;
  margin: 10px auto;
}
@media (min-width: 0px) and (max-width: 768px) {
  #main {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
