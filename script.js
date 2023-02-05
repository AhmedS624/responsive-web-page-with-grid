but = document.getElementById('hamberger');


but.addEventListener('click',() => {
    let menu = document.getElementById('side-menu');
    menu.classList.toggle('active');
    but.classList.toggle('is-active');
    if(menu.classList[0] === 'active'){
        document.getElementById('dim').classList.toggle('dim');
        menu.style.right = 0;
    }else{
        document.getElementById('dim').classList.toggle('dim');
        menu.style.right = '-100%';
    }
    
});