//COLLEGHIAMO ELEMENTI A JS 
const gridDom = document.getElementById('griglia');
const selezione = document.getElementById('difficult');
const play = document.getElementById ('btn');
let comunication = document.getElementById('status');
let numeroquadrati;
let classBox;
let quantita = 16;
let punteggio= 0;



play.addEventListener('click',
function(){
   gridDom.innerHTML="";
    creazionegrigliacompleta();

}
)

function creazioneElemento(){
    const element = document.createElement('div');
    element.classList.add('cella');
    return element;
}

function creazionegrigliacompleta(){
    if(selezione.value == "facile"){
        numeroquadrati= 100;
        classBox = "cellafacile";
        generabomba(1,numeroquadrati,quantita);
    } else if (selezione.value == "intermedio"){
        numeroquadrati= 81;
        classBox = "cellamedia";
        generabomba(1,numeroquadrati,quantita);
    } else if (selezione.value == "difficile"){
        numeroquadrati=49;
        classBox="celladifficile";
        generabomba(1,numeroquadrati,quantita);
    }
    
    creazionegriglia();
}

function creazionegriglia(){
    for(let i = 1; i <= numeroquadrati; i++){
        const element = creazioneElemento();
        element.classList.add(classBox);
        element.append(i);
        element.addEventListener('click', 
        function(){
            if(arrayNumeri.includes(i)){
                this.classList.add('bomba');
                comunication.innerHTML="hai perso";
            }else{
                this.classList.add('clicked');
                punteggio++;
                comunication.innerHTML=`il tuo punteggio è ${punteggio};`
            }
            

        }
        
        )
        gridDom.append(element);
    }  
}
//CREO FUNZIONE CHE CREI NUMERI CASUALI IN BASE AL RANGE DA NOI INSERITO
function generabomba(min, max, quantita){
     arrayNumeri=[];
    for(let i=1; i <= quantita; i++){
       arrayNumeri.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(arrayNumeri);
    return arrayNumeri;
}