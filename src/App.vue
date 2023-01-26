
<template>
  <Header />
  <Test></Test>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import tododata from "./assets/data.js";
import Header from "./components/Header.vue";

export default {
  name : "App",
  components : {
    Header,
  }
  ,
  data : function() {
    return tododata
  }
}

</script>


<style scoped>
</style>
