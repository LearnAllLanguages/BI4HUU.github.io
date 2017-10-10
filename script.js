let time = 4000;
let speed = 0.8;
var numberNextSlide = 1;  // Номер наступного слайда
var numberBeakSlide = 4; // Номер основного слайда
var numberBackSlide;     // Номер попереднього слайда
var zI = 1;                 // z-index
function Id(e) {return document.getElementById(e)};
var s1 = Id(`slide${numberNextSlide}`);
var s2 = Id(`slide${numberBeakSlide}`); 
var setI = setInterval(() => {
	setTimeout(() => nextAuto(), 8);
	setTimeout(() => f3(), 88);
}, time);setI;
function nextAuto() {
	numberNextSlide++;
	numberBeakSlide = numberNextSlide-1;
	if (numberBeakSlide == 0) {numberBeakSlide = 4};
	if(numberNextSlide == 5){numberNextSlide = 1};
	s1 = Id(`slide${numberNextSlide}`);
	s2 = Id(`slide${numberBeakSlide}`); 
	s1.style.cssText="transition: 'left 0s';left: 100%;";s1.style.zIndex = `${zI}`;
	s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
	zI++;
}; 
function f3() {
	s1.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s1.style.left = "0%";
	s2.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s2.style.left = "-100%";
};
function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		setTimeout(() => nextAuto(), 8);
		setTimeout(() => f3(), 88);
	}, time);
	setI;
};
function next() {
	setTimeout(() => nextAuto(), 8);setTimeout(() => f3(), 88);
	clearIntervalMini();
};
function nextAuto1(nNSU) {
	numberNextSlide=nNSU;
	s2 = s1;
	s1 = Id(`slide${numberNextSlide}`);
	s1.style.cssText="transition: 'left 0s';left: 100%;";s1.style.zIndex = `${zI}`;
	s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
	zI++;
};
function fS1(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else { if (numberNextSlide < nNSU) {
		setTimeout(() => nextAuto1(nNSU), 8); 
		setTimeout(() => f3(), 88);
		clearIntervalMini();
		} else {
			setTimeout(() => nextBack(nNSU), 8); 
			setTimeout(() => f3B(), 88);
			clearIntervalMini();
		};
	};
};
function nextBack(nNSU) {
	if (nNSU == undefined) {
		numberNextSlide--;
		if (numberNextSlide==0) {numberNextSlide=4};
		s2 = s1;
		s1 = Id(`slide${numberNextSlide}`);
		s1.style.cssText="transition: 'left 0s';left: -100%;";s1.style.zIndex = `${zI}`;
		s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
		zI++;
	} else {
		numberNextSlide = nNSU;
		if (numberNextSlide==0) {numberNextSlide=4};
		s2 = s1;
		s1 = Id(`slide${numberNextSlide}`);
		s1.style.cssText="transition: 'left 0s';left: -100%;";s1.style.zIndex = `${zI}`;
		s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
		zI++;
	};
};
function f3B() {
	s1.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s1.style.left = "0%";
	s2.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s2.style.left = " 100%";
};
function lS() {
		setTimeout(() => nextBack(), 8); 
		setTimeout(() => f3B(), 88);
		clearIntervalMini();
};  

//---------------
// function nextAuto(nNSU = numberNextSlide++) {
// 	numberBeakSlide = numberNextSlide;
// 	numberNextSlide=nNSU;
// 	if (numberBeakSlide == 0) {numberBeakSlide = 4};
// 	if(numberNextSlide == 5){numberNextSlide = 1};
// 	s1 = document.getElementById(`slide${numberNextSlide}`);
// 	s2 = document.getElementById(`slide${numberBeakSlide}`); 
// 	s1.style.cssText="transition: 'left 0s';left: 100%;";s1.style.zIndex = `${zI}`;
// 	s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
// 	zI++;
// }; 
      
//---------------
// let Id = ['slide1', 'slide2', 'slide3', 'slide4'];
// for (let i = 0; i < Id.length; i++) {eval(`var ${Id[i]} = document.getElementById(${Id[i]})`)};
// var slide1 = document.getElementById('slide1');
// var slide2 = document.getElementById('slide2');
// var slide3 = document.getElementById('slide3');
// var slide4 = document.getElementById('slide4');
