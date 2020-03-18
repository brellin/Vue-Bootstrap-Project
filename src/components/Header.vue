<template>
  <!-- I could have done this without making it a component -->
  <header>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
    </nav>
    <h1>Vue Routing</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang='scss' scoped>
// I decided to go with scss, because
// it compiles to include specificity
// and allows nesting to make for
// clean code that follows the nesting
// of the html markup
header {
  border-bottom: 1px solid #757575;
  border-radius: 25%;

  h1 {
    color: midnightblue;
  }
  nav {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    background: #75757555;
    padding: 5px 0;
    border-radius: 5px;

    a {
      color: #757575;
      background: whitesmoke;
      text-decoration: none;
      padding: 5px 10px;
      border-radius: 2.5px;
      transition: 0.3s ease;

      &:hover,
      &.router-link-active {
        background: #757575;
        color: whitesmoke;
      }
    }
  }
}
</style>
