<template>

  <div>
    <b-navbar toggleable="lg" type="dark" class="navContainer">
      <b-navbar-brand href="#">VirtualRed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav  class="ml-auto">
          <b-nav-form >
            <b-input-group size="sm" class="Search" >
               <b-icon  id="iconSearch" icon="search"></b-icon>
              <b-form-input  type="search"  placeholder="Buscar Funcionalidades"></b-form-input>
            </b-input-group>
          </b-nav-form>      
        </b-navbar-nav>
      </b-collapse>
      <div>
        <b-icon  id="iconAdmin" icon="person-square"></b-icon>
      </div>
      <div class="Admin">
        <b>Super Adim</b>
        <b>Super Adim</b>
      </div>
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

.navContainer {
  background-color: #B28DD6;
  display: flex;
  width: 100%;
  height: 80px;
}

.Search {
  display: flex;
  align-items: center;
  width: 400px;
}

.Search #iconSearch {
  color: #C4C4C4;
  background-color: #fff;
  height: 30px;
}

.Admin {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 10px;
}

#iconAdmin{
  color: #C4C4C4;
  display: flex;
  margin: 10px;
}

</style>
