const button = document.getElementById("bottone");

button.addEventListener( "click" , function() {
    
    let emailUtente = document.getElementById("email").value;
    let emailValide = ["bruno@boolean.com" , "tizio@boolean.com" , "caio@boolean.com"];
    let corretto = false;

    for (let c = 0; c < emailValide.length; c++) {
        let validaEmail = emailValide[c];

        if(emailUtente == validaEmail){
            corretto = true;
        }
    }


    if(corretto){
        alert("Utente autorizzato");
    } else{
        alert("Utente non autorizzato");
    }

});