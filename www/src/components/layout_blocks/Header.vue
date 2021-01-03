<template>
  <div id="header">
    <div id="header_inner">
      <!--<Logo/>-->
      <div class="logotext">
          <p><a href="/">QA.</a></p>
          <span>coach</span>
      </div>
      <Menu class="topmenu"/>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
//import Logo from "./Logo.vue";

export default {
  name: 'header-main',
  components: {
    Menu,
    //Logo
  }
}
</script>

<style scoped>
#header {
  height: 60px;
  background-color: #f1f1f1;
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 2px 1px 1px #cdcdcd;
}
#header_inner {
  max-width: 768px;
  margin: auto;
}
.topmenu {
  float: right;
  padding: 20px 0px 10px 10px;
}
.logotext {
  font-size: 2.2em;
  float: left;
  color: #701cba;
  font-weight: bold;
  margin: 0;
}
.logotext > span {
  float: left;
  font-size: 0.7em;
  margin-top: -17px;
}
.logotext > p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: -4px;
}
.logotext > p > a {
  color: #701cba;
  text-decoration: none;
}
@media (min-width: 0px) and (max-width: 768px) {
  #header_inner {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>