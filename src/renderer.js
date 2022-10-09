import { getListSurah, getSurahRecitation } from "./getSurah.js"
import { renderContainer } from "./container.js"
import { audioPlay } from "./audioPlayer.js"



$(document).ready(function () {
	//const plyr = new Plyr('.player');
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
	$("input").on("keyup", function() {
		var input = $("input")
    var value = $(this).val().toLowerCase();
    $(".container").filter(function() {
      $(this).toggle($(this).text().indexOf(value) > -1)
    });
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
	$(document).on("click",".container", function () {
		containerID = $(this).attr('id'); // or var clickedBtnID = this.id
		var recitation = getSurahRecitation(containerID)

		recitation.then(function(res){
			//res = JSON.parse(res)
			audioPlay(this, plyr, res)
		})
		console.log(containerID)
		// Play the next tafsir if this one is done
		//$("audio").onended = playNextTafsir(containerID)
	});

	// Play the next tafsir if this one is done
	//$("audio").onended = playNextTafsir(containerID)

	if ($("audio").duration == $("audio").currentTime) {
		console.log("done")
	}

})
