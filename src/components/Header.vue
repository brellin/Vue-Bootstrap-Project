<template>
  <!-- I could have done this without making it a component -->
  <header>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
    </nav>
    <h1>Vue Routing - {{ this.pageName }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    pageName: function() {
      return this.$route.path.replace(/[/]/g, "");
    }
  }
};
</script>

<style lang='scss' scoped>
// I decided to go with scss, because
// it compiles to include specificity
// and allows nesting to make for
// clean code that follows the nesting
// of the html markup
header {
  border-bottom: 1px solid $gray;
  border-radius: 25%;

  h1 {
    color: midnightblue;
    text-transform: capitalize;
  }
  nav {
    @include flex($justify: space-around);
    width: 25%;
    margin: 0 auto;
    background: #{$gray}55;
    padding: 5px 0;
    border-radius: 5px;

    a {
      color: $gray;
      background: whitesmoke;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 2.5px;
      transition: 0.3s ease;

      &:hover,
      &.router-link-active {
        background: $gray;
        color: whitesmoke;
      }
    }
  }
}
</style>
