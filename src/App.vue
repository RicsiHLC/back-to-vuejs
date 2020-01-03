<template>
  <div id="app">
    <Header summary="Welcome to Your Vue.js App" name="Space X" />
    <CardContainer :cards="cardsArr" />
  </div>
</template>

<script>
import Header from "./components/header/Header.component";
import CardContainer from "./components/card-conainer/Card-container.component";
export default {
  name: "app",
  components: {
    Header,
    CardContainer
  },
  data: function() {
    return {
      cardsArr: [ {
        name: 'Elon',
        jobTitle: 'CTO'
      }] 
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
