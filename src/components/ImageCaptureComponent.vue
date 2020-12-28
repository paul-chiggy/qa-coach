<template>
  <div class="image-capture-component">
    <p>
      {{ capture }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Image Capture Component',
  props: {
    capture: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #4a4fe6;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
