<template>
    <section>

        <div class="headerRegister">
            <p>Cadastrar novo template</p>
            <div class="BtnSave">
                <b-button id="SaveButton" size="sm" type="submit">Salvar</b-button>
            </div>
        </div>

        <div class="Edit">
             <div class="EditCanvas">
            <b-button id="Canva-img" size="sm" type="submit" @click="img()">Subir Imagem <div id="icon-up"><b-icon  icon="image"></b-icon></div></b-button>
                <div>
                    <hr class="linha-H">
                </div>
                <p>Formas:</p>
            <b-button id="Canva-Forms" size="sm" type="submit" @click="line()"><b-icon id="icon" icon="star"></b-icon></b-button>
                <div>
                    <hr class="linha-H">
                </div>
                <p>Campos:</p>
            <b-button id="Canva-text" size="sm" type="submit" @click="text()">T</b-button>
            <b-button id="Canva-text" size="sm" type="submit" ><b-icon id="icon" icon="image"></b-icon></b-button>
             </div>
            <div>
                <hr class="linha-H">
            </div>  
            <div>
                <p>Editando:</p>
            </div>
            <b-button id="B-Front" size="sm" type="submit" >Frente</b-button>
            <b-button id="B-Verse" size="sm" type="submit">Verso</b-button>
        </div>   

        <div class="Line">
            <hr class="linha-vertical">
            <p id="text-line">Diploma</p>
        </div>
 
        <div>
           
            <el-dialog
                :visible.sync="dialogJPG"
                append-to-body>
                <canvas id="mycanvas"  width= "800px" height="550px"></canvas>
            </el-dialog>
        </div>

        <div  class="V-Camp">
             <b-button id="V-Camp"  @click="styleModal()">Vincular Campo<b-icon id="V-CampIcon" icon="server">
            </b-icon></b-button>
        </div>
    
        <div class="mod">      
            <div class="Modal">
                <div class="modalCamp1">
                    <div>Escola</div>
                    <div id="Camp1">Mais específico<b-button id="I-Camp1" @click=" CampDrop()"><b-icon id="I-Camp1" icon="triangle-fill" rotate="180">
                    </b-icon></b-button>Campos<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="x" rotate="45">
                    </b-icon></b-button>
                    </div>
                    </div>

                    <div class="CampDropdown">
                <div class="modalCamp1">
                    <div>-> Reitor</div>
                    <div id="Camp1">Mais específico<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="triangle-fill" rotate="180">
                    </b-icon></b-button>Campos<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="x" rotate="45">
                    </b-icon></b-button>
                    </div>
                </div>

                <div class="modalCamp1">
                    <div>-> -> Curso</div>
                    <div id="Camp1">Mais específico<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="triangle-fill" rotate="180">
                    </b-icon></b-button>Campos<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="x" rotate="45">
                    </b-icon></b-button>
                    </div>
                </div>

                <div class="modalCamp1">
                    <div>-> -> Cordenador</div>
                    <div id="Camp1">Mais específico<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="triangle-fill" rotate="180">
                    </b-icon></b-button>Campos<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="x" rotate="45">
                    </b-icon></b-button>
                    </div>
                </div>

                <div class="modalCamp1">
                    <div>-> -> Aluno</div>
                    <div id="Camp1">Mais específico<b-button id="I-Camp1"><b-icon id="I-Camp1" icon="triangle-fill" rotate="180">
                    </b-icon>
                    </b-button>Campos<b-button id="I-Camp1" @click=" modalCampAluno()" ><b-icon id="I-Camp1" icon="x" rotate="45">
                    </b-icon></b-button>
                    </div>
                </div>

                <div class="ModalCampAluno">
                    <div>
                        <b-button id="B-ModalCampAluno">Nome</b-button>
                        <b-button id="B-ModalCampAluno">Idade</b-button>
                        <b-button id="B-ModalCampAluno">Genero</b-button>
                        <b-button id="B-ModalCampAluno">Documento</b-button>
                        </div>
                        <div class="B-CampVincular">
                        <b-button id="B-ModalCampAlunoVincular" @click="closeModal(), closeCampDrop(), closemodalCampAluno()">Vincular<b-icon id="I-ModalCampAlunoVincular" icon="triangle-fill" rotate="90">
                        </b-icon></b-button>
                    </div>
                </div>

                </div>
            </div>
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
        styleModal () {
            let modal = document.querySelector('.mod');
            modal.style.display = ('block');
        },

        closeModal() {
            let modal = document.querySelector('.mod')
            modal.style.display = ('none');
        },

        CampDrop() {
            let drop = document.querySelector('.CampDropdown');
            drop.style.display = ('block');
        },

        closeCampDrop() {
            let drop = document.querySelector('.CampDropdown');
            drop.style.display = ('none');
        }, 

        modalCampAluno() {
            let dropAluno = document.querySelector('.ModalCampAluno');
            dropAluno.style.display = ('block');
        },  
        closemodalCampAluno() {
            let dropAluno = document.querySelector('.ModalCampAluno');
            dropAluno.style.display = ('none');
        },   
      
        line() {

            this.vueCanvas.beginPath (); 
            this.vueCanvas.rect (90, 350, this.rectWidth, 1); 
            this.vueCanvas.stroke (); 

            this.vueCanvas.beginPath (); 
            this.vueCanvas.rect (520, 350, this.rectWidth, 1); 
            this.vueCanvas.stroke (); 
        },

        text() {
            this.vueCanvas.beginPath();
            this.vueCanvas.font ='16px Microsoft YaHei '
            this.vueCanvas.fillText('High School Graduation Diploma',290,50)

            this.vueCanvas.beginPath();
            this.vueCanvas.font ='16px Microsoft YaHei '
            this.vueCanvas.fillText('This certifies that',350,100)

            this.vueCanvas.beginPath();
            this.vueCanvas.font ='16px Microsoft YaHei '
            this.vueCanvas.fillText('Chris O. Christoferson',330,150)
            this.vueCanvas.beginPath();

            this.vueCanvas.beginPath();
            this.vueCanvas.font ='16px Microsoft YaHei '
            this.vueCanvas.fillText('has completed all the requirements of the',260,250)
            this.vueCanvas.fillText('curriculum of Timpton High School.',280,270)

            this.vueCanvas.beginPath();
            this.vueCanvas.font ='16px Microsoft YaHei '
            this.vueCanvas.fillText('Takehiro Kanegi',130, 370)
            this.vueCanvas.fillText('University Director',130, 385)
            this.vueCanvas.fillText('Mary Waltman',570, 370)
            this.vueCanvas.fillText('School Principal',570, 385)
           
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

.EditCanvas{
    width: 100%;
    display: flex;
    align-items: center;
}

.EditCanvas
#Canva-Forms,
#Canva-text {
    margin: 0px 5px 0px 20px; 
    border-radius: 50%;
    width: 35px;
    background-color: #68A35D;
}

.EditCanvas
#Canva-img {
    display: flex;
    margin: 0px 60px ;
    border-radius: 8px;
    width: 19%;
    background-color: #000;
}

#icon {
    color: #fff;
}

#icon-up {
    display: flex;
    margin-left: 40px;
}

.linha-H {
    display: flex;
    align-items: center;
    margin: 0px 15px;
    height: 25px;
    border-left: 1px solid;
    color: #989898;
}

.Edit  p{
   color: #989898;
   display: flex;
   margin: 0px 15px;
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
    margin-top: 25px;
    margin-right: 190px;
    font-size: 50px;
    width: 800px;
    height: 550px;
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

.V-Camp {
    position: absolute;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: flex-end;
    margin-top: 550px;
    
}

.V-Camp #V-Camp {
    background-color: #B28DD6;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #aaaaaa;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    height: 40px;
}

.mod{
    display: none;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 2000;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
}

.Modal {
    color: #000000;
    background-color: #F9F9F9;
    width: 800px;
    height: 600px;
    margin: 5px 250px;
    border-radius: 8px;
    position: absolute;
    box-shadow: 5px 5px 10px 5px #aaaaaa;
}

.modalCamp1 {
    width: 766px;
    height: 54px;
    display: flex;
    margin: 20px 10px;
    padding: 15px;
    align-items: center;
    color: #000000;
    background-color: #F9F9F9;
    box-shadow: 10px 10px 10px #aaaaaa;
    border-radius: 8px;
    border-color: #000000;
    font-weight: 500;
}

#Camp1 {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 450px;
    position: absolute;
    font-size: 16px;
    
}

#I-Camp1 {
    background-color: transparent;
    color: #B28DD6;
    border: none;
    font-size: 20px;
    margin: 5px;
}

.CampDropdown {
    display: none;
}

.ModalCampAluno{
    display: none;
}

.ModalCampAluno #B-ModalCampAluno {
    color: #000;
    background-color: transparent;
    width: 140px;
    height: 46px;
    margin: 20px 10px 10px 15px;
    border-radius: 8px;
    border: 1.5px solid #000;
    font: 16px;
    font-weight:500;
}

#B-ModalCampAluno:hover {
    background-color: #B28DD6;
    color: #fff;
    border: none;
}

#B-ModalCampAlunoVincular {
    display: flex;
    align-items: initial;
    justify-content: space-between;
    width: 205px;
    height: 40px;
    margin-left: 550px;
    background-color: #000;
    border-radius: 8px;
    margin-top: 55px;
}

#I-ModalCampAlunoVincular {
    display: flex;
}

</style>