<template>
    <section>
        <div class="headerRegister">
            <p>Template de diplomas cadastrados</p>
            <div class="BtnRegister">
                <b-button id="RegisterButton" size="sm" type="submit">Cadastrar</b-button>
            </div>
        </div>
        <div class="Filter">
            <p><b-icon icon="funnel"></b-icon>Filter</p>
            <p>Ordenar por</p>
            <div class="BtnFilter">
            <b-button id="B-Filter" size="sm" type="submit">Data</b-button>
            <b-button id="B-FilterName" size="sm" type="submit">Nome</b-button>
            <b-button id="B-FilterAtt" size="sm" type="submit">Atualização</b-button>
            </div>
        </div>
        <div class="overflow-auto">

            <b-table class="table"
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                smal>
            </b-table>

            <b-pagination class="Page"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>
            

        </div>
    </section>
</template>

<script>
  export default {
      name: 'Graduate',
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          {  Titulo_do_diploma_a_ser_usado_pelo_template: '', Escola_que_usa_esse_diploma: '',
           Curso_que_usa_esse_diploma: '', N_de_usuários_associados: '', }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>

<style scoped>
section {
    width: 85%;
    height: 100%;
    left: 15%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
}

.headerRegister {
    width: 100%;   
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
}

.headerRegister p{
    display: flex;
    width: 100%;
    left: 20px;
    margin-top: 5px;
}

.BtnRegister #RegisterButton{
    width: 100%;
    display: flex;
    border-radius: 7px;
    background-color: #000000;    
}

.Filter  {
    width: 100%;
    display: flex;
    margin: 5px;
    justify-content: space-between;
}

.Filter  p{
   color: #000000;
}

.BtnFilter #B-Filter{
    background-color: #000000;
    margin: 0px 2px;
    border-radius: 10px 0px 0px 10px;
    width: 100px;
}

#B-FilterName, #B-FilterAtt {
    background-color: #B28DD6;
    width: 100px;
}

#B-FilterAtt {
    border-radius: 0px 10px 10px 0px;
    margin: 0px 2px;
}

.table {
    width: 1100px;  
    background-color: #F9F9F9;
    border-radius: 15px;
    box-shadow: 10px 10px 5px #aaaaaa;
}

.Page {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 250px;
    color: #000000;
}

.page-item desable{
    background-color: #000000;
}

#my-table {
    font-size: 12px;
    margin: 100px 10px;
    color: #000000;
}


</style>