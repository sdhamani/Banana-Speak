var btnTranslate = document.querySelector("#btn-translate");

var textinput = document.querySelector('#txt-input');

console.log(Textinput)

function clickEventHandler(){
    console.log("Clicked");
    console.log("input",textinput)
}

btnTranslate.addEventListener("click",clickEventHandler)