<template>
  <div class="card-container" v-if="cards && cards.length">
    <template v-for="card in cards">
      <Card :key="card.title + card.name" v-bind="card" />
    </template>
  </div>
  <div v-else>...loading</div>
</template>

<script>
import Card from "../card/Card.component";
import {
  MANAGEMENT_QUERY,
  COMPANY_QUERY,
  MARKETING_QUERY
} from "./card.queries";

export default {
  name: "CardContainer",
  components: {
    Card
  },
  data() {
    return {
      cards: []
    };
  },
  props: {
    cardType: String
  },
  async mounted() {
    let query;

    switch (this.cardType) {
      case "company-data":
        query = COMPANY_QUERY;
        break;
      case "marketing-data":
        query = MARKETING_QUERY;
        break;
      default:
        query = MANAGEMENT_QUERY;
        break;
    }
    const {
      data: { company }
    } = await this.$apollo.query({
      query
    });
    this.cards = Object.entries(company).reduce((acc, companyData) => {
      //TODO write the includes part transform string
      const title = companyData[0];
      const name = `${companyData[1]}`;
      if (title !== "__typename") acc.push({ title, name });
      return acc;
    }, []);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
