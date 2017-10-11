let time = 4000; // Пауза між кадрами (мілісек)
let speed = .9;  // скорость листання (сек)
function Id(e) {return document.getElementById(e)};
function CE(e) {return document.createElement(e)};
let quantity = document.getElementsByClassName('wrapperSpanSlide')[0].childNodes;
let quantityLength = quantity.length; // Кількість слайдів
var numberNextSlide = quantityLength;  // Номер наступного слайда
var numberBeakSlide = quantityLength-1; // Номер основного слайда
var numberBackSlide;     // Номер попереднього слайда
var zI = 1;                 // z-index
var s1 = Id(`slide${numberNextSlide}`);
var s2 = Id(`slide${numberBeakSlide}`); 
for (let i = 0; i < quantity.length; i++) {
	quantity[i].id = `slide${i+1}`;
	let input = CE('input');
		input.className = "inputSlide";
		input.type="button";
		input.value=`${i+1}`;
		input.setAttribute('onclick', `fS1(${i+1})`);
	Id('wIN').appendChild(input);	};
var setI = setInterval(() => {
	nextAuto();
	setTimeout(() => go('forward'), 88); // forward - вперед
}, time);setI;

function go(e) {
	e  == 'forward' ? e = " -100%" : e = " 100%"
	s1.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s1.style.left = "0%";
	s2.style.transition = `left ${speed}s cubic-bezier(.35,.47,.93,.92)`;
	s2.style.left = e;	
};
function beforeGo(e = '') {
	s1 = Id(`slide${numberNextSlide}`);
	s1.style.cssText=`transition: 'left 0s';left: ${e}100%;`;s1.style.zIndex = `${zI}`;
	s2.style.cssText="transition: 'left 0s';left: 0%;";s2.style.zIndex = `${zI}`;
	zI++;	
};

function nextAuto(nNSU) {
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
	beforeGo(); }; 
	
function clearIntervalMini() {
	clearInterval(setI);
	setI = setInterval(() => {
		nextAuto();
		setTimeout(() => go('forward'), 88);
	}, time);
	setI;	};
function next() {
	nextAuto();setTimeout(() => go('forward'), 88);
	clearIntervalMini();	};
function fS1(nNSU) {
	if (numberNextSlide == nNSU) {	
		clearIntervalMini();	
	} else { 
		if (numberNextSlide < nNSU) {
			setTimeout(() => nextAuto(nNSU), 8); 
			setTimeout(() => go('forward'), 88);
			clearIntervalMini();
		} else {
			setTimeout(() => nextBack(nNSU), 8); 
			setTimeout(() => go(), 88);
			clearIntervalMini();	};	};	};
function nextBack(nNSU) {
	if (nNSU == undefined) {
		numberNextSlide--;
		if (numberNextSlide==0) {numberNextSlide=quantityLength};
	} else {
		numberNextSlide = nNSU;
		if (numberNextSlide==0) {numberNextSlide=quantityLength};
	};	
	s2 = s1;
	beforeGo('-');	};
function lS() {
		setTimeout(() => nextBack(), 8); 
		setTimeout(() => go(), 88);
		clearIntervalMini();	};  


// function nextAuto() {
// 	numberNextSlide++;
// 	numberBeakSlide = numberNextSlide-1;
// 	if (numberBeakSlide == 0) {numberBeakSlide = quantityLength};
// 	if (numberNextSlide > quantityLength){numberNextSlide = 1};
// 	s2 = Id(`slide${numberBeakSlide}`); 
// 	beforeGo(); }; 
// function nextAuto1(nNSU) {
// 	numberNextSlide=nNSU;
// 	s2 = s1;
// 	beforeGo();		};