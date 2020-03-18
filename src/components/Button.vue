<template>
  <!-- Checking to see how dynamic clicks can be ($emit can become very handy) -->
  <button v-on:click="e => this.$slots.default ? $emit('toggle') : log(e)">
    <!-- Fiddling with slots -->
    <slot>Display Route Path</slot>
  </button>
</template>

<script>
export default {
  // multiple functions in a button can be
  // confusing and convoluted (like this one)
  // the purpose of this is to figure out
  // how dynamic Vue's components can become
  name: "Multi-Functional-Button",
  methods: {
    log(event) {
      // preventing the default here to ensure
      // that the page does not re-load
      event.preventDefault();
      // decided to grab the pathname directly
      // from router instead of using
      // a prop from the parent component
      console.log(this.$route.path);
    }
  }
};
</script>

<style lang='scss'>
button {
  box-shadow: none;
  padding: 5px 10px;
  border: 1px solid midnightblue;
  border-radius: 2.5px;
  outline: none;
  margin: 10px auto;
  background: #75757555;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px black;
  }
}
</style>
