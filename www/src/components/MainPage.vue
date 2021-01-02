<template>
  <div id="content">
    <h1>{{ msg }}</h1>
    <h1>Coming soon...</h1>
  </div>
</template>

<script>

export default {
  name: "MainPage",
  components: {
    // add here 
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
#content {
  height: 100%;
}
</style>
