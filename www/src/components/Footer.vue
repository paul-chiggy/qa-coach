<template>
  <div id="footer">
    <Menu class="topmenu"/>
    <p>QA Coach, Pavlo Chigishev © 2021</p>
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
    position: absolute;
    left: 0; right: 0; bottom: 0;
}
.topmenu {
    margin-top: 10px;
}
</style>