// codigo del cuadrado

console.group("Cuadrados"); //sirve para que queden agrupado los console.log
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden:" + ladoCuadrado + "Cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "Cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es:" + areaCuadrada + "Cm");

console.groupEnd();

//codigo triangulo

console.log("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden:" + ladoTriangulo1 + "Cm,",+ ladoTriangulo2 + "Cm,", + baseTriangulo + "Cm");

const alturaTriangulo = 5.5;

console.log("La altura del triangulo es:" + alturaTriangulo+ "Cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;


console.log("el perimetro triangulo es es:" + perimetroTriangulo + "Cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("el area del triagulo es:" + areaTriangulo + "Cm*2");



console.groupEnd();


//codigocdel circulo

console.log("Circulos");


//Radio

const radioCirculo = 4;
console.log("El radio del circulo miden:" + radioCirculo + "Cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("Eldiametro del circulo miden:" + diametroCirculo + "Cm");
//pi
const PI = Math.PI;
console.log("El PI del radio es:" + PI);
//circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("la Circuferencia es :" + perimetroCirculo + "Cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es:" + areaCirculo + "Cm*2");





onsole.groupEnd();