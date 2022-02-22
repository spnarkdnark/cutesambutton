const photoSwap = function(){
    let randomInt = getRandom(31);
    photo.src = `photos/${randomInt}.jpeg`;
    console.log(randomInt);
}

const getRandom = function(range){
    return Math.floor(Math.random() * range);
}

const photo = document.querySelector('#sam');
const button = document.querySelector('.button');
button.addEventListener('click', photoSwap)

window.onload(photoSwap());

