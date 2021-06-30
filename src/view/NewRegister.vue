<template>
    <section>
        <div class="headerRegister">
            <p>Cadastrar novo template</p>
            <div class="BtnSave">
                <b-button id="SaveButton" size="sm" type="submit">Salvar</b-button>
            </div>
        </div>

        <div class="Quill">
            <quill-editor
            class="QuillEditor"
            v-model="content"
            :options="editorOption"
            />
        </div>
       
    </section>
</template>



<script>  
  export default {
    name: 'NewRegister',
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

.BtnSave #SaveButton{
    width: 100%;
    display: flex;
    border-radius: 7px;
    background-color: #000000;    
}

.Quill {
    width: 80%;
    height: 30rem;
    display: flex;
    margin-right: 230px;
}

.QuillEditor {
    width: 80%;
}

</style>