//your JS code here. If required.
let counter = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
let counterValue = 0;
btn.addEventListener("click" , myFunction);


function myFunction(){
	alert(`Un-incremented value: ${counterValue}`);
	counterValue++;
	counter.innerText = counterValue;
}
