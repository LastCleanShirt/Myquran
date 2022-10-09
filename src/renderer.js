import { getListSurah, getSurahRecitation } from "./getSurah.js"

$(document).ready(function () {
	// Get Surah List
	var surah = getListSurah();
	var container = $(document).load("./container");
	surah.then(function(res){
		console.log(res)
		
		for (var x = 0; x < 114; x++) {
			$(".main").append(`<div class="container" id="`+(x+1)+`">
			<h1>`+res[x]["nama"]+` : `+res[x]["nomor"]+`</h1>
			<h2>`+res[x]["nama_latin"]+`</h2>
			<label>`+res[x]["arti"]+`</label>
			<label>`+res[x]["jumlah_ayat"]+` Ayat</label>    
			<div class="playbtn">
				<i class="fa-thin fa-play"></i>
			</div>
		</div>
			`)
		}
		surah = res
	});
	console.log("Hioo")

	// TODO: On click container
	$(document).on("click",".container", function () {
		var containerID = $(this).attr('id'); // or var clickedBtnID = this.id
		var recitation = getSurahRecitation(containerID)
		recitation.then(function(res){
			var audioLink = res["audio"]
			$('audio').each(function(){
				this.pause(); // Stop playing
				this.currentTime = 0; // Reset time
			}); 
			$(".audio-player-container").remove();
			$(".main").append(`
      <div class="audio-player-container">
        <label>Playing `+res["nama_latin"]+`</label>
        <audio data-role="audio-player" id="audio-player-main" class="light h-50" data-autoplay="true"
           data-src="`+audioLink+`"
           data-show-loop="false"
           data-show-stop="false"
           data-show-volume="false"
           data-show-info="true">
        </audio>
      </div>
      		`)
		})
		console.log(containerID)
   		
	});
})