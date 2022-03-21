const sidebar = document.getElementById('sidebar');

darkMode();

function sidebarOpen(){
    sidebar.style.left = '0';
    document.getElementById('logout').style.left = '0';
}
function sidebarClose(){
    sidebar.style.left = '-100%';
    document.getElementById('logout').style.left = '-100%';
}

function darkMode(){
    document.body.classList.toggle('dark');
}