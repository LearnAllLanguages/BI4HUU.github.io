var numberNextSlide = 0;
var numberBeakSlide = 4;
var zI = 1;
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');
var s1 = document.getElementById(`slide${numberNextSlide}`);
var s2 = document.getElementById(`slide${numberBeakSlide}`);
var setI = setInterval(() => {
	setTimeout(() => nextAuto(), 8);
	setTimeout(() => f3(), 88);
}, 5000);setI;
function nextAuto() {
	numberNextSlide++;
	numberBeakSlide = numberNextSlide-1;
	if (numberBeakSlide == 0) {numberBeakSlide = 4};
	if(numberNextSlide == 5){numberNextSlide = 1};
	s1 = document.getElementById(`slide${numberNextSlide}`)
	s2 = document.getElementById(`slide${numberBeakSlide}`)
	s1.style.cssText="transition: 'left 0s';left: 800px;";s1.style.zIndex = `${zI}`;
	s2.style.cssText="transition: 'left 0s';left: 0px;";s2.style.zIndex = `${zI}`;
	zI++;
};
function f3() {
	s1.style.transition = "left 1.8s";
	s1.style.left = "0px"
	s2.style.transition = "left 1.8s";
	s2.style.left = "-800px"	
};
function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		setTimeout(() => nextAuto(), 8);
		setTimeout(() => f3(), 88);
	}, 4000);
	setI;
};
function next() {
	setTimeout(() => nextAuto(), 8);setTimeout(() => f3(), 88);
	clearIntervalMini();
};
