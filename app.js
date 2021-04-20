let hamburger = document.querySelector('.hamburger');
let lines = document.querySelectorAll('.line');

let navigationUl = document.querySelector('.navigation-ul');
let navigation = document.querySelector('.navigation');
let items = document.querySelectorAll('.item');
let icon = document.querySelector('.icon')


//Eventos

hamburger.addEventListener('click', () => {
    menuActivate();
})

function closeMenu(){
    menuActivate();
}

function menuActivate(){
    lines[0].classList.toggle('line-one');
    lines[1].classList.toggle('line-two');
    lines[2].classList.toggle('line-three');

    navigationUl.classList.toggle('navigation-ul-activate');
    navigation.classList.toggle('navigation-activate');
    for (let i = 0; i < 2; i++) {
        items[i].classList.toggle('item-activate');
    }
    icon.classList.toggle('icon-activate')
}



for(let i = 0;i<2;i++){
    items[i].addEventListener('click', closeMenu);
}