<template>
  <div class="card">
    <!-- <img src="{{iconBadge}}" /> -->
    <div>{{ name }}</div>
    <div>{{ jobTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    jobTitle: String,
    name: String,
    iconBadge: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
