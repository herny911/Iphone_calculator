//inizializzo costanti display,tasto ac,
const display = document.getElementById("display");
const ac = document.getElementById("ac");
const total = document.getElementById("total");


/*inizializzo gli operatori in JS*/
const plus = document.getElementById("plus");
const div  = document.getElementById("div");
const min = document.getElementById("min");
const mul = document.getElementById("mul");
const percent = document.getElementById("percent")
const negative = document.getElementById("negative");


//inizializzo le variabili delle funzioni
let a = 0
let b = 0
let c = ""

//dichiaro funzioni di operazioni 

function summ(a,b){
    return a+b};

function divv(a,b){
    return a/b
}

function mult(a,b){
    return a*b
}
function subs(a,b){
return a-b
}

function negativo(a){
    return a*(-1)
}

function percentu(a,b) {
    b = Number(display.textContent)
    return a*b/100
}               
 //percentuale numerica * numeroOriginale /100 



ac.addEventListener("click",function(){
    if(display.textContent.length >1){display.textContent = display.textContent.slice(0,-1);}
    else{
    display.textContent = "";
    ghostDisplay.textContent ="";
    ac.textContent="AC"}
})

const num_buttons = document.querySelectorAll('.num');
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]




//gestione Buttons numerici tramite data- e forEach 
num_buttons.forEach(
    btn => {
        btn.addEventListener("click",(event) =>{
            let val = event.currentTarget.dataset.value; 
        
if(val==="0"&&display.textContent==="") return ;
if(val==="."){display.textContent = "0"+val}


if(numbers.includes(val||"")){
    display.textContent+=val;}
        
        
        if(display.textContent != ""){
    ac.textContent="<=";} else ac.textContent="AC"
    })
    })




//buttons operatori

plus.addEventListener("click",function(){
    a = Number(display.textContent);
    c = "+";
    if(ghostDisplay.textContent.includes("+")){return} else
    ghostDisplay.textContent += display.textContent+c;
    display.textContent = "";
    })

    min.addEventListener("click",function(){
        a = Number(display.textContent);
        c = "-";
        ghostDisplay.textContent += display.textContent+c;
        display.textContent = ""; 
    })

    div.addEventListener("click",()=>{
    a = Number(display.textContent);
    c = "/";
    ghostDisplay.textContent += display.textContent+c;
    display.textContent = "";
    })

    mul.addEventListener("click",()=>{
        a=Number(display.textContent);
        c = "X";
        ghostDisplay.textContent += display.textContent+c;
        display.textContent = ""
    })

    negative.addEventListener("click",() => {
    if(display.textContent==="") return
        a = Number(display.textContent);
        
   display.textContent= negativo(a);

})


    percent.addEventListener("click",()=>{
        if(display.textContent === "")return
        c="%";
        a=Number(display.textContent);
        ghostDisplay.textContent += display.textContent+c;
        display.textContent = "";
        

    })


    total.addEventListener("click",function(){   //Listener tasto uguale 
    b = Number(display.textContent);
    if(display.textContent.)
    ghostDisplay.textContent += b 
    
     
 
    if(c === "+"){                                           //fatto  filtri if(operatore){
       display.textContent = summ(a,b).toString(); return }     //   usa funzione dedicata}
    else if(c === "/"){
        display.textContent = divv(a,b).toString() ;
    }   
    
    if(c==="-"){display.textContent = subs(a,b).toString(); 
        return}

    if(c==="X"){display.textContent = mult(a,b).toString(); return}

    if(c==="%"){display.textContent = percentu(a,b)}

                                                        
    
    
  })
    
    





    