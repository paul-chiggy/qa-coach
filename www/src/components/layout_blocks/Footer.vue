<template>
  <div id="footer">
    <div id="footer_inner">
      <Menu class="topmenu"/>
      <p>QA Coach, Pavlo Chigishev © 2021</p>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
    name: "footer",
    components: {
        Menu
    }
}
</script>

<style scoped>
#footer {
  background-color: #f1f1f1;
  border-top: 1px solid #cdcdcd;
  height: 80px;
}
#footer_inner {
  max-width: 768px;
  margin: auto;
}
.topmenu {
  margin-top: 10px;
}
@media (min-width: 0px) and (max-width: 768px) {
  #footer_inner {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>