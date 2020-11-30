var btnTranslate = document.querySelector("#btn-translate");

var textinput = document.querySelector('#txt-input');

var outputtext = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function generateServerUrl(text)
{
    return serverUrl+ "?text="+ text;
}




function errorHandler(error)
{
    console.log ("Error Occured - " , error)
}


function clickEventHandler(){

    var url =  generateServerUrl(textinput.value);

    fetch(url)
        .then(response => response.json())
        .then(json => 
            {
            var translatedText = json.contents.translated;
            outputtext.innertext = translatedText;
            })
        .catch(errorHandler)

}

btnTranslate.addEventListener("click",clickEventHandler)