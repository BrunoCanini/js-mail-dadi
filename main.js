// CHIEDERE L EMAIL ALL UTENTE (PROMPT O TYPETEXT)

// AVVIARE UN EVENTO (ADD EVENT LISTNER)

// VERIFICARE L EMAIL DATA SE è PRESENTE IN LISTA

// VERO (ANDIAMO AVANTI)
// FALSO (ERRORE)

// const emailUtente = document.getElementById("email");

let emailValide = ["bruno@boolean.com" , "tizio@boolean.com" , "caio@boolean.com"];

const button = document.getElementById("bottone");

button.addEventListener( "click" , function() {
    
    let emailUtente = document.getElementById("email");

    for (let c = 0; c < emailValide.length; c++) {
        const validaEmail = emailValide[c];

        if(emailUtente == validaEmail){
            allert("benvenuto");
        } else if(emailUtente != validaEmail){
            allert("Non sei autorizzato");
        }
        
    }


});