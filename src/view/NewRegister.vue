<template>
    <section>

        <div class="headerRegister">
            <p>Cadastrar novo template</p>
            <div class="BtnSave">
                <b-button id="SaveButton" size="sm" type="submit">Salvar</b-button>
            </div>
        </div>

        <div class="Edit">
            <div>
                <p>Editando:</p>
            </div>
            <b-button id="B-Front" size="sm" type="submit">Frente</b-button>
            <b-button id="B-Verse" size="sm" type="submit">Verso</b-button>
        </div>

        <element-ui
            :visible.sync="dialogJPG"
            append-to-body>
            <canvas id="mycanvas" width="940" height="570"></canvas>
        </element-ui>

        

    </section>
</template>



<script>  
  export default {
    name: 'NewRegister',
    data() {
        return {
            canvas: null,
            context: null,
            width: 400,
            height: 250,
            isdrawing: null,
            startX: 0,
            startY: 0,
            backGround: 'url("picture") no-repeat center'
        }
    },

     mountend() {
            var myCanvas=document.getElementById('myCanvas');
             var ctx = myCanvas.getContext('2d');
             ctx. Beginpath();
             ctx.moveTo(700,50);
             ctx.lineTo(900,50);
             ctx.closePath();
             ctx.lineWidth=2;
             ctx.strokeStyle='blue';
             CTX. Stroke()
        },

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

.Edit {
    width: 100%;
    display: flex;
    margin: 5px;
    justify-content: flex-end;
    margin-bottom: 10px;
}

.Edit  p{
   color: #989898;
   display: flex;
   margin: 5px;
}

.Edit #B-Front{
    background-color: #000000;
    margin: 0px 2px;
    width: 70px;
    border-radius: 10px 0px 0px 10px;
    display: flex;
}

#B-Verse {
    border-radius: 0px 10px 10px 0px;
    margin: 0px 2px;
    width: 70px;
    background-color: #B28DD6;
}

#mycanvas {
    border: 1px solid rgb(199, 198, 198);
}

</style>