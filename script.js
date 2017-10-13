// добавить автоховер на кнопки

let time = 8000; // Пауза між кадрами (мілісек)
let speed = 1;  // скорость листання (сек)
function Id(e) {return document.getElementById(e)};
function CE(e) {return document.createElement(e)};
let WrapFullScreen = Id("WrapFullScreen");
let quantity = document.getElementsByClassName('wrapperSpanSlide')[0].childNodes;
let quantityLength = quantity.length-1; // Кількість слайдів
let numberNextSlide = quantityLength;  // Номер наступного слайда
let numberBeakSlide = quantityLength-1; // Номер основного слайда
let zI = 1;                 // z-index
let s1 = Id(`slide${numberNextSlide}`);
let s2 = Id(`slide${numberBeakSlide}`); 
for (let i = 0; i < quantityLength; i++) {
	quantity[i].id = `slide${i+1}`;
	let input = CE('input');
		input.className = "inputSlide";
		input.type="button";
		input.value=`${i+1}`;
		input.setAttribute('onclick', `fS1(${i+1})`);
	Id('wIN').appendChild(input);	};
let setI = setInterval(() => {nextAuto();}, time);
function beforeGo(e) {
	s1 = Id(`slide${numberNextSlide}`);
	if (s2 == null) {s2 = Id(`slide${quantityLength}`)};
	s1.style.cssText=`transition: 'left 0s';left: ${e}100%;`;
	s1.style.zIndex = `${zI}`;
	s2.style.cssText=`transition: 'left 0s';left: 0%;`;
	s2.style.zIndex = `${zI}`;
	zI++;	
	setTimeout(() => {
		s1.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
		s1.style.left = "0%";
		s2.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
		if (e == '') {s2.style.left = '-100%';} else {s2.style.left = '100%';};
	}, 88);};

function nextAuto(nNSU) {
	clearIntervalMini();
	if (nNSU) {
		numberNextSlide=nNSU;
		s2 = s1;
	} else {
		numberNextSlide++;
		numberBeakSlide = numberNextSlide-1;
		if (numberBeakSlide == 0) {numberBeakSlide = quantityLength};
		if (numberNextSlide > quantityLength){numberNextSlide = 1};
		s2 = Id(`slide${numberBeakSlide}`); 
	};
	beforeGo(''); }; 

function fS1(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else { 
		if (numberNextSlide < nNSU) {
			nextAuto(nNSU); 
			clearIntervalMini();
		} else {
			clearIntervalMini();
			if (nNSU == undefined) {
				numberNextSlide--;
				if (numberNextSlide==0) {numberNextSlide=quantityLength};
			} else {
				numberNextSlide = nNSU;
				if (numberNextSlide==0) {numberNextSlide=quantityLength};
			};	
			s2 = s1;
			beforeGo('-');
		};
	};};

function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		nextAuto();
	}, time);
	setI;	};
function pause() {
	clearInterval(setI);
}
function toggleFullScreen() {
	if (WrapFullScreen.mozRequestFullScreen) {
	WrapFullScreen.mozRequestFullScreen();
		if (WrapFullScreen.mozRequestFullScreen()) {} else {document.mozCancelFullScreen()}
	}; // else document.exitFullscreen();
	if (WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {
	WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
} else {document.webkitCancelFullScreen()}};
// WrapFullScreen.addEventListener('mousedown', function(event) {
//     alert('mousedown');
//         }, false);
// WrapFullScreen.addEventListener('keydown', function(event) {
//     alert('keydown');
//         }, false);
// вправо 39
// лево 37
// верх 38
// низ 40