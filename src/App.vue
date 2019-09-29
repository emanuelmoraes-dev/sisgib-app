<template>
<div id="app">
  <div class="container">
    <Slide>
      <router-link class="menu-link" to="/livros">Livros</router-link>
    </Slide>
    <router-view/>
  </div>
</div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
	name: 'App',
	components: { Slide }
}
</script>

<style lang="stylus">
body
  padding-top 2rem !important

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  .menu-link
    color white
</style>
