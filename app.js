var btnTranslate = document.querySelector("#btn-translate");

var textinput = document.querySelector('#txt-input');

var outputtext = document.querySelector("#output")

console.log(textinput)

function clickEventHandler(){

    outputtext.innerText = "Trasnlated" + textinput.value ; 

}

btnTranslate.addEventListener("click",clickEventHandler)