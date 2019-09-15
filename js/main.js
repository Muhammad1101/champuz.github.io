$(document).ready(function() {

	$('.content-tab .nav div i').on('click', function() {
		$('.content-tab .tab-content').slideToggle(500);
		$(this).toggleClass('icon-rotate');
	});
	
	$('.content-tab .md-pills .nav-link').on('click', function() {
		$('.content-tab .tab-content').slideDown(500);
	});

	ma5menu({
        position: 'left',
        closeOnBodyClick: true
    });

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        responsive: [
		    {
		      breakpoint: 10000,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 376,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 415,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 321,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 0,
		        infinite: true
		      }
		    }
		]
      });

	// $('.owl-carousel').owlCarousel({
	// 	loop:true, //Зацикливаем слайдер
 	//  margin:10, //Отступ от картино если выводите больше 1
 	//  controls:false,
 	//  nav:false, //Отключил навигацию
 	//  autoplay:true, //Автозапуск слайдера
 	//  smartSpeed:1000, //Время движения слайда
 	//  autoplayTimeout:50000, //Время смены слайда
	//  responsiveClass:true,
	//     responsive:{
	//         0:{
	//             items:1,
	//             nav:true
	//         },
	//         600:{
	//             items:2,
	//             nav:false
	//         },
	//         1000:{
	//             items:4,
	//             nav:true,
	//             loop:false
	//         }
	//     }
	// });

	var src = $('#player').data('video');
    var poster = $('#player').data('poster');

    var player = new Clappr.Player({
        source: src,
        poster: poster,
        width: '100%',
        height: '230px',
        parentId: "#player"
    });

});