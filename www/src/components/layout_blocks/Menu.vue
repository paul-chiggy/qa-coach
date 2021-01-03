<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!--<router-link to="/calc">Calculator</router-link> | -->
    <router-link to="/contacts">Contacts</router-link>
  </div>
</template>

<script>
export default {
  name: "menu-qa"
}
</script>

<style scoped>  
#nav, a {
  font-size: 1em;
  font-weight: bold;
}
@media (min-width: 320px) and (max-width: 414px) {
  #nav, a {
    font-size: 11px;
  }
}
</style>