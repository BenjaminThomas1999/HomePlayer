playing = true;

function togglePlayPause(){
	event.stopPropagation();
	if(playing == false){
		document.getElementById("play-pause").src="icons/pause.svg";
	}
	else if (playing == true){
		document.getElementById("play-pause").src="icons/play.svg";
	}
	playing = !playing;
}



document.addEventListener('DOMContentLoaded', () => {
	
	
	
	// ------------ Music Database Search Toggle Logic ----------------------
	
	const musicDatabaseSearchBtn = document.getElementById('music-database-search-btn');
	const musicDatabaseSearchField = document.getElementById('music-database-search-field');
	const musicLibrarySearchField = document.getElementById('music-library-search-field');

//	KioskBoard.run(musicDatabaseSearchField); 
//	KioskBoard.run(musicLibrarySearchField); 

	let musicmusicDatabaseSearchFieldOpen = false;

	musicDatabaseSearchBtn.addEventListener('click', () => {
		musicmusicDatabaseSearchFieldOpen = !musicmusicDatabaseSearchFieldOpen;
		musicDatabaseSearchField.classList.toggle('visible', musicmusicDatabaseSearchFieldOpen);
		musicLibrarySearchField.classList.toggle('visible', !musicmusicDatabaseSearchFieldOpen);
		musicDatabaseSearchBtn.src = musicmusicDatabaseSearchFieldOpen ? 'images/cancel.svg' : 'images/deep-search.svg';
	  
		if (musicmusicDatabaseSearchFieldOpen) {
			musicDatabaseSearchBtn.blur();
			setTimeout(() => {
				musicDatabaseSearchField.focus();
			}, 20);
		} else {
			musicDatabaseSearchField.blur();
		}
	});
	// ------------ Bottom Navigation Bar Control Logic ----------------
	
	const mediaTypeIcons = document.querySelectorAll('.media-type-selector img');
	mediaTypeIcons.forEach(icon => {
		icon.addEventListener('click', () => {
            //once an icon is clicked, make none of the icons .selected, then make the selected icon .selected
			mediaTypeIcons.forEach(i => i.classList.remove('selected'));
		   
			//I am fully aware that the below code is ugly, however it's readable.
			if(icon.classList == "music"){
				document.getElementById("music-screen").style.display = "block";
				document.getElementById("podcast-screen").style.display = "none";
				document.getElementById("audiobook-screen").style.display = "none";
				document.getElementById("more-screen").style.display = "none";
			}
			else if(icon.classList == "podcast"){
				document.getElementById("music-screen").style.display = "none";
				document.getElementById("podcast-screen").style.display = "block";
				document.getElementById("audiobook-screen").style.display = "none";
				document.getElementById("more-screen").style.display = "none";
			}
			if(icon.classList == "audiobook"){
				document.getElementById("music-screen").style.display = "none";
				document.getElementById("podcast-screen").style.display = "none";
				document.getElementById("audiobook-screen").style.display = "block";
				document.getElementById("more-screen").style.display = "none";
			}
			if(icon.classList == "dots"){
				document.getElementById("music-screen").style.display = "none";
				document.getElementById("podcast-screen").style.display = "none";
				document.getElementById("audiobook-screen").style.display = "none";
				document.getElementById("more-screen").style.display = "block";
			}
			icon.classList.add('selected');
		});
	});
});


// The rest of this file is dedicated to the onscreen keyboard, courtesy of kioskboard
/*
KioskBoard.init({

	keysArrayOfObjects: [{
						"0": "Q",
						"1": "W",
						"2": "E",
						"3": "R",
						"4": "T",
						"5": "Y",
						"6": "U",
						"7": "I",
						"8": "O",
						"9": "P"
					  },
					  {
						"0": "A",
						"1": "S",
						"2": "D",
						"3": "F",
						"4": "G",
						"5": "H",
						"6": "J",
						"7": "K",
						"8": "L"
					  },
					  {
						"0": "Z",
						"1": "X",
						"2": "C",
						"3": "V",
						"4": "B",
						"5": "N",
						"6": "M"
					  }
					],

	keysJsonUrl: null,
	keysSpecialCharsArrayOfStrings: null,
	keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
	language: 'en',
	theme: 'dark',
	autoScroll: true,
	capsLockActive: true,
	allowRealKeyboard: true,
	allowMobileKeyboard: false,
	cssAnimations: true,
	cssAnimationsDuration: 360,
	cssAnimationsStyle: 'slide',
	keysAllowSpacebar: true,
	keysSpacebarText: '  ',
	keysFontFamily: 'MainFont',
	keysFontSize: '50px',
	keysFontWeight: 'normal',
	keysIconSize: '30px',
	keysEnterText: 'Enter',
	keysEnterCallback: undefined,
	keysEnterCanClose: true,
});
*/
