$(document).ready(function() {
    // ВИДЕО С ЮТУБА
    var player;
    $('.video-wrap__play').on('click',
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: 'VxYh4N1vFOM',
                events: {
                    'onReady': videoPlay
                }
            });
        })

    function videoPlay(event) {
        event.target.playVideo();
    }
//    слайдер
    $('.benefit__slide').slick({
        asNavFor: ".benefit-about--left, .benefit-about--right"
    });
    $('.benefit-about--left').slick({
        arrows: false,
        fade:true,
        draggable: false
    });
    $('.benefit-about--right').slick({
        arrows: false,
        fade:true,
        draggable: false
    });
    $('.reviews__slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 800

    });
    $('.lessons__number').slick({
        arrows: true,
        dots: true,
        appendArrows: ".lessons__buttons",
        draggable: false,
        infinite: false,
        speed: 600,
        easing:'linear',
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,

            }
        }]

    });

//    видео слайдера

    $('.reviews__play--first').on('click',
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('slidePlayer-first', {
                height: '100%',
                width: '100%',
                videoId: '2eUdZXZAhmU',
                events: {
                    'onReady': firstPlay
                }
            });
        })

    function firstPlay(event) {
        event.target.playVideo();
        $(".reviews-slider").on('afterChange', function(){
            player.pauseVideo();
        })
    }


    $('.reviews__play--second').on('click',
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('slidePlayer-second', {
                height: '100%',
                width: '100%',
                videoId: 'eg3s0c_X_ao',
                events: {
                    'onReady': secondPlay
                }
            });
        })

    function secondPlay(event) {
        event.target.playVideo();
        $(".reviews-slider").on('afterChange', function(){
            player.pauseVideo();
        })
    }


    $('.reviews__play--third').on('click',
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('slidePlayer-third', {
                height: '100%',
                width: '100%',
                videoId: 'fZW6qZunXM4',
                events: {
                    'onReady': thirdPlay
                }
            });
        })

    function thirdPlay(event) {
        event.target.playVideo();
        $(".reviews-slider").on('afterChange', function(){
            player.pauseVideo();
        })
    }

     //    totop по клику
    $('.totop').click(function(){
        $('html, body').animate({scrollTop : 0},1600);
        return false;
    });

    //    скролл к блокам
    $("a[href^='#']").click(function(event){
        var _href = $(this).attr("href");
        if (_href === '#') {
            event.preventDefault();
        } else {
            $('.menu__nav').removeClass('menu__nav--active');
            $('.menu-btn').removeClass('menu-btn_active')
            $("html, body").animate({scrollTop: $(_href).offset().top},1400);
        }
        return false;
    });
//    бургер
    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $('.menu__nav').toggleClass('menu__nav--active');
        $(this).toggleClass('menu-btn_active');

    });

    // МОДАЛЬНОЕ ОКНО
    var modal = $('.modal'),
        modalBtn = $('[data-togle=modal]'),
        closeBtn = $('.modal__close');
    // вызов модального окна
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    // закрытие модального по нажатию на кнопку close
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    // закрытие модального по клику вне окна
    $(document).click(function (e) {
        if (e.target.classList.contains('modal')) {
            modal.removeClass('modal--visible');
        }
    });
    // закрытие модального по esc
    $(document).keydown(function (e) {
        if (e.key === 'Escape') {
            modal.removeClass('modal--visible');
        }
    });
    // ОКНО БЛАГОДАРНОСТИ
    var thanks = $('.thanks'),
        thanksClose = $('.thanks__button');
    // закрытие модального по нажатию на кнопку close
    thanksClose.on('click', function () {
        thanks.removeClass('thanks--visible');
    });
    // закрытие окна благодарности по клику вне окна
    $(document).click(function (e) {
        if (e.target.classList.contains('thanks')) {
            thanks.removeClass('thanks--visible');
        }
    });
    // закрытие окна благодарности по esc
    $(document).keydown(function (e) {
        if (e.key === 'Escape') {
            thanks.removeClass('thanks--visible');
        }
    });

    var processing = $('.processing'),
        processingClose = $('.processing__button');
    // закрытие модального по нажатию на кнопку close
    processingClose.on('click', function () {
        processing.removeClass('processing--visible');
    });
    // закрытие окна благодарности по клику вне окна
    $(document).click(function (e) {
        if (e.target.classList.contains('processing')) {
            processing.removeClass('processing--visible');
        }
    });
    // закрытие окна благодарности по esc
    $(document).keydown(function (e) {
        if (e.key === 'Escape') {
            processing.removeClass('processing--visible');
        }
    });

    //  валидация форм
    $( "form" ).each( function() {
        $(this).validate({
            errorElement: "div",
            errorClass: "invalid",
            rules: {
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                },
                userPhone: {
                    required: true,
                    minlength: 18
                },
                userEmail: {
                    required: true,
                    email: true
                },
                trading: {
                    required: true
                },
                profit: {
                    required: true
                },
                broker: {
                    required: true
                },
                deposit: {
                    required: true
                },

            },
            //сообщения
            messages: {
                userName: {
                    required: "Заполните поле",
                    minlength: "Имя должно быть не короче 2 букв",
                    maxlength: "Имя должно быть не длинее 15 букв"
                },
                userPhone: {
                    required: "Заполните поле",
                    minlength: "Введите полный номер телефона"
                },
                userEmail: {
                    required: "Заполните поле",
                    email: "Введите корректный Email в формате name@domain.com"
                },
                trading: {
                    required: "Заполните поле"
                },
                profit: {
                    required: "Заполните поле"
                },
                broker: {
                    required: "Заполните поле"
                },
                deposit: {
                    required: "Заполните поле"
                },

            },

            submitHandler: function(form) {
                if ($(form).hasClass('calc__form')) {
                    $.ajax({
                        type: "POST",
                        url: "calc.php",
                        data: $(form).serialize(),
                        success: function (response) {
                            $(form)[0].reset();
                            processing.addClass('processing--visible');
                            ym(64664599,'reachGoal','calc'); return true;
                        },

                    });
                } else {
                    $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: $(form).serialize(),
                        success: function (response) {
                            $(form)[0].reset();
                            modal.removeClass('modal--visible');
                            thanks.addClass('thanks--visible');
                            ym(64664599,'reachGoal','form'); return true;

                        },

                    });
                }

            }
        });
    });

    $('.calc__input').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

//  маска для телефона

    $('[type=tel]').mask('+7 (000) 000-00-00',);

//    анимация
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animate__animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    // скрытие to top на главном экране
    $(window).scroll(function(){

        if ($(this).scrollTop() > 150 && $(this).scrollTop() + 200 < $("html").height() - $(window).height()  ) {
            $('.totop--scroll').fadeIn();
        } else {
            $('.totop--scroll').fadeOut();
        }
    });



});