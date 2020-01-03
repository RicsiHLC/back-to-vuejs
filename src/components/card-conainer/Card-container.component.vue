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
import gql from "graphql-tag";

export default {
  name: "CardContainer",
  components: {
    Card
  },
  apollo: {
    cards: {
      query: gql`
        query {
          company {
            ceo
            cto
            coo
            cto_propulsion
          }
        }
      `,
      update: data =>
        Object.entries(data.company).reduce((acc, companyData) => {
          //TODO write the includes part transform string
          const title = companyData[0];
          const name = companyData[1];
          if (title !== "__typename") acc.push({ title, name });
          return acc;
        }, [])
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
