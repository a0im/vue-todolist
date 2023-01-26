<template>

  <header>
    <h1><RouterLink to="/">To Do APP</RouterLink></h1>

    <input type="text" placeholder="일정을 입력하세요" v-model="inputText">
    <button @click="addTodo">추가</button>

    <select name="selectweek" v-model="getSelect">
      <option value="/" selected>요일을 선택하세요</option>
      <option v-for="(day , i) of homeProps.week" :key="i" :value="day">{{ day }}</option>
    </select>
  </header>

  </template>
  <script>
  import {RouterLink} from 'vue-router'
  import data from '../assets/data';
  import App from "../App.vue";
  import Home from "../components/Home.vue";


  
  export default{
    name : 'Header',
    data (){
      return {
        createTodo : {},
        inputText : "",
        getSelect : "/",
        todoData : App.data(),
        homeProps : Home.data()
      }
    },
    methods : {
      addTodo () {
        if (this.inputText == "" || this.getSelect == "/") return

        let newprop = {
          id: this.todoData.length + 1,
          text : this.inputText,
          checked :  false,
          week : this.getSelect,
          date : '2022-12-16'
        }

        this.todoData.push(newprop)
      }
    }
    
  }

  console.log(data.inputText);
  </script>