function menuShow(){
    let menuMobile = document.querySelector('.navegacao-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icone-mobile').style.backgroundImage = "url('imagens/menu-aberto.png')";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icone-mobile').style.backgroundImage = "url('imagens/cross.png')";
    }
}