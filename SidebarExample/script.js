// const sideText = document.querySelectorAll('.link__a__span');
const sidebar = document.querySelector('.sidebar');
const search = document.querySelector('#search i');
const menuBtn = document.querySelector('#menu-btn');
const linkHover = document.querySelectorAll('.mini-sidebar__link__hover');
const logo = document.querySelector('.sidebar .header .logo');
const profile = document.querySelector('.sidebar .profile');
const themeBtn = document.querySelector('#theme-btn');

var menuOn = true;

menuBtn.addEventListener('click', () => {

    if(menuOn == true){

        menuOn = false;

        sidebar.style.width = '80px';
        logo.style.marginLeft = '-200px';
        menuBtn.style.marginRight = '10px';
        profile.style.left = '-200px';
        profile.style.background = 'transparent';
        
        for(let i = 0; i < linkHover.length; i++){
            linkHover[i].style.display = 'flex';
        }
    }

    else{

        menuOn = true;

        sidebar.style.width = '275px';
        logo.style.marginLeft = '0px';
        menuBtn.style.marginRight = '5px';
        profile.style.left = '0px';
        profile.style.background = 'var(--purple)';
        
        for(let i = 0; i < linkHover.length; i++){
            linkHover[i].style.display = 'none';
        }
    }
})

search.addEventListener('click', () => {

    if(menuOn == true){

        menuOn = false;

        sidebar.style.width = '80px';
        logo.style.marginLeft = '-200px';
        menuBtn.style.marginRight = '10px';
        profile.style.left = '-200px';
        profile.style.background = 'transparent';
        
        for(let i = 0; i < linkHover.length; i++){
            linkHover[i].style.display = 'flex';
        }
    }

    else{

        menuOn = true;

        sidebar.style.width = '275px';
        logo.style.marginLeft = '0px';
        menuBtn.style.marginRight = '5px';
        profile.style.left = '0px';
        profile.style.background = 'var(--purple)';
        
        for(let i = 0; i < linkHover.length; i++){
            linkHover[i].style.display = 'none';
        }
    }
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

