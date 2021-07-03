<template>

  <div>
    <b-navbar toggleable="lg" type="dark" class="navContainer">
      
      <b-navbar-brand href="#" id="logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav  class="ml-auto">
          <b-nav-form >
            <b-input-group size="sm" class="Search" >
              <b-button id="iconSearch" type="submit"><b-icon icon="search"></b-icon></b-button>
              <b-form-input id="Search"  type="search"  placeholder= "Buscar Funcionalidades"></b-form-input>
            </b-input-group>
          </b-nav-form>      
        </b-navbar-nav>
      </b-collapse>  

      <div>
        <b-icon class="h1 mb-2" id="iconAdmin" icon="person-square"></b-icon>
      </div>
      <div class="Admin">
        <b>Super Adim</b>
        <b id="subAdmin">Super Adim</b>
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
  height: 100px;
  border: 1px solid #BFBFBF;
  box-shadow: 5px 5px 5px #aaaaaa;
}

#logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 200px;
  height: 78px;
  margin: 18px 10px;
}

.Search {
  display: flex;
  margin: 15px;
  width: 470px;
}

.Search #Search {
  display: flex;
  text-align: center;
  border-radius: 8px;
}

.Search #iconSearch {
  color: #C4C4C4;
  background-color:transparent;
  height: 30px;
  width: 50px;
  position: absolute;
  border: none;
}

.Admin {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 10px;
  font-size: 16px;
}

.Admin #subAdmin {
  color: #fff;
  font-size: 10px;
}

#iconAdmin{
  color: #C4C4C4;
  display: flex;
}

</style>
