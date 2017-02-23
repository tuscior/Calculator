$(document).ready(function() {
  let keys = document.querySelectorAll('.button');
  let screen = document.querySelectorAll('.screen');
  let display = [];
  
 keys.forEach(k => {
 		k.onclick = () => {
 			$(".screen").css('color', 'white');
 			let sign = k.innerHTML;
 			if(sign !== "=" && sign !== "C" && sign !== "←"){
 				display.push(sign);
 				validation(display);
 			}
 			else if(sign === "C"){
 				display = [];
 				update(display);
 			}
 			else if(sign === "←"){
 				display.pop();
 				update(display);
 			}
 			else if(sign === "="){
 				getTotal();
 			}
 		}
 	});
  
	    
function update(display){
  	display = display.join("");
  	$(".screen").html(display);
  }
function getTotal() {
    let signs = ["+","÷",".","-","*"];
    let total = display.join('');
    let last = total.charAt(total.length-1);
    let checkTotal = function(){
    	return signs.some((s) => {
   		return s === last;
   	});	
}
	total = total.replace(/÷/g, '/');
   	if(!checkTotal()){
   		let num = Math.round(eval(total), 1);
	   	display = [num];
   		$(".screen").html(display);

   } else {
   	$(".screen").css('color', 'red');
   }
}	
function validation(display){
 	let signs = ["+","÷",".","-","*"];   	
   	let string = display.join("");
   	let first = string.charAt(0);
   	let last1 = string.charAt(string.length-2);
   	let last = string.charAt(string.length-1);
   	switch(first){
   		case "+":
   		case "*":
   		case "÷":
   		case ".":
   		display.pop();
   	}
   	let checkLast = signs.some((s) => {
   		return s === last;
   	});
   	let checkSings = () => {
   	let beforeLast = signs.some((b) => {
   		return b === last1;
   	});
   		if(checkLast && beforeLast){
   			let temp = display.pop();
   			display[display.length-1] = temp;
   		}
   	}
   	checkSings();
   	update(display);
 }	
});
  







    
    
