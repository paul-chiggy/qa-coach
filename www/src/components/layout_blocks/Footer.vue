<template>
  <div id="footer">
    <div id="footer_inner">
      <Menu class="topmenu"/>
      <!--<p>QA Coach, Pavlo Chigishev © 2021</p>-->
      <p>{{ renderAppInfo() }}</p>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import axios from "axios";

export default {
  name: "footer-qa",
  components: {
    Menu
  },
  data() {
    return {
      appName: "",
      author: ""
    }
  },
  methods: {
    renderAppInfo: function() {
      return this.appName + " | " + this.author;
    },
    async fetchApiInfo() {
      const info = await axios.get("/api/info");
      this.appName = info.data[0].name;
      this.author = info.data[0].author;
    }
  },
  // Declare mounted lifecycle hook
  mounted() {
    this.fetchApiInfo();
  }
}
</script>

<style scoped>
#footer {
  background-color: #f1f1f1;
  border-top: 1px solid #cdcdcd;
  height: 80px;
}
#footer_inner {
  max-width: 768px;
  margin: auto;
}
.topmenu {
  margin-top: 10px;
}
@media (min-width: 0px) and (max-width: 768px) {
  #footer_inner {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>