<template>
  <div id="front-page">
    <UnderConstruction />
  </div>
</template>

<script>
import UnderConstruction from "./../blocks/UnderConstruction.vue";

export default {
  name: "FrontPage",
  components: {
    UnderConstruction
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#front-page {
  height: 100%;
}
</style>
