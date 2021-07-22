document.addEventListener("DOMContentLoaded", function () {
    //Déclaration des variables
    let creditCardNumber = document.getElementById("number");
    let creditCardNumberCard = document.getElementById("cardNumber");
    let creditCardOwner = document.getElementById("owner");
    let creditCardOwnerCard = document.getElementById("cardInfos");
    let creditCardExpiration = document.getElementById("expiration");
    let creditCardExpirationCard = document.getElementById("dateCard");
    let creditCardCVC = document.getElementById("crypto");
    let creditCardCVCCard = document.getElementById("cryptoCard");
    let cardInner = document.getElementsByClassName("flip-card-inner")[0]

    //Activation du flip de la carte si on est sur le champs CVC
    creditCardCVC.onfocus = function () {
        cardInner.style.transform = "rotateY(180deg)";
    }
    creditCardCVC.onblur = function () {
        cardInner.style.transform = "rotateY(0deg)";
    }
    //Function de mise d'un espace
    function space(){
        if (creditCardNumber.value.length===4 ||creditCardNumber.value.length===9 || creditCardNumber.value.length===14) {
            creditCardNumber.value += " ";
            creditCardNumberCard.innerHTML += " ";

        }
    }
    //Ecoute du numéro de carte
    creditCardNumber.addEventListener("keyup", function (e) {
        //S'il est vide
        if (creditCardNumber.value === "") {
            //Affichage du texte de base
            creditCardNumberCard.innerHTML = "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;";

        } else {
            //On affichage le texte du input
            creditCardNumberCard.innerHTML = creditCardNumber.value;
        }

            //On check si l'espace peut être mis
            space();

    })

    creditCardOwner.addEventListener("input", function () {

        if (creditCardOwner.value === "") {
            creditCardOwnerCard.innerHTML = "FULL NAME";

        } else {

            creditCardOwnerCard.innerHTML = creditCardOwner.value;
        }
    })
    creditCardExpiration.addEventListener("input", function () {
        if (creditCardExpiration.value === "") {
            creditCardExpirationCard.innerHTML = "MM/YY";

        } else {

            creditCardExpirationCard.innerHTML = creditCardExpiration.value;
        }
        //Si on a entré le mois dans la date d'expiration
        if(creditCardExpiration.value.length===2){
            //On affiche un slash
            creditCardExpiration.value+="/";
        }
    })
    creditCardCVC.addEventListener("input", function () {
        if (creditCardCVC.value === "") {
            creditCardCVCCard.innerHTML = "&bull;&bull;&bull;";

        } else {

            creditCardCVCCard.innerHTML = creditCardCVC.value;
        }
    })

})