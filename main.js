// CHIEDERE L EMAIL ALL UTENTE (PROMPT O TYPETEXT)

// AVVIARE UN EVENTO (ADD EVENT LISTNER)

// VERIFICARE L EMAIL DATA SE è PRESENTE IN LISTA

// VERO (ANDIAMO AVANTI)
// FALSO (ERRORE)

const button = document.getElementById("bottone");

button.addEventListener( "click" , function() {
    
    let emailUtente = document.getElementById("email").value;
    let emailValide = ["bruno@boolean.com" , "tizio@boolean.com" , "caio@boolean.com"];
    let corretto = false;

    for (let c = 0; c < emailValide.length; c++) {
        let validaEmail = emailValide[c];

        if(emailUtente == validaEmail){
            corretto = true;
            corretto = alert("vai");
        } else{
            corretto = false;
        }
    }

    // if(corretto = true){
    //     corretto = alert("vai");
    // } else {
    //     alert("no");
    // }



});