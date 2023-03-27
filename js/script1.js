let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let sidetop = document.querySelector('.side-top-navigation');
let profileData = document.querySelector('.header-profile');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sidetop.classList.toggle('active');
    profileData.classList.toggle('active');
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
