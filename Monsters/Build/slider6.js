let time = 6000;
let speed = 0.8;
let slider = document.getElementsByClassName(`Slider`)[0];
let allSlides = slider.childNodes;
let allSlidesLength = allSlides.length;
let numberNextSlide = 1;
let numberBackSlide = 1;
let zIndex = 8;
let setI = setInterval( () => next(), time );
allSlides[0].style.zIndex = zIndex-1;

for ( let i = 0; i < allSlidesLength; i++ ) {
	allSlides[i].classList.add(`slide`);
	allSlides[i].classList.add(`slide${i+1}`);
	// let buttonNumber = document.createElement(`div`);
	// 	buttonNumber.classList.add(`buttonNumber`);
	// 	buttonNumber.style.background = `url('${i+1}.jpg')`;
	// 	buttonNumber.style.backgroundSize = `100% 100%`;
	// 	buttonNumber.setAttribute( `onclick`, `verification(${i+1})` );
	// document.getElementsByClassName( `wrapButtonNumber` )[0].appendChild(buttonNumber);
}
let allButtonNumber = document.getElementsByClassName( `h3Name6` );
let allButtonNumber2 = document.getElementsByClassName( `imgReview` );
let virtualSlideNext = document.getElementsByClassName( `slide${numberNextSlide}` )[0];
let virtualSlideBack = document.getElementsByClassName( `slide${numberBackSlide}` )[0];

function verification(number) {
	if (numberNextSlide == number) {
		clearIntervalMini();		
	} else {
		if ( numberNextSlide < number ) {
			next( number );
			clearIntervalMini();
		} else {
			clearIntervalMini();
			if ( number == undefined ) {
				numberNextSlide--;
				if (numberNextSlide == 0) {
					numberNextSlide = allSlidesLength;
				};
			} else {
				numberNextSlide = number;
			};
		virtualSlideBack = virtualSlideNext;
		GO( `-` );
		};
	};
};

function next(number) {
	clearIntervalMini();
	if (number) {
		numberNextSlide = number;
		virtualSlideBack = virtualSlideNext;
	} else {
		numberBackSlide = numberNextSlide;
		numberNextSlide++;
		if (numberNextSlide > allSlidesLength) {
			numberNextSlide = 1;
		};
		virtualSlideBack = document.getElementsByClassName( `slide${numberBackSlide}` )[0];
	};
	GO(``);
};

function GO(e) {
	virtualSlideNext = document.getElementsByClassName(`slide${numberNextSlide}`)[0];
	autoHover(numberNextSlide-1);
	if(virtualSlideBack == null) {
		virtualSlideBack = document.getElementsByClassName(`slide${1}`)[0];};
		virtualSlideNext.style.cssText = `transition: left 0s; left: ${e}100%;z-index: ${zIndex};`;
		virtualSlideBack.style.cssText = `transition: left 0s; left: 0%;z-index: ${zIndex};`;
		zIndex++;
		setTimeout(
			() => {
				virtualSlideNext.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
				virtualSlideNext.style.left = `0%`;
				virtualSlideBack.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
				if(e == ``) {
				virtualSlideBack.style.left = `-100%`;
				} else {
				virtualSlideBack.style.left = `100%`;
				};
		}, 88);
};

function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(
		() => {
			next();
		}, time	); 
};

function pause() {
	clearInterval(setI);
};
function autoHover(number) {
	for ( let i = 0; i < allSlidesLength; i++ ) {
		allButtonNumber[i].style.color = `#90caf9`;
		allButtonNumber2[i].style.opacity = `0.4`;
	};
	allButtonNumber[number].style.color = `#ffffff`;
	allButtonNumber2[number].style.opacity = `1`;
};
autoHover(numberBackSlide-1);