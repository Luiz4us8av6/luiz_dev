const html =  document.querySelector('html');
const butoon_darkmode= document.getElementById("butoon_darkmode");

function darkmode(){
    html.classList.toggle('dark-mode');
    
}

butoon_darkmode.addEventListener('click', darkmode);



