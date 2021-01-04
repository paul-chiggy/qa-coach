<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
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
#nav > a {
  font-size: 1em;
  font-weight: bold;
  padding: 5px 0px 5px 10px;
  text-decoration: none;
}
#nav > a:hover {
  color: #701cba;
  text-decoration: underline;
}
@media (min-width: 320px) and (max-width: 414px) {
  #nav, a {
    font-size: 11px;
  }
}
</style>