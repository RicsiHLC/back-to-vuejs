<template>
  <div class="header">
    <img alt="Main logo" src="../../assets/logo.png" />
    <div>{{ title }}</div>
    <div>{{ summary }}</div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
