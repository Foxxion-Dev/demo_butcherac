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
    
     // Main Menu
  if ($('#menu').length) {
    $('#menu').slicknav({
        allowParentLinks: true
    });
  }

  if ($('#menu li:has(ul)').length) {
    $('#menu li:has(ul)').addClass('has-child');
  }
    
     // slideout
    if ($('.slideout').length) {
         const slideout = document.querySelector('.slideout')

        const handle = slideout.querySelector('.handle')

        handle.onclick = function() {
          slideout.classList.toggle('active');
        }
    }
    
     // Tooltip
    if ($('[data-toggle="tooltip"]').length) {
     $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
     })  
    }
    
       
    // Lightbox
      if ($('[data-toggle="lightbox"]').length) {
       $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
          alwaysShowClose: true,
          showArrows: true
        });
       });

      }
    
    // Carousel
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
          
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      }
  
      // Handle the click event of the link
       if ($('#linkToApply').length) {
        $('#linkToApply').click(function() {
            // Switch to Tab 2
            $('#mainNavTabs a[href="#tab2"]').tab('show');
        });
       }
    
    // Hide elements on page load
      if ($('.hideanimate').length) {
        $('.hideanimate').css('opacity', 0);
      }

        // Fade Banner Video
      if ($('.bannercall').length) {
        $('.bannercall').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '90%' });
      }

         // Fade Logo Pic
      if ($('.biglogopic').length) {
        $('.biglogopic').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '70%' });
      }

        // Fade Community Pic Left
      if ($('.communityleft').length) {
        $('.communityleft').waypoint(function() {
          $(this.element).addClass('fadeInLeft');
        }, { offset: '50%' });
      }
    
   // Fade Community Pic Left
  if ($('.communityright').length) {
    $('.communityright').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '50%' });
  }
    
   // Fade Service1
  if ($('.service1').length) {
    $('.service1').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  }
    
  // Fade Service2
  if ($('.service2').length) {
    $('.service2').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '70%' });
  }
    
  // Fade Service3
  if ($('.service3').length) {
    $('.service3').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  } 
  
  // Fade Service3
  if ($('.service4').length) {
    $('.service4').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '70%' });
  } 
    
  // Fade FooterLogo
  if ($('.footerlogo').length) {
    $('.footerlogo').waypoint(function() {
      $(this.element).addClass('fadeInRight');
    }, { offset: '90%' });
  }
  
    // Fade quote
  if ($('.quote').length) {
    $('.quote').waypoint(function() {
      $(this.element).addClass('fadeIn');
    }, { offset: '70%' });
  }
    
   // Fade Benefits
  if ($('.benefitsblk').length) {
    $('.benefitsblk').waypoint(function() {
      $(this.element).addClass('fadeIn');
    }, { offset: '60%' });
  }
    
   // Fade Logo 
  if ($('.imgcontainer').length) {
    $('.imgcontainer').waypoint(function() {
      $(this.element).addClass('fadeInLeft');
    }, { offset: '70%' });
  } 
    
   // Form Maintenance    
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
       
       function computeTotalPrice() {
           UnitTotal =   parseInt($("select[name=systems]").val());
           TotalYears =  parseInt($("select[name=years]").val());
           DiscountBase = 0.05;
           
           
           discount = (TotalYears-1) * DiscountBase;
           
           
           TotalPrice = (UnitBasePrice * UnitTotal) - ((UnitTotal * UnitMultiplier)-UnitMultiplier);
           
           if (discount > 0){
               TotalPrice = Math.round(TotalPrice * (1-discount) * TotalYears);
           }
           
           
           $("input[name=price]").val('$'+TotalPrice);  
       }
       
  }
    
    
    
    
});

