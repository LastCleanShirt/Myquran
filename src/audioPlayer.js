export function audioPlay (t, plyr, res) {
  var audioLink = res["audio"]
  $('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  $(".audio-player-container").toggleClass("out")
  $(".audio-player-container").remove();

  $(".main").append(`
    <div class="audio-player-container">
    <label>`+res["nama_latin"]+`</label>
      <div class="js-plyr">
        <audio controls="" crossorigin="" class="player" autoplay >
          <source src="`+audioLink+`" type="audio/ogg" />
        </audio>
      </div>
    </div>
    `)
    plyr.setup(document.querySelectorAll('.js-plyr'), {});
}
