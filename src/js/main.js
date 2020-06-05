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
                dots: false,
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
    }


    $('.reviews__play--second').on('click',
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('slidePlayer-second', {
                height: '100%',
                width: '100%',
                videoId: 'pqfIn0jQxn0',
                events: {
                    'onReady': secondPlay
                }
            });
        })

    function secondPlay(event) {
        event.target.playVideo();
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
                if ($("form").hasClass('calc__form')) {
                    $.ajax({
                        type: "POST",
                        url: "calc.php",
                        data: $(form).serialize(),
                        success: function (response) {
                            $(form)[0].reset();
                            modal.removeClass('modal--visible');
                            thanks.addClass('thanks--visible');

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

                        },

                    });
                }

            }
        });
    });

//  маска для телефона

    $('[type=tel]').mask('+7 (000) 000-00-00',);

});