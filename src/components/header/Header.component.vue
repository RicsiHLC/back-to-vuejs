<template>
  <div class="header flex items-center justify-center">
    <div class="flex items-center justify-center flex-col inner-container">
      <h1 class="hedaer__title">{{ title }}</h1>
      <div class="header__summary">{{ summary }}</div>
    </div>
  </div>
</template>

<script>
import { HEADER_COMPANY_NAME, HEADER_COMPANY_SUMMARY } from "./header.queries";
export default {
  name: "Header",
  data() {
    return {
      title: "",
      summary: ""
    };
  },
  async mounted() {
    this.loading = true;
    const {
      data: {
        company: { name }
      }
    } = await this.$apollo.query({
      query: HEADER_COMPANY_NAME
    });
    const {
      data: {
        company: { summary }
      }
    } = await this.$apollo.query({
      query: HEADER_COMPANY_SUMMARY
    });
    this.title = name;
    this.summary = summary;
    this.loading = false;
  }
};
</script>

<style>
.header {
  background-image: url("../../assets/logo.jpg");
  background-position: 50% 15%;
  background-size: auto;
  background-repeat: no-repeat;
  min-height: 400px;
  width: 100%;
  color: white;
  font-family: theme("fontFamily.display");
}
.hedaer__title {
  font-size: 3rem;
}
.header__summary {
  width: 90%;
}
.inner-container {
  max-width: 50vw;
  min-width: 480px;
}
</style>
