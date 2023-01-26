
<template>
  <h1>Home</h1>
  <ul>
    <li v-for="(day , i) of week" :key="i">
      <!-- <RouterLink :to="`items/${day}`">{{day}}</RouterLink> -->
      <RouterLink :to="{ name: 'items', params: {week: day }}">{{day}}</RouterLink>
    </li>
  </ul>
</template>

<script>
import App from "../App.vue";
import {RouterLink} from 'vue-router'

  export default{
    name : 'Home',
    data : ()=>{
      return {
        items : App.data(),
        week : ["sun","mon","tus","wed","Thur","fri","sat"]
      }
    }, 
  }
</script>