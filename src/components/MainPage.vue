<template>
  <div class="main-page">
    <ImageCaptureComponent capture="QA coaching"/>
    <h1>{{ msg }}</h1>
    <h3>Under construction</h3>
    <p>
      This website is temporarily under construction. Please, for further details refer to:
      <a href="https://pavlo.nl" target="_blank">this website</a>
    </p>
  </div>
</template>

<script>
import ImageCaptureComponent from './ImageCaptureComponent.vue'

export default {
  name: 'MainPage',
  components: {
    ImageCaptureComponent
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
a {
  color: #42b983;
}
</style>
