<template>
  <div class="header">
    <h1>Vue Routing</h1>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
    </nav>
  </div>
</template>

<style lang='scss' scoped>
// I decided to go with scss, because
// it compiles to include specificity
// and allows nesting to make for
// clean code that follows the nesting
// of the html markup
div.header {
  h1 {
    color: midnightblue;
  }
  nav {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;

    a {
      color: darkblue;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
