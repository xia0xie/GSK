$(window).load(function() {
     // start up after 2sec no matter what
 //   window.setTimeout(function(){
  //      $('body').removeClass("loading").addClass('loaded');
 //   }, 1000);
    
    


 
var h = $( window ).height();
$(".homepage").css('height',h);
$(".banner img").css('height',(h-140));

var w = $( '.banner img' ).width();
$(".banner").css('width',w);

$('.icon').click(function(){
        var portalid = $(this).attr('id');
        $('.title').removeClass('show').addClass('hide');
        $('.subtitle').removeClass('show').addClass('hide');
        $('.'+portalid).removeClass('hide').addClass('show');
    });

$(".main").onepage_scroll();

 window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 5000);   
 });