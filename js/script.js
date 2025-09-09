var thanx = "Welcome User !! To build creative Mobile-Apps and Websites kindly reach out to me and get your products deployed in a few days. "
                    
alert(thanx);


let header = document.querySelector('#sticky');

window.addEventListener('scroll', function() {
    if(scrollY > 80){
         header.style.width = '100%';
         header.style.background = 'var(--bg-clr-one)';
    }else{
        header.style.width = '100%';
        header.style.background = 'var(--bg-clr-one)';
    }
})

 

// porfolio script

var $galleryContainer = $('.gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
})

$('.button').on('click', function(){
  $('.button').removeClass('.active');
  $(this).addClass('.active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value
  })
})

// magnific popup
$('.gallery').magnificPopup({
  delegate: '.overlay a',
  type: image,
  gallery:{
    enabled: true
  }
})

