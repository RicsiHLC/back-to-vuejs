<template>
  <div class="footer-container">
      <div v-for="(data, idx) in headquarters" :key="idx">
          {{data}}
      </div>
  </div>
</template>

<script>
import { FOOTER_QUERY } from "./footer.queries";

export default {
  name: "Footer",
  data() {
    return {
      headquarters: {}
    };
  },
  async mounted() {
    const {
      data: { company }
    } = await this.$apollo.query({
      query: FOOTER_QUERY
    });
    console.log(company);
    this.headquarters = company.headquarters

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
