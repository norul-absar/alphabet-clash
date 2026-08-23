function getTextElementById (elementId){
    const element = document.getElementById(elementId);
    const elmentText = element.innerText;
    const value = parseInt(elmentText);
    return value;
}

function setTextElementById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}