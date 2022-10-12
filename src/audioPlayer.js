export function audioPlay (t, player, res) {
  var audioLink = res["audio"]
  var title = res["nama_latin"]
  console.log(audioLink)
  /*$('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });*/
  //$(".audio-player-container").toggleClass("out")
  //$(".audio-player-container").remove();
  $(".audio-player-container").css("display", "flex")
  $(".audio-player-container label").text(res["nama_latin"])
  /*$("source").remove()
  $("audio").append("<source src='"+audioLink+"' type='audio/mp3'>")*/
  $("audio").attr("src", audioLink)

  player.source = {
    type: 'audio',
    title: title,
    sources: [
     {
          src: audioLink,
          type: "audio/mp3"
      },
    ],
  };
  //player = new Plyr(".js-player");

    //plyr.setup(document.querySelectorAll('.js-plyr'), {});
}
