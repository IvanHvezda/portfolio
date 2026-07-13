$(document).ready(function(){

    var slider = $(".slider");
    var burger = $(".item6");
    var modal = $(".modal-menu");
    var times = $(".m5");


    //objeveni a zmizeni loga firmy
   /* $('.nav__logo1').on('mouseenter',function(){
        $('.nav__logo2').show(1000).css("display","inline-block");
    });
        $('.nav__logo1').on('mouseleave',function(){
            $('.nav__logo2').hide(1000).css.delay(1000)("display","none");
        });*/

    //otevreni modalniho okna v sekci prize
        /*$('.triangle-container').on('mouseenter',function(){
            $('.nav__logo2').css("display","inline-block");
        });*/
            /*$('.prize-triangle').on('mouseenter',function(){
                $('.prize-triangle').animate({'border-bottom':'800px'},1000);
            });
            $('.prize-triangle').on('mouseenter',function(){
                $('.prize-triangle').animate({'border-left':'800px'},1000);
            });*/

            /*$('.triangle-container').on('click', function(){
                $('.modal-prize').slideDown(1000);
            });

            $('.prize-triangle').on('click', function(){
                $('.modal-prize').slideDown(1000);
                });
                $('.modal-prize__button').on('click', function(){
                    $('.modal-prize').slideUp(1000);
                });*/

    /*************************Header menu *************************/
    (function($){  

    $(function() {                     
    $(".item1").click(function() {
        console.log("ahooj")
      $("html, body").animate({scrollTop: $(".info").offset().top}, 1500);
      });
      });

      $(function() {                     
        $(".item2").click(function() {
            console.log("ahooj")
          $("html, body").animate({scrollTop: $(".act").offset().top}, 1500);
          });
          });

          $(function() {                     
            $(".item3").click(function() {
                console.log("ahooj")
              $("html, body").animate({scrollTop: $(".ref").offset().top}, 1500);
              });
              });
              
              $(function() {                     
                $(".item5").click(function() {
                    console.log("ahooj")
                  $("html, body").animate({scrollTop: $(".form").offset().top}, 1500);
                  });
                  });  

                  $(function() {                     
                    $(".nav__logo2").click(function() {
                        console.log("ahooj")
                      $("html, body").animate({scrollTop: $("header").offset().top}, 1500);
                      });
                      });


                      /*********************Footer menu*********************/
                      $(function() {                     
                        $(".m1").click(function() {
                            console.log("ahooj")
                          $("html, body").animate({scrollTop: $(".info").offset().top}, 1500);
                          });
                          });

                          $(function() {                     
                            $(".m2").click(function() {
                                console.log("ahooj")
                              $("html, body").animate({scrollTop: $(".act").offset().top}, 1500);
                              });
                              });

                              $(function() {                     
                                $(".m3").click(function() {
                                    console.log("ahooj")
                                  $("html, body").animate({scrollTop: $(".ref").offset().top}, 1500);
                                  });
                                  });

                                  $(function() {                     
                                    $(".m4").click(function() {
                                        console.log("ahooj")
                                      $("html, body").animate({scrollTop: $(".form").offset().top}, 1500);
                                      });
                                      });

                                      $(function() {                     
                                        $(".footer__item5").click(function() {
                                            console.log("ahooj")
                                          $("html, body").animate({scrollTop: $(".form").offset().top}, 1500);
                                          });
                                          });
                                          $(function() {                     
                                            $(".footer__item1").click(function() {
                                                console.log("ahooj")
                                              $("html, body").animate({scrollTop: $("header").offset().top}, 1500);
                                              });
                                              });
                                              $(function() {                     
                                                $(".footer__item2").click(function() {
                                                    console.log("ahooj")
                                                  $("html, body").animate({scrollTop: $(".info").offset().top}, 1500);
                                                  });
                                                  });
                                                  $(function() {                     
                                                    $(".footer__item3").click(function() {
                                                        console.log("ahooj")
                                                      $("html, body").animate({scrollTop: $(".act").offset().top}, 1500);
                                                      });
                                                      });
                                                      $(function() {                     
                                                        $(".footer__item4").click(function() {
                                                            console.log("ahooj")
                                                          $("html, body").animate({scrollTop: $(".ref").offset().top}, 1500);
                                                          });
                                                          });
                                          $(function() {                     
                                            $(".item1").click(function() {
                                                console.log("ahooj")
                                              $("html, body").animate({scrollTop: $(".info").offset().top}, 1500);
                                              });
                                              });
                                        
                                              $(function() {                     
                                                $(".item2").click(function() {
                                                    console.log("ahooj")
                                                  $("html, body").animate({scrollTop: $(".act").offset().top}, 1500);
                                                  });
                                                  });
                                        
                                                  $(function() {                     
                                                    $(".item3").click(function() {
                                                        console.log("ahooj")
                                                      $("html, body").animate({scrollTop: $(".ref").offset().top}, 1500);
                                                      });
                                                      });
                                                      
                                                      $(function() {                     
                                                        $(".item5").click(function() {
                                                            console.log("ahooj")
                                                          $("html, body").animate({scrollTop: $(".form").offset().top}, 1500);
                                                          });
                                                          });  
    

                    
    }) (jQuery);

    //modalni okno reference
   
   /* $('.item4').on('click',function(){
        $('.modal-ref').slideDown(1000);
    });
        $('.modal-ref__button').on('click',function(){
            $('.modal-ref').slideUp(1000);

        });

    //modalni okno cenik1

    $('.cenik1').on('click',function(){
        $('.modal-cenik1').slideDown(1000);
    });
        $('.modal-cenik1__button').on('click',function(){
        $('.modal-cenik1').slideUp(1000);   
        });         
   
    //modalni okno cenik2

    $('.cenik2').on('click',function(){
        $('.modal-cenik2').slideDown(1000);
    });
        $('.modal-cenik2__button').on('click',function(){
        $('.modal-cenik2').slideUp(1000);   
        });         

    //modalni okno cenik3

    $('.cenik3').on('click',function(){
        $('.modal-cenik3').slideDown(1000);
    });
        $('.modal-cenik3__button').on('click',function(){
        $('.modal-cenik3').slideUp(1000);   
        });  
        
    //modalni okno tech

    $('.tech').on('click',function(){
        $('.modal-tech').slideDown(1000);
    });
        $('.modal-tech__button').on('click',function(){
        $('.modal-tech').slideUp(1000);   
        });  

    //modalni okno ev

    $('.ev').on('click',function(){
        $('.modal-ev').slideDown(1000);
    });
        $('.modal-ev__button').on('click',function(){
        $('.modal-ev').slideUp(1000);   
        });  */
    
    //nastaveni knihovny wow.js

    new WOW().init();


    slider.slick({
        arrows: false,
        infinite: true,
        fade: true,
        speed:2500,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });

/*<div class="animate__animated animate__backInDown wow "data-wow-delay="1.3s"></div> */



$(window).on("scroll",function(){
    if($(window).scrollTop()){
        $('.nav-block').css("background","white");
        $('.nav-block').css("color","black");
        $('.nav-block').css("position","fixed");
        $('.nav-block').css("box-shadow","none");
        $('.nav__button').css("color","black");
        
    }
    else{
        $('.nav-block').css("background","black");
        $('.nav-block').css("color","white");
        $('.nav-block').css("box-shadow","rgba(0, 0, 0, 1) 1px 10px 15px");
        $('.nav__button').css("color","white");
    }

});

/*
var width = $(window).width();
    if (width < 640){
      $('.nav-item__list').css("display","none");
      $('.nav-menu__bar').css("display","block");
    }
    $('.nav-menu__bar').on('click',function(){
        $('.menu').css("display","flex")
    });
    $('.menu__button').on('click',function(){
      $('.menu').css("display","none");
    });
  
    $('.menu1').on('click',function(){
      $('.menu').css("display","none");
    });



    /*var width = $(window).width();
    if (width < 640){
      $('.nav-item__list').css("display","none");
      $('.nav-menu__bar').css("display","block");
    }
    $('.nav-menu__bar').on('click',function(){
        $('.menu').css("display","flex")
    });
    $('.menu__button').on('click',function(){
      $('.menu').css("display","none");
    });
  
    $('.menu1').on('click',function(){
      $('.menu').css("display","none");
    });*/


    burger.on('click',function(){
        $(".modal-menu").css("display","flex");



    });
    times.on('click',function(){
        $(".modal-menu").css("display","none");
        


    });


    $('.confirm-form').validate({
        rules: {
          name:"required",
        
        email:{
          required:true,
          mail:true,
        }
      },
      messages:{
        name:"Uveďte Vaše jméno",
        email:"Potřebujeme Váš email"
      }
      });
  






});