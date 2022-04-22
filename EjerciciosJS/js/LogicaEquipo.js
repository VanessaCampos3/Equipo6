//Campos Blancas Frida Vanessa Problemas 1 y 4.
function problema1(){

    var num1 = parseInt(document.querySelector('#p1-input').value);
    var num2 = parseInt(document.querySelector('#p1-input1').value);

    if(num1 == num2){
        
        res_p1 = num1 * num2;

    }
    if(num1 > num2){
        
        res_p1 = num1 - num2;

    }
    if(num1 < num2){
        
        res_p1 = num1 + num2;
 
    }

    document.querySelector("#p1-output").textContent = "El numero es: " + res_p1;

}

function problema4(){

    var salario = parseInt(document.querySelector('#p4-input').value);
    var antiguedad = parseInt(document.querySelector('#p4-input1').value);

    if(antiguedad < 1){

        utilidad = (salario * 0.05);

    } 
    if(antiguedad >= 1 && antiguedad < 2){

        utilidad = (salario * 0.07);

    } 
    if(antiguedad >= 2 && antiguedad < 5){

        utilidad = (salario * 0.1);

    } 
    if(antiguedad >=5 && antiguedad < 10){

        utilidad = (salario * 0.15);

    } 
    
    if(antiguedad >= 10){

        utilidad = (salario * 0.2);

    } 
    

    document.querySelector("#p4-output").textContent = "La utilidad que obtiene es : $" + utilidad;

}

//Cruz Moreno Luis Antonio, Problemas 2 y 3.
function problema2(){
	var n1,n2,n3,t,mayor;
	n1 = parseInt(document.querySelector('#p2-input').value);
	n2 = parseInt(document.querySelector('#p2-input1').value);
	n3 = parseInt(document.querySelector('#p2-input2').value);

	if (n1 > n2) {
		t = n1;
	}else{
		t = n2;
	}

	if (t > n3) {
		mayor = t;
	}else{
		mayor = n3;
	}

	document.querySelector("#p2-output").textContent = "El mayor es: "+mayor;
}

function problema3(){
    var pagoxhora = parseInt(document.querySelector('#p3-input').value);
	var horas = parseInt(document.querySelector('#p3-input1').value);
    var horasex = horas - 40;
    var horasexex = horasex - 8;
    
    if(horas <= 40){

        document.querySelector("#p3-output").textContent = "No se trabajaron horas extras.";
    }else{
        document.querySelector("#p3-output").textContent = "Error";
    }
    if(horas > 40 && horas <= 48){
		pagoex=horasex*(2*pagoxhora);
    } 
	if(horas > 48){
        pagoex= (8 *(2*pagoxhora)) + (horasexex * (3 *pagoxhora));
    }
	
    document.querySelector("#p3-output").textContent = "Horas extra trabajadas: " + horasex + "\n" + "Pago Extra: $" + pagoex;
	
    
}
