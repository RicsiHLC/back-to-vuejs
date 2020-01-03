<template>
  <div :class="classObject">
    <img v-if="!hiddenLogo" class="w-10 h-10 rounded-full logo" src="https://i.pinimg.com/736x/4c/7f/2b/4c7f2b3ee2cfbfac41650643f473087e.jpg" />
    <div class="name">{{ name }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    name: String,
    iconBadge: String,
    reverse: Boolean,
    hiddenLogo: Boolean
  },
  computed: {
    classObject: function() {
      return `${
        this.reverse ? "reverse flex-col-reverse" : "flex-col"
      } card flex items-center p-5`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card.reverse .logo {
  order: 1;
}
.card:not(.reverse) .logo {
  order:0;
}
.card {
  min-height: 50px;
  text-align: center;
}
.card:not(.reverse) .name,
.card.reverse .title {
  font-weight: bold;
  color: black;
}
.card:not(.reverse) {
  background: #e4e3e3a6;
  width: 140px;
  border-radius: 0.5rem;
}
</style>
