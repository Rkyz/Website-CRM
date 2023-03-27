let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sidetop = document.querySelector('.side-top-navigation');
let content = document.querySelector('.header-content');
let secondNav = document.querySelector('.header-navigation');
let homeNav1 = document.querySelector('.content1');
let homeNav2 = document.querySelector('.content2');
let homeNav3 = document.querySelector('.content3');
let dashData = document.querySelector('.header-data');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sidetop.classList.toggle('active');
    content.classList.toggle('active');
    secondNav.classList.toggle('active');
    homeNav1.classList.toggle('active');
    homeNav2.classList.toggle('active');
    homeNav3.classList.toggle('active');
    dashData.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
for (let i=0; 1<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = '.list';
        }
        list[i].className = 'list active';
    }
}
