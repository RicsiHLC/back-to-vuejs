<template>
  <div id="app" class="main-continer px-4 flex">
    <Header />
    <main class="main flex flex-col items-center justify-center">
      <CardContainer cardType="marketing-data" />
      <h2 class="main__title">Company</h2>
      <CardContainer />
      <CardContainer cardType="company-data" />
    </main>
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
html {
  font-size: 14px;
}
.main-continer {
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: theme("body");
}
.main {
  max-width: 55vw;
  width: 100%;
}
.main__title {
  font-size: 2rem;
  color:black;
}
</style>
