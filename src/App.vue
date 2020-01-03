<template>
  <div id="app">
    <Header />
    <CardContainer cardType="marketing-data" />
    <CardContainer />
    <CardContainer cardType="company-data" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/Header.component";
import CardContainer from "./components/card-conainer/Card-container.component";
import Footer from "./components/footer/Footer.component";
export default {
  name: "app",
  components: {
    Header,
    CardContainer,
    Footer
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
