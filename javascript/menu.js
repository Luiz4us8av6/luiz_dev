const menu_fixo_page = document.getElementById('menu_fixo_page_id');
window.addEventListener('scroll', function(){ 
    let scroll = this.document.querySelector('.scrolltop')
    scroll.classList.toggle('active' , window.scrollY > 150)
    // menu_fixo_page.classList.remove('active');
})

const button_fixo = document.getElementById('butoon_menu_fixo');

function toggleMenu(){
    menu_fixo_page.classList.toggle('active');
}

button_fixo.addEventListener('click', toggleMenu);

// function backtop(){
//     window.scrollTo({
//         top: 0,
//         behavior:'smooth'
//     })
// }