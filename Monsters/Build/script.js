var arrSec4 = document.querySelectorAll('.sec1Sub')
var wrapSec5 = document.querySelectorAll('.wrapSec5')

setInterval(
	()=>{
		resizeResponsiv()
	}, 88
)

window.addEventListener("resize", resizeResponsiv);

function resizeResponsiv() {
	for (let i = 0; i < arrSec4.length; i++) {
		if (arrSec4[i].clientHeight > 1) {
			wrapSec5[0].style.marginTop = arrSec4[i].clientHeight
		}
	}
}


