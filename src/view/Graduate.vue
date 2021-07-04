<template>
    <section>

        <div class="headerRegister">
            <p>Template de diplomas cadastrados</p>
            <div class="BtnRegister">
                <b-button id="RegisterButton" size="sm" type="submit" ><a href="/Novo-Cadastro">Cadastrar</a></b-button>
            </div>
        </div>
        <div class="Filter">
            <div class="paragrafos">
            <p id="P-Filter"><b-icon icon="funnel"></b-icon>Filter</p>
            <div>
                <hr class="linha-H">
            </div>
            <p id="P-Order">Ordenar por</p>
            </div>
            <div class="BtnFilter">
            <b-button id="B-Filter" size="sm" type="submit">Data</b-button>
            <b-button id="B-FilterName" size="sm" type="submit">Nome</b-button>
            <b-button id="B-FilterAtt" size="sm" type="submit">Atualização</b-button>
            </div>
        </div>

        <div class="Line">
            <hr class="linha-vertical">
            <p id="text-line">Diploma</p>
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
    text-decoration: none; 
    color: #fff;  
}

a {
    text-decoration: none;
    color: #fff;
}

.paragrafos {
    display: flex;
    margin: 0px 5px;
}

#P-Filter{
    display: flex;
    align-items: center;
    margin: 0px 15px;
    padding: 0px 5px;
    color: #989898;
}

.linha-H {
    display: flex;
    align-items: center;
    margin: 0px 10px;
    height: 25px;
    border-left: 1px solid;
    color: #989898;
}

#P-Order{
    display: flex;
    align-items: center;
    margin: 0px 15px;
    color: #989898;
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

.Line {
    display: flex;
    width: 100%;
    margin-top: 10px;
}

.Line #text-line{
    color: #fff;
    background-color: #000000;
    border-radius: 8px;
    margin-left: 60px;
    width: 78px;
    height: 20px;
    margin-top: 5px;
    font-size: 12px;
    text-align: center;  
    position: absolute; 
    font-weight: 600;
}

.linha-vertical {
    width: 100%;
    border: 1px dashed #C4C4C4;
}

.table {
    width: 1100px;  
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
    border-radius: 8px;
    color: #000000;
    
}


</style>