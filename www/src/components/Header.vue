<template>
  <div id="header">
    <!--<Logo/>-->
    <div class="logotext">QA</div>
    <Menu class="topmenu"/>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
//import Logo from "./Logo.vue";

export default {
    name: 'header',
    components: {
        Menu,
        //Logo
    }
}
</script>

<style scoped>
#header {
    height: 80px;
    background-color: #f1f1f1;
    border-bottom: 1px solid #cdcdcd;
    box-shadow: 5px 3px 3px #cdcdcd;
}
.topmenu {
    float: right;
    padding: 30px 10px 10px 10px;
}
.logotext {
    font-size: 2.5em;
    float: left;
    color: #701cba;
    padding: 10px;
    font-weight: bold;
}
</style>