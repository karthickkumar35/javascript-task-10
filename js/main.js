let add1 = document.getElementById("add");
let sub1 = document.getElementById("sub");
let input = document.getElementById("inp");

add1.addEventListener("click",addin);
sub1.addEventListener("click",subin);
function addin(){
	input.value=Number(input.value)+1;
}
function subin(){
	if(input.value>0){
		input.value=Number(input.value)-1;
	}
}
