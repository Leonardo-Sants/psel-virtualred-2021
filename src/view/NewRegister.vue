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
            <b-button id="B-Forms" size="sm" type="submit" @click="line()">Frente</b-button>
            <b-button id="B-Camp" size="sm" type="submit" @click="text()()">Verso</b-button>
             </div> 
            <div>
                <p>Editando:</p>
            </div>
            <b-button id="B-Front" size="sm" type="submit" >Frente</b-button>
            <b-button id="B-Verse" size="sm" type="submit">Verso</b-button>
        </div>   
 
        <div>
           
            <el-dialog
                :visible.sync="dialogJPG"
                append-to-body>
                <canvas id="mycanvas" width="940" height="470"></canvas>
            </el-dialog>
        </div>
    </section>
</template>



<script>  
  export default {
    name: 'NewRegister',
    data(){
        return{
            vueCanvas: null,
            rectWidth: 200,
        }
    },
    mounted() {
        var c = document.getElementById("mycanvas");
        var ctx = c.getContext("2d");    
        this.vueCanvas = ctx;    
    },

    methods: {
        line() {
        this.vueCanvas.beginPath (); 
        this.vueCanvas.rect (110, 350, this.rectWidth, 1); 
        this.vueCanvas.stroke (); 

        this.vueCanvas.beginPath (); 
        this.vueCanvas.rect (630, 350, this.rectWidth, 1); 
        this.vueCanvas.stroke (); 
        },

        text() {
            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('High School Graduation Diploma',400,50)

            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('This certifies that',430,100)

            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('Chris O. Christoferson',420,150)
            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('This certifies that',430,100)

            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('Chris O. Christoferson',420,150)

            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('has completed all the requirements of the',390,190)
            this.vueCanvas.fillText('curriculum of Timpton High School.',400,200)

            this.vueCanvas.beginPath();
            this.vueCanvas. Font ='800px Microsoft YaHei '
            this.vueCanvas.fillText('Takehiro Kanegi',180, 365)
            this.vueCanvas.fillText('University Director',180, 375)
            this.vueCanvas.fillText('Mary Waltman',700, 365)
            this.vueCanvas.fillText('School Principal',700, 375)
           
           
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
    color: #000000;
}

</style>