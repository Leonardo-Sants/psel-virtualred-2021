<template>

  <div class="sideBar">
      <nav class="mb-3">
        <b-nav vertical>
          <b-nav-item active @click="hide"><b-icon icon="house" id="icon"></b-icon>Ínicio</b-nav-item>
          <b-nav-item href="#" @click="hide"><b-icon icon="people" id="icon"></b-icon>Escolas</b-nav-item>
          <b-nav-item href="#" @click="hide"><b-icon icon="person" id="icon"></b-icon>Usuários</b-nav-item>
          <b-nav-item href="#" @click="hide"><b-icon icon="book" id="icon"></b-icon>Diplomas</b-nav-item>
        </b-nav>
      </nav>
  </div>

</template>

<script>
export default {
  name: 'SideBarComponent'
}
</script>


<style scoped>
.sideBar{
  width: 200px;
  height: 100%;
  position: absolute;
  background-color: #F9F9F9;
  box-shadow: 2px #000000;
}

.sideBar a {
  display: flex;
  align-items: center;
  margin: 15px;
  color: #3D3D3D;
}

.sideBar a:hover {
  color: #000000;
  font-weight: 600;
}

.sideBar #icon {
  margin: 10px;
}
</style>
