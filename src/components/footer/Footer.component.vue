<template>
  <footer class="footer-container flex flex-col items-center">
    <h2 class="main__title">Headquarters</h2>
    <div class="flex ">
      <iframe
        class="rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.3862200256106!2d-118.32732255682232!3d33.9212558678047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee449b2a5%3A0x918118587c15c662!2sHawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sen!2shu!4v1578071159417!5m2!1sen!2shu"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
      ></iframe>
      <div class="flex flex-col ml-3">
        <div v-for="(data, idx) in headquarters" :key="idx">
          <div v-if="idx !== '__typename'">
            <span class="title">{{ idx }}:</span>{{ data }}
          </div>
        </div>
        <div><span class="title">Launchsites:</span>{{ this.launchSites }}</div>
        <div><span class="title">Elon Musk:</span></div>
        <div><span class="title">Space X:</span></div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FOOTER_QUERY } from "./footer.queries";

export default {
  name: "Footer",
  data() {
    return {
      headquarters: {},
      launchSites: 0
    };
  },
  async mounted() {
    const {
      data: { company }
    } = await this.$apollo.query({
      query: FOOTER_QUERY
    });
    console.log(company);
    this.headquarters = company.headquarters;
    this.launchSites = company.launch_sites;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
  max-width: 55vw;
  width: 100%;
}
.title {
  color: black;
  font-weight: bold;
}
</style>
