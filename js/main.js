//COLLEGHIAMO ELEMENTI A JS 
const gridDom = document.getElementById('griglia');
const selezione = document.getElementById('difficult');
const play = document.getElementById ('btn');
let numeroquadrati;
let classBox;


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
