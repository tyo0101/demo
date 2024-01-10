$(document).ready(function(){
    $('.btn-b').click(function(event){
        event.preventDefault();
        $('.wrap p').css('font-size','20px');
    });
    $('.btn-m').click(function(event){
        event.preventDefault();
        $('.wrap p').css('font-size','16px');
    });
    $('.btn-s').click(function(event){
        event.preventDefault();
        $('.wrap p').css('font-size','12px');
    });

    //close
    $('.ad-close').click(function(event){
        event.preventDefault();
        // $('.ad').hide();
        $('.ad').fadeOut();
    });

    //aside
    $('.header').click(function(event){
        $('body').toggleClass('open');
    });
});