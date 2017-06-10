var numberNextSlide = 1;
var numberBeakSlide = 4;
var numberBackSlide;
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
}, 7500);
setI;
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
	s1.style.transition = "left .8s cubic-bezier(.35,.47,.93,.92)";
	s1.style.left = "0px"
	s2.style.transition = "left .8s cubic-bezier(.35,.47,.93,.92)";
	s2.style.left = "-800px"	
};
function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		setTimeout(() => nextAuto(), 8);
		setTimeout(() => f3(), 88);
	}, 7500);
	setI;
};
function next() {
	setTimeout(() => nextAuto(), 8);setTimeout(() => f3(), 88);
	clearIntervalMini();
};
// function nextUniversal(nNS) {
	
// };
function fS1(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else {
		setTimeout(() => nextAuto1(), 8); 
		setTimeout(() => f3(), 88);
		function nextAuto1() {
			numberNextSlide=nNSU;
			s2 = s1;
			s1 = document.getElementById(`slide${numberNextSlide}`)
			s1.style.cssText="transition: 'left 0s';left: 800px;";s1.style.zIndex = `${zI}`;
			s2.style.cssText="transition: 'left 0s';left: 0px;";s2.style.zIndex = `${zI}`;
			zI++;
		};
		clearIntervalMini();
	};
};
function lS() {// ______________________________ __________
		setTimeout(() => nextBack(), 8); 
		setTimeout(() => f3B(), 88);
		function nextBack() {
			numberNextSlide--;
			if (numberNextSlide==0) {numberNextSlide=4};
			s2 = s1;
			s1 = document.getElementById(`slide${numberNextSlide}`);
			s1.style.cssText="transition: 'left 0s';left: -800px;";s1.style.zIndex = `${zI}`;
			s2.style.cssText="transition: 'left 0s';left: 0px;";s2.style.zIndex = `${zI}`;
			zI++;
		};
		function f3B() {
			s1.style.transition = "left .8s cubic-bezier(.35,.47,.93,.92)";
			s1.style.left = "0px"
			s2.style.transition = "left .8s cubic-bezier(.35,.47,.93,.92)";
			s2.style.left = " 800px"
		};
		clearIntervalMini();
	};  
// function fS3() {
	
// };
// function fS4() {
// 	if (true) {} else {}
// }; 