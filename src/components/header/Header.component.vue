<template>
  <div class="header">
    <img alt="Main logo" src="../../assets/logo.png" />
    <div>{{ title }}</div>
    <div>{{ summary }}</div>
  </div>
</template>

<script>
import gql from "graphql-tag";
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
      query: gql`
        query {
          company {
            name
          }
        }
      `
    });
        const {
      data: {
        company: { summary }
      }
    } = await this.$apollo.query({
      query: gql`
        query {
          company {
            summary
          }
        }
      `
    });
    this.title = name;
    this.summary = summary;
    this.loading = false;
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
