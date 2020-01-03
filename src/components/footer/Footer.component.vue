<template>
  <div class="footer-container">
      <h2 class="main__title">Headquarters</h2>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.3862200256106!2d-118.32732255682232!3d33.9212558678047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee449b2a5%3A0x918118587c15c662!2sHawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sen!2shu!4v1578071159417!5m2!1sen!2shu" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </div>
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
    this.headquarters = company.headquarters
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
