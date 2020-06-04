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
        fade:true
    });
    $('.benefit-about--right').slick({
        arrows: false,
        fade:true
    });
    $('.reviews__slider').slick({
        arrows: false,
        centerMode: true,
        variableWidth: true
    })

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

});