//COLLEGHIAMO ELEMENTI A JS 
const gridDom = document.getElementById('griglia');
const selezione = document.getElementById('difficult');
const play = document.getElementById ('btn');
let numeroquadrati;
let classBox;
let numeri = generanumeriCasuali(1, 100, 16);
console.log(numeri);



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
    } else if (selezione.value == "intermedio"){
        numeroquadrati= 81;
        classBox = "cellamedia";
    } else if (selezione.value == "difficile"){
        numeroquadrati=49;
        classBox="celladifficile";
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
            console.log(this);
            this.classList.toggle('clicked');
            console.log(`Hai scelto la casella numero ${i}`)
        }
        
        )
        gridDom.append(element);
    }  
}
//CREO FUNZIONE CHE CREI NUMERI CASUALI IN BASE AL RANGE DA NOI INSERITO
function generanumeriCasuali(min, max, quantita){
    let numeriCasuali=[];
    for(let i=1; i < quantita; i++){
        numeriCasuali.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeriCasuali;
}