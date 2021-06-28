<template>

  <div>
    <b-navbar toggleable="lg" type="dark" class="navBar">
      <b-navbar-brand href="#">VirtualRed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav  class="ml-auto">
          <b-nav-form id="Search">
            <b-input-group size="sm" class="mb-4" >
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input type="search" placeholder="Buscar Funcionalidades"></b-form-input>
            </b-input-group>
          </b-nav-form>

          <b-nav-item-dropdown right >
            <template #button-content class="Admin" >
              <em><b-icon icon="person-square"></b-icon> Super Admin</em>
            </template>
            <b-dropdown-item href="#">Super Admin</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>


<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

.navBar{
  background-color: #B28DD6;
  display: flex;
  width: 100%;
  height: 100px;
}


</style>
