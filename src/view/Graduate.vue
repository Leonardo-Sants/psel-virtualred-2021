<template>
    <section>
        <div class="headerRegister">
            <p>Template de diplomas cadastrados</p>
            <b-button id="RegisterButton" size="sm" type="submit">Cadastrar</b-button>
        </div>
        <div>
            <p></p>
            <p></p>
            <b-button id="RegisterButton" size="sm" type="submit">Data</b-button>
            <b-button id="RegisterButton" size="sm" type="submit">Nome</b-button>
            <b-button id="RegisterButton" size="sm" type="submit">Atualização</b-button>
        </div>
        <div class="overflow-auto">

            <b-table class="table"
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                small>
            </b-table>

            <b-pagination
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
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Fred', Escola_que_usa_: 'Flintstone', Curso_que_usa_esse_diploma: '', },
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Wilma', Escola_que_usa_: 'Flintstone', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Barney', Escola_que_usa_: 'Rubble', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Betty', Escola_que_usa_: 'Rubble', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Pebbles', Escola_que_usa_: 'Flintstone', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Bamm Bamm', Escola_que_usa_: 'Rubble', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'The Great', Escola_que_usa_: 'Gazzoo', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Rockhead', Escola_que_usa_: 'Slate', Curso_que_usa_esse_diploma: '',},
          {  Titulo_do_diploma_a_ser_usado_pelo_template: 'Pearl', Escola_que_usa_: 'Slaghoople', Curso_que_usa_esse_diploma: '',}
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
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
}

.headerRegister {
    width: 100%;   
    display: flex;
    align-items: initial;
    font-size: 28px;
    font-weight: 600;
}

.headerRegister p{
    display: flex;
    left: 20px;
}

.headerRegister #RegisterButton{
    display: flex;
    margin: 5px 250px;
    height: 30px;
    justify-content: center;
    background-color: #000000;
}

.table{
    width: 900px;
    margin-top: 100px;
}


</style>