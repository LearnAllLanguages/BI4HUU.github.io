let time = 4000; // Пауза між кадрами (мілісек)
let speed = 0.3;  // скорость листання (сек)
function Id(e) {return document.getElementById(e)};
function CE(e) {return document.createElement(e)};
let quantity = document.getElementsByClassName('wrapperSpanSlide')[0].childNodes;
let WrapFullScreen = document.getElementsByClassName('wrapperSpanSlide')[0];
let quantityButton = Id('wIN').childNodes;
let quantityLength = quantity.length-1; // Кількість слайдів
let numberNextSlide = 1;  // Номер наступного слайда
let numberBeakSlide = 1; // Номер основного слайда
let zI = 8;                 // z-index
let s1 = Id(`slide${numberNextSlide}`);
let s2 = Id(`slide${numberBeakSlide}`); 
for (let i = 0; i < quantityLength; i++) {
	quantity[i].id = `slide${i+1}`;
	let input = CE('input');
		input.classList.add("inputSlide", "inputSlideN");
		input.type="button";
		input.style.background = `url("${i+1}.jpg") `;
		input.style.backgroundSize = `100% 100%`;
		input.setAttribute('onclick', `fS1(${i+1})`);
	Id('wIN').appendChild(input);
};
quantity[0].style.zIndex = zI-1;
console.log(quantityLength);
console.log(quantityButton);

function avtoHover(namber){
	for (let i = 0; i < quantityLength; i++) {
		quantityButton[i].style.boxShadow = 'inset 0 0 2em rgba(0, 0, 0, 0.3)';	}
	quantityButton[namber].style.boxShadow = `inset 0 0 1em rgba(256, 256, 256, 0.3),  0em 0em 2em rgba(0, 0, 0, 1)`;};
	avtoHover(numberBeakSlide-1);
let setI = setInterval(() => {nextAuto();}, time);
function beforeGo(e) {
	s1 = Id(`slide${numberNextSlide}`);
	avtoHover(numberNextSlide-1);
	if (s2 == null) {s2 = Id(`slide${1}`)};
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
        };
    };
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
	WrapFullScreen.mozRequestFullScreen();
		if (WrapFullScreen.mozRequestFullScreen()) {} else {document.mozCancelFullScreen()}
	WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		if (WrapFullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)) {} else {document.webkitCancelFullScreen()}
};
document.addEventListener('keydown', function(event) {
    if (event.keyCode==39) {nextAuto()};
    if (event.keyCode==37) {fS1()};
    if (event.keyCode==38) {toggleFullScreen()};
    if (event.keyCode==40) {toggleFullScreen()};
    if (event.keyCode==32) {pause()};
        }, false);