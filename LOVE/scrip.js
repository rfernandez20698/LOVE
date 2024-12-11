const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {

		let resultado = JSON.parse(this.response)
		document.getElementById("p").innerHTML = resultado.percentage + "%"
		console.log(resultado.percentage);
		if(parseInt(resultado.percentage) <50){
			document.getElementById("foto")





		console.log(resultado);
		console.log(resultado.percentage)


			

		const resultdiv = document.getElementById("app")

		const contenido = `<p> La compatibilidad entre ${resultado.sname} y ${resultado.fname} es del ${resultado.percentage}%</p>`

		resultdiv.innerHTML = contenido;
	}
});


document.getElementById("añadir").addEventListener('click', function(){
	

	let n1 = document.getElementById("n1").value
	let n2 = document.getElementById("n2").value



xhr.open('GET', `https://love-calculator.p.rapidapi.com/getPercentage?sname=${n1}&fname=${n2}`);

xhr.setRequestHeader('x-rapidapi-key', '194fdea34amshdc9643450a5c9d6p1ca95bjsnb916e191effe');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send(data);
})



















