<template>
  <div id="app">
    
    <Nav-Bar-Component />
    <router-view path="$router.key" />
    <Side-Bar-Component />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    SideBarComponent
  }
}
</script>

<style>

</style>
