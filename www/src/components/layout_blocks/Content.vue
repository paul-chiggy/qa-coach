<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "content block"
}
</script>

<style scoped>
#content {
  width: 66%;
  float: left;
  background-color: #f7f7f7;
  border: 1px solid #cdcdcd;
  box-shadow: 2px 1px 1px #cdcdcd;
  border-radius: 8px;
}
@media (min-width: 0px) and (max-width: 767px) {
  #content {
    width: 100%;
    float: none;
  }
}
</style>