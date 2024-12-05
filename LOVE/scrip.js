const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse(this.response)
		console.log(resultado);
	}
});
document.getElementById("calcular").addEventListener("click", function(){
	
	let n1 = document.getElementById("n1").value
	let n2 = document.getElementById("n2").value



xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname=' + n1 + '&name=' + n2);
xhr.setRequestHeader('x-rapidapi-key', '194fdea34amshdc9643450a5c9d6p1ca95bjsnb916e191effe');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send(data);
})
























