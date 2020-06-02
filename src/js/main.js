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
});