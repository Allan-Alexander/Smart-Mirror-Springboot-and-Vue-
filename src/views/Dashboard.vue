<template>
   
<div class="pl-15">
<h2>Dashboard</h2>
<v-container>
      
      <div id="parent_div_1">
       <div class="app">
         <WeatherApp></WeatherApp> 
       </div>
      </div>

      <div id="parent_div_2">
       <div class="todo">
        <Todo/>
       </div>
      </div> 
        
</v-container> 
</div>  
</template>

<script>
import WeatherApp from '../components/WeatherApp'
import Todo from '../components/Todo'
export default {
  name: 'App',

  components: {
    WeatherApp,
    Todo
  },

  data() {
    return {
      date: new Date,
  }
  },

}
</script>
<style scoped>
/** Global **/
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color .2s ease-in;
}

#parent_div_1,parent_div_2{
    margin-right:10px;
    float:left;
}

/** App **/


.app {
  height: 80vh;
  width: 100vw;

  display: flex;
  margin-left: 75rem;
  justify-content: right;
  align-items: center;
}

.app--day {
  /*background: linear-gradient(to bottom right, #6CB9C8, #6CB9C8) no-repeat;*/
  background-color: #212121;
}

.app--night {
  /*background: linear-gradient(to bottom right, #484F60, #484F60) no-repeat;*/
  background-color: #212121;
}

.app--day a:hover {
  color: #212121;
}

.app--night a:hover {
  color: #212121;
}

.todo {
  position: absolute;
}

</style>