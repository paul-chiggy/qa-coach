<template>
  <div class="under-construction">
    <ImageCaptureComponent capture="QA coaching platform"/>
    <h3>Under construction</h3>
    <p>
      This website is temporarily under construction. Please, for further details refer to:
      <a href="https://pavlo.nl" target="_blank">this website</a>
    </p>
  </div>
</template>

<script>
import ImageCaptureComponent from "./ImageCaptureComponent.vue";

export default {
    name: "Under Construction",
    components: {
        ImageCaptureComponent
    }
}
</script>

<style scoped>
.under-construction {
  height: 100%;
  padding: 10px;
}
</style>