var btnTranslate = document.querySelector("#btn-translate");

var textinput = document.querySelector('#txt-input');

var outputtext = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function generateServerUrl(text) {
    return serverUrl + "?text=" + text;
}



function errorHandler(error) {
    console.log("Error Occurred - ", error)
    alert("Some Error Occurred")
}


function clickEventHandler() {

    var url = generateServerUrl(textinput.value);

    fetch(url)
        .then(response => response.json())
        .then(json => { 
            var translatedText = json.contents.translated;
            outputtext.innerText = translatedText;
            console.log(translatedText)
        })
        .catch(errorHandler)
x
}

btnTranslate.addEventListener("click", clickEventHandler)