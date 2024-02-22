

function suma(){
// Explicacion algoritmo
    alert ("algoritmo que realiza una suma entre dos valores ingresados por ")
    // declara variables necesarias 

let a,b,s= 0;

// captura los datos 

a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));
// realiza la operacion
s=a+b;

alert("el resultado d ela suma es: " + s)
}

function opBasicas(){

    alert ("operaciones basicas")

// suma
let a,b,s,r,m,d= 0;

a=parseInt(prompt("ingrese el primer valor"));
b=parseInt(prompt("ingrese el segundo valor"));

s=a+b;
r=a-b;
m=a*b;
d=a/b;

alert("el resultado de la resta es: " + r)
alert("el resultado de la multiplicacion es: " + m)
alert("el resultado de la divicion es: " + d)
}

function nCuadrado(){
    // Explicacion del algoritmo
    alert("algoritmo que calcula el cuadrado de un numero ingresado");
    // Declaracion de variables
    let  N,C = 0;
    // capturamos los datos
    N=parseInt(prompt("ingrese el primer valor"));
    // realizamos la operacion
    C=N*N;

    alert("el resultado al cuadrado es: " + C)

}

function Atriangulo(){

    alert("algoritmo que determina la area de un triangulo ");

    let  A,B,R = 0;

    A=parseInt(prompt("ingrese el primer valor"));
    B=parseInt(prompt("ingrese el segundo valor"));

    R=(A*B)/2

    alert("el resultado del area del triangulo es : " + R)


}


function Nmayor(){

    alert("Algoritmo que determina el mayor de dos numeros ingresados ");

    let  N1,N2 = 0;

    N1=parseInt(prompt("ingrese el primer valor"));
    N2=parseInt(prompt("ingrese el segundo valor"));

    if (N1==N2){
        alert("Los valores ingresados son igules");
    }else if(N1>N2){
        alert(N1 +"es mayor que " + N2);
    }else{
        alert (N2 + "es mayor que"+ N1)
    }


}

function Nmenores(){

    alert("Algoritmo que determina el menor de tres numeros ingresados ");

    let  N1,N2,N3 = 0;

    N1=parseInt(prompt("ingrese el primer valor"));
    N2=parseInt(prompt("ingrese el segundo valor"));
    N3=parseInt(prompt("ingrese el tercer valor"));

    if ((N1<=N2) && (N2<=N3)){
        alert(N1 +" es menor que " + N2 + " y Es menor " + N3);
    }else if ((N2<=N1) && (N1<=N3)){
        alert(N2 +" es menor que " + N1 + " y Es menor " + N3);
    }else if ((N3<=N1) && (N1<=N2)){
        alert(N3 +" es menor que " + N1 + " y Es menor " + N2);
    }else if ((N1<=N3) && (N3<=N2)){
        alert(N1 +" es menor que " + N3 + " y Es menor " + N2);
    }else if ((N2<=N3) && (N3<=N1)){
        alert(N2 +" es menor que " + N3 + " y Es menor " + N1);
    
    
 

}}


   





