$(function(){
    
   

  function abrirMenuMobile(){
    $(".navegacao-mobile").click(function(e){
        e.stopPropagation();
        
        $(".navegacao-mobile nav").fadeIn();
    });
  }

  function fecharMenuMobile(){
    var elemento = $('body, .navegacao-mobile')
    elemento.click(function(e){
        
        $(".navegacao-mobile nav").fadeOut();
    });

    $('.navegacao-mobile nav').click(function (e) {
        e.stopPropagation();
    });

  }

  
  
  
  fecharMenuMobile();
  abrirMenuMobile();
});