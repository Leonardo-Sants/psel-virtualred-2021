<template>
  <div id="app">
    
    <NavBarComponent />
    <SideBarComponent />
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
