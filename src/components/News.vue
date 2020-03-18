<template>
  <div class="news">
    <h2>News</h2>
    <Button />
    <!-- Multi-functional button component (wouldn't normally do this) -->
    <Button v-on:toggle="toggleOpen">View News</Button>
    <div class="news-display" v-if="this.$data.open">
      <h3>Some News</h3>
      <ul>
        <li>News 1</li>
        <li>News 2</li>
        <li>News 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "News",
  components: { Button },
  methods: {
    toggleOpen() {
      this.$data.open = !this.$data.open;
      return;
    }
  },
  data: function() {
    return { open: false };
  }
};
</script>

<style lang="scss">
div.news {
  display: flex;
  flex-direction: column;
  align-items: center;

  div.news-display {
    background: #{$gray}55;
    color: whitesmoke;
    width: 50%;
    min-height: 20vh;
    border-radius: 2.5px;

    h3 {
      color: $blay;
    }

    ul {
      padding: 15px;
      text-align: left;

      li {
        list-style-type: none;
        color: $gray;
      }
    }
  }
}
</style>
