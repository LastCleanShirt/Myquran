import { getListSurah, getSurahRecitation } from "./getSurah.js"
import { renderContainer } from "./container.js"
import { audioPlay } from "./audioPlayer.js"


/*player.on("play", emitPlayerEvent);

function emitPlayerEvent(event) {
  document.getElementById("teststring").innerHTML = !event.detail.plyr
    ? "The plyr object DOES NOT exist!"
    : "The plyr object exists!";
  console.log(event);
}*/



$(document).ready(function () {
	var player = new Plyr(document.querySelector("audio"));
	//let plyr = new Plyr(document.querySelector('.js-player'));
	/* Functions */
	function playNextTafsir(containerID){
		console.log("done")
		$("audio").currentTime = 0
		containerID = containerID + 1
		var surah = getSurahRecitation(containerID)
		surah.then(function(res){
			audioPlay(this, plyr, res)
			console.log(containerID)
		})
	}

	/* Sticky search bar

	*/
	$(window).scroll(function(e){
	  var $el = $('.search-bar');
	  var isPositionFixed = ($el.css('position') == 'fixed');
	  if ($(this).scrollTop() > 600 && !isPositionFixed){
	    //$el.css({'position': 'fixed'});
			$el.removeClass("bartop")
	    $el.addClass("fixs")
	  }
	  if ($(this).scrollTop() == 0 && isPositionFixed){
	    //$el.css({'position': 'static', 'top': '0px'});
	    $el.removeClass("fixs")
			$el.addClass("bartop")
	  }
	});

	/* Search bar, search for the correct surah */
	$("input").filterElements({
		parentElementWrapper: ".main",
		childElementToFilter: ".container",
		caseSensitive: false
	});

	/* Get Surah List
	*/
	var surah = getListSurah();
	surah.then(function(res){
		// Render the containers
		renderContainer($(".main"), res)
		surah = res
	});
	console.log("Hioo")


	/* Play the tafsir on click container
	*/
	var containerID;
	player = new Plyr(".js-player");
	$(document).on("click",".container", function () {
		containerID = $(this).attr('id'); // or var clickedBtnID = this.id
		containerID = parseInt(containerID)
		console.log(containerID)
		var recitation = getSurahRecitation(containerID)
		recitation.then(function(res){
			//res = JSON.parse(res)
			audioPlay(this, player, res)
			console.log(player);
		})
		//containerID += 1
		console.log(containerID)
	});
		// Always listen if the audio is done playing, then play the next one and so on
	$("audio").on('ended',  function() {
		if ( containerID < 114 || containerID == 113){
			containerID  += 1
		}
		if (containerID < 114){
			console.log("Surah ended")
		 // functions that I'd like to add
		 var recitation = getSurahRecitation(containerID)
		 console.log(containerID)
		 recitation.then(function(res){
			 //res = JSON.parse(res)
			 audioPlay(this, player, res)
			 console.log(player);
			 player.play()
		 })
		 console.log(containerID)
	 } else if (containerID == 114) {
		 console.log("An Nas Ended, Start from al baqarah")
		 var recitation = getSurahRecitation(containerID)
		 console.log(containerID)
		 recitation.then(function(res){
			 //res = JSON.parse(res)
			 audioPlay(this, player, res)
			 console.log(player);
			 player.play()
		 })
		 containerID = 0

	 }

	 });
	player.on('ready', function() {
		console.log("ready")
		player.play();
	});


})
