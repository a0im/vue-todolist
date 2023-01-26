<template>
<h1>{{ this.$route.params.week }}</h1>
<ul>
  <li v-for="(isTodo , i) of renderTodos()" :key="i">
    <span>{{ isTodo.text }}</span>
  </li>
</ul>
</template>
<script>

import App from "../App.vue";
  export default{
    name : 'items',
    data: () => {
      return {
        todoData : App.data(),
      }
    },
    methods : {
      renderTodos () {
        let todo = this.$data.todoData.filter(data => {
          if (data.week == this.$route.params.week) return true
          }
        )
        return todo
      },
      created(){
        // currnDay = this.$route.params.week
      }
    }
  }
</script>