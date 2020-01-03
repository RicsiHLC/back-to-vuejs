<template>
  <div class="card-container" v-if="cards && cards.length">
    <template v-for="card in cards">
      <Card :key="card.jobTitle + card.name" v-bind="card" />
    </template>
  </div>
  <div v-else>...loading</div>
</template>

<script>
import Card from "../card/Card.component";
export default {
  name: "CardContainer",
  components: {
    Card
  },
  props: {
    cards: {
        type: Array,
        default: (() => [])
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
