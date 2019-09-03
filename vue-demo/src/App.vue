<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  // methods: {
  //   getCard() {
  //     this.$http.get('https://randomuser.me/api/').then((response) => {
  //       cosole.log(response)
  //     })
  //   },
  //   created() {
  //     this.getCard
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
