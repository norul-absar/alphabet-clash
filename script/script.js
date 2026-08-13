// function play(){
//     // console.log('start play')
//     // Step 1: hide home

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     // Step 2: Show play ground

//     const playGroundsection =document.getElementById('payground-section');
//     // console.log(playGroundsection.classList);
//     playGroundsection.classList.remove('hidden')

// }

function hiddenelementById (elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementbyId(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}


function play(){
    hiddenelementById('home-screen')
    showElementbyId('payground-section')
}