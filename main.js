  $(document).ready(function(){


    new WOW().init();

    ///////////////////////////////////////////////////////project cards scroll reveal
    (function(){
      var cards = document.querySelectorAll(".project-card-wrapper");
      if(!cards.length) return;

      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if(reduceMotion){
        cards.forEach(function(card){ card.classList.add("is-visible"); });
        return;
      }

      var observer = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(entry){
          if(!entry.isIntersecting) return;
          var card = entry.target;
          var index = Array.prototype.indexOf.call(cards, card);
          setTimeout(function(){
            card.classList.add("is-visible");
          }, index * 80);
          obs.unobserve(card);
        });
      }, { threshold: 0.15 });

      cards.forEach(function(card){ observer.observe(card); });
    })();

  //let bgcimg = $(".bgc-img");
  
  ///////////////////////////////////////////////////////auto type
  
  var typed = new Typed(".auto-type",{
  
  strings:["webové stránky","web portfolio","web portfolio","programátor","designer","vývojář"],
  typeSpeed:400,
  backspeed:100, 
  loop:true
  
  });
  

  
  var scroll = $(".scroll");
  var scrolllist = $(".scroll-list");
  let status = 0; 
  
  
  scroll.on('click',function(){
    if(status == 1){//smaze se menu
      scrolllist.css("display","none");
      $(".scroll-query").css("border-radius","0 0 0 0");
      $(".scroll-query").css("background-color","transparent");
      status = 0;
      delay(1000);
    }
  
    if(status == 0){//spusti se menu
      scrolllist.css("display","flex");
      $(".scroll-query").css("border-radius","0 0 50% 50%");
      $(".scroll-query").css("background-color","rgba(183, 183, 183,.1)");
      status = 1;
      delay(1000);
    }
  });
  
  
  $(function($){     
  $(function() {                     
    $(".modal__item1").click(function() {
      $(".modal").css("display","none");
      $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
      });
      });
  
      $(function() {                     
        $(".modal__item2").click(function() {
          $(".modal").css("display","none");
          $("html, body").animate({scrollTop: $(".info").offset().top}, 1000);
          });
          });
  
          $(function() {                     
            $(".modal__item3").click(function() {
              $(".modal").css("display","none");
              $("html, body").animate({scrollTop: $(".promo").offset().top}, 1000);
              });
              });
              
              $(function() {                     
                $(".nav-logo__title").click(function() {
                  $(".modal").css("display","none");
                  $("html, body").animate({scrollTop: $("header").offset().top}, 1000);
                  });
                  });  
                });  
  
  
     var signbtn = $(".sign__btn");
     var signinfo = $(".sign__info");
     var progress = $("#progress__number");
     var burger = $(".burger");
     var cross = $(".cross");
  
    burger.on('click', function(){
      $(".modal").css("display","flex");
  
    });
  
    cross.on('click',function(){
      $(".modal").css("display","none");
  
    });
  
    signbtn.mouseenter(function(){
  
      signinfo.css("display","none");;              
      signbtn.css("flex-basis","100%");
   
    });
  
    signbtn.mouseleave(function(){
      
      signinfo.css("display","flex");              
      signbtn.css("flex-basis","50%");
     
    });
  
  
                             $(".confirm").on('mouseenter',function(){
                                $(".pravo").css("display","inline");
                                $(".levo").css("display","inline");
                             });
  
                             $(".confirm").on('mouseleave',function(){
                                $(".pravo").css("display","none");
                                $(".levo").css("display","none");
                             });
  
  
  

                  });



      

