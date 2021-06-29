<template>
  <div id="app">
    
    <Nav-Bar-Component />
    <Graduate />
    <Side-Bar-Component />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'
import Graduate from './view/Graduate.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    Graduate,
    SideBarComponent
  }
}
</script>

<style>

</style>
