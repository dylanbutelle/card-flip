document.addEventListener("DOMContentLoaded", function () {
    let creditCardNumber = document.getElementById("number");
    let creditCardNumberCard = document.getElementById("cardNumber");
    let creditCardOwner = document.getElementById("owner");
    let creditCardOwnerCard = document.getElementById("cardInfos");
    let creditCardExpiration = document.getElementById("expiration");
    let creditCardExpirationCard = document.getElementById("dateCard");
    let creditCardCVC = document.getElementById("crypto");
    let creditCardCVCCard = document.getElementById("cryptoCard");
    let card = document.getElementsByClassName("flip-card")[0]
    let cardInner = document.getElementsByClassName("flip-card-inner")[0]
    let cptNbr = 0;
    let maxNbr = creditCardNumber.getAttribute("maxLength");
    let cptDate=1;
    creditCardCVC.onfocus = function () {
        cardInner.style.transform = "rotateY(180deg)";
    }
    creditCardCVC.onblur = function () {
        cardInner.style.transform = "rotateY(0deg)";
    }
    function space(){
        if (creditCardNumber.value.length===4 ||creditCardNumber.value.length===9 || creditCardNumber.value.length===14) {
            creditCardNumber.value += " ";
            creditCardNumberCard.innerHTML += " ";

        }
    }
    creditCardNumber.addEventListener("keyup", function (e) {
        console.log(creditCardNumber.value.length)
        if (creditCardNumber.value === "") {
            creditCardNumberCard.innerHTML = "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;";

        } else {
            creditCardNumberCard.innerHTML = creditCardNumber.value;
        }


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
        if(creditCardExpiration.value.length===2){
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