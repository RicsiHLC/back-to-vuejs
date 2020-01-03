<template>
  <div :class="classObject">
    <!-- <img src="{{iconBadge}}" /> -->
    <div>{{ name }}</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    name: String,
    iconBadge: String,
    reverse: Boolean
  },
  computed: {
    classObject: function() {
      return `${
        this.reverse ? "flex-col-reverse" : "flex-col"
      } card flex items-center p-5`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  min-height: 50px;
}
</style>
