<template>
  <button v-on:click="clickHandler">{{ content }} Page Path</button>
</template>

<script>
export default {
  name: "Button",
  // whereas I could have dynamically used the
  // pathname like I did in the method, I wanted
  // to experiment with prop drilling in Vue
  props: {
    content: {
      type: String
    }
  },
  methods: {
    clickHandler(event) {
      // preventing the default here to ensure
      // that the page does not re-load
      event.preventDefault();
      // I decided to grab the pathname directly
      // from router instead of
      // using a prop from the parent
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
  background: #75757555;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px black;
  }
}
</style>
