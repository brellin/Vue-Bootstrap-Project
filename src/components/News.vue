<template>
  <div class="news">
    <Button />
    <!-- Multi-functional button component (wouldn't normally do this) -->
    <Button v-on:toggle="toggleOpen">{{ isOpen ? 'Hide' : 'Display' }} News</Button>
    <div class="news-display" v-if="isOpen">
      <h3>Some News</h3>
      <ul>
        <li v-for="(val, index) in Array(3)" :key="index">News Article {{ index + 1 }}</li>
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
      this.isOpen = !this.isOpen;
      return;
    }
  },
  data() {
    return { isOpen: false };
  }
};
</script>

<style lang="scss">
div.news {
  @include flex(column, $align: center);

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
