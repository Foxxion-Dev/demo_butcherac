$(document).ready(function(){
    
    var audio = document.getElementById('audioPlayer');
        var playButton = document.getElementById('playButton');
        var pauseButton = document.getElementById('pauseButton');

        playButton.addEventListener('click', function() {
            audio.play();
        });

        pauseButton.addEventListener('click', function() {
            audio.pause();
        });
    
  if ($('#menu').length) {
    $('#menu').slicknav({
        allowParentLinks: true
    });
  }

  if ($('#menu li:has(ul)').length) {
    $('#menu li:has(ul)').addClass('has-child');
  }
    
  if ($('.moveout').length) {
        const moveout = document.querySelector('.moveout')

      const handle = moveout.querySelector('.handle')

      handle.onclick = function() {
        moveout.classList.toggle('active');
      }
  }
    
    if ($('[data-toggle="tooltip"]').length) {
     $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
     })  
    }
    
       
      if ($('[data-toggle="lightbox"]').length) {
       $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
          alwaysShowClose: true,
          showArrows: true
        });
       });

      }
      if ($('.testireview').length) {
          
          $('.testireview').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          prevArrow:"<button type='button' class='slick-prev'><img class='a-left control-c prev slick-prev' src='images/icon_arrow_previous.webp'></button>",
          nextArrow:"<button type='button' class='slick-next'><img class='a-right control-c next slick-next' src='images/icon_arrow_next.webp'></button>",
          responsive: [
              {
              breakpoint: 1110,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
        });
      }
  
       if ($('#linkToApply').length) {
        $('#linkToApply').click(function() {
            $('#mainNavTabs a[href="#tab2"]').tab('show');
        });
       }
    
      if ($('.hideanimate').length) {
        $('.hideanimate').css('opacity', 0);
      }

      if ($('.bannercall').length) {
        $('.bannercall').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '90%' });
      }
      if ($('.biglogopic').length) {
        $('.biglogopic').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '70%' });
      }
      if ($('.communityleft').length) {
        $('.communityleft').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '50%' });
      }
    
  if ($('.communityright').length) {
    $('.communityright').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '50%' });
  }
    
  if ($('.service1').length) {
    $('.service1').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  }
    
  if ($('.service2').length) {
    $('.service2').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '70%' });
  }
    
  if ($('.service3').length) {
    $('.service3').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  } 
  
  if ($('.service4').length) {
    $('.service4').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '70%' });
  } 
    
  if ($('.footerlogo').length) {
    $('.footerlogo').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '90%' });
  }
  if ($('.quote').length) {
    $('.quote').waypoint(function() {
      $(this.element).addClass('fadeIn');
    }, { offset: '70%' });
  }
    
  if ($('.benefitsblk').length) {
    $('.benefitsblk').waypoint(function() {
      $(this.element).addClass('fadeIn');
    }, { offset: '60%' });
  }
    
  if ($('.imgcontainer').length) {
    $('.imgcontainer').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  } 
      
   if ($('#form-maintenance').length) {
      UnitBasePrice =   parseInt($("input[name=unit_base_price]").val());
      UnitMultiplier =   parseInt($("input[name=unit_multiplier]").val());
       
      computeTotalPrice();
       
       $("#unit-total").on('change', function() {
           computeTotalPrice();
       });
       
        $("#year-total").on('change', function() {
           computeTotalPrice();
       });
       

       
  }
    
    
    
    
});

