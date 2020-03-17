<template>
  <button v-on:click="clickHandler">{{ content }} Page Path</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: {
      type: String
    }
  },
  methods: {
    clickHandler: function(event) {
      event.preventDefault();
      console.log(window.location.pathname);
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
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #c3c3ff;
  }
}
</style>
