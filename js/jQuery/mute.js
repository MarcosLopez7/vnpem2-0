/**
 * Demo 3
 *
 * Wiring up a custom controller to our video to
 * allow for playback, pause, mute, and unmute.
 */
$('document').ready(function () {

    function movingOverlay ($video, $overlay) {
        var videoPosition = $video.position().top;
        $overlay.css("top", videoPosition + "px");
        $overlay.css("height", $video.height() + "px");
    }

    // cache vars
    var cmn_video = document.getElementById("cmn-video-demo3__video"),
        cmn_playback = document.getElementById("cmn-video-demo3__controls--playback"),
        cmn_mute = document.getElementById("cmn-video-demo3__controls--mute");

    var $video = $("#cmn-video-demo3__video");
    var $overlay = $("#overlay");

    movingOverlay($video, $overlay);

    $(window).resize(function () {
        movingOverlay($video, $overlay);
    });

    // listen for playback
    cmn_playback.addEventListener( "click", function(e) {
      e.preventDefault();
      if (cmn_video.paused) {
        cmn_video.play();
        cmn_playback.innerHTML = "Pause";
      } else {
        cmn_video.pause();
        cmn_playback.innerHTML = "Play";
      }
    } );

    // listen for mute/unmute
    cmn_mute.addEventListener( "click", function(e) {
      e.preventDefault();
      if (cmn_video.muted) {
        cmn_video.muted = false;
        cmn_mute.innerHTML = "Silencio";
      } else {
        cmn_video.muted = true;
        cmn_mute.innerHTML = "Sonido";
      }
    } );

    //Poner play en position del screen
    
    $(window).scroll(function() {
      $('video').each(function(){
        if ($(this).is(":in-viewport")) {
          $(this)[0].play();
        } else {
          $(this)[0].pause();
        }
      })
    });

});
