//Funcion del Ejercicio 1
var contra = " "
function contraseñaValidar(contra)
{
    var contra = document.getElementById("lblContra").value;

    if(contra === "2FjjjbFsuj" || contra === "eoZiugBfg9")
        {
            alert("TRUE");
            console.log("TRUE")
        }
        else
        {
            alert("FALSE");
        }
}
//Fin de la funcion del Ejercicio 1

//Funcion del Ejercicio 2
edad = 0;
ingresos = 0;
function calcularImpuesto(edad,ingresos)
{
    var edad = document.getElementById("lblEdad").value;
    var ingresos = document.getElementById("lblIngresos").value;
    var total = 0;

    if (edad >= 18 && ingresos >= 1000)
    {
        total = ingresos * 0.40;
        alert("El Total es: $" +total);
        console.log(total)
    }
    else
    {
        alert("0");
        console.log("0")
    }
}
//Fin de la funcion del Ejercicio 2

//Funcion del Ejercicio 3
peso = 0;
altura = 0;
function calcularIMC(peso,altura)
{
    var peso = document.getElementById("lblPeso").value;
    var altura = document.getElementById("lblAltura").value;
    var imc = (peso / (altura * altura));

    if(imc < 18.5)
    {
        alert("Bajo de Peso");
    }
        else if(imc >= 18.5 && imc <= 24.9)
            {
                alert("Normal");
            }
            else if(imc >= 25 && imc <= 29.9)
                {
                    alert("Sobrepeso");
                }
                else if(imc >= 30)
                    {
                        alert("Obeso");
                    }
}
//Fin de la funcion del Ejercicio 3

//Funcion del Ejercicio 4
imprimir = [];
function imprimirArreglo(imprimir)
{
    let texto = document.getElementById("lblArreglo").value.split(" ");
    imprimir = imprimir.concat(texto);
    document.getElementById("lblMostrar").innerHTML = imprimir.join("<br>");
}
//Fin de la funcion del Ejercicio 4

//Funcion del Ejercicio 5
function likes()
    {
        var mCantidad = document.getElementById("lblNumero").value;
        var mK = 0;
        var mM = 0;
        if(parseFloat(mCantidad) > 1000  && parseFloat(mCantidad) < 1000000 )
        {
            mK = Math.floor(parseFloat(mCantidad) / 1000);
            document.getElementById("lblMostrar").innerHTML = mK + "K";
        }
        if(parseFloat(mCantidad) > 1000000 )
         {
            mM = Math.floor(parseFloat(mCantidad) / 1000000);
            document.getElementById("lblMostrar").innerHTML = mK + "M";
         }
    }

//Funcion del Ejercicio 6
function nMultiplo()
{
    var num = document.getElementById("lblNumero").value;

    if(num % 3 == 0 && num % 5 == 0)
        {
            document.getElementById("lblMostrar").innerHTML = "FIZZBIZZ";
        }
    else if(num % 5 == 0)
        {
            document.getElementById("lblMostrar").innerHTML = "BIZZ";
        }
    else if(num % 3 == 0)
        {
            document.getElementById("lblMostrar").innerHTML = "BIZZ";
        }
    else
    {
        document.getElementById("lblMostrar").innerHTML = num;
    }
}

//Funcion del Ejercicio 7
longitud = [];
function arregloRango()
{
    var num1 = parseInt(document.getElementById("lblNum1").value);
    var num2 = parseInt(document.getElementById("lblNum2").value);

    if(num1 < num2)
        {
            for(let i = num1; i <= num2; i++)
                {
                    longitud.push(i);
                    document.getElementById("lblMostrar").innerHTML = longitud.length - 2;
                }
        }
    if (num1 > num2)
        {
            for(let i = num1; i >= num2; i--)
                {
                    longitud.push(i);
                    document.getElementById("lblMostrar").innerHTML = longitud.length - 2;
                }
        }
}

//Funcion del Ejercicio 8
suma = [];
function arregloSuma()
{
    var num1 = parseInt(document.getElementById("lblNum1").value);
    var num2 = parseInt(document.getElementById("lblNum2").value);
    let total = 0;

    if(num1 < num2)
        {
            for(let i = num1; i <= num2; i++)
                {
                    total = total + i;
                    document.getElementById("lblMostrar").innerHTML = total;
                }
        }
    if (num1 > num2)
        {
            for(let i = num1; i >= num2; i--)
                {
                    total = total + i;
                    document.getElementById("lblMostrar").innerHTML = total;
                }
        }
}

//Funcion del Ejercicio 9
function arregloCantidad()
{
    var texto = document.getElementById("lblPalabra").value;

    let letra = "a"
    let contador = 0;

    for(var i = 0;i <texto.length; i++)
        {
            if(texto[i] == letra)
                {
                    contador++
                }
        }
        document.getElementById("lblMostrar").innerHTML = contador;
}

//Funcion del Ejercicio 10
function arregloCaracter()
{
    var texto = document.getElementById("lblPalabra").value;
    var letra = document.getElementById("lblLetra").value;

    let contador = 0;

    for(var i = 0;i <texto.length; i++)
        {
            if(texto[i] == letra.toLowerCase() || texto[i] == letra.toUpperCase())
                {
                    contador++
                }
        }
        document.getElementById("lblMostrar").innerHTML = contador;
}

//Inicio de la Funcion del Ejercicio 14
document.getElementById('formSumaR').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los números ingresados y eliminar espacios adicionales
    const numeros = document.getElementById('nsumaRArreglo').value
        .split(',')
        .map(num => num.trim())
        .map(Number);

    const inicio = parseInt(document.getElementById('inicioP').value);
    const fin = parseInt(document.getElementById('finP').value);

    // Verificar que todos los elementos son números válidos
    if (numeros.some(isNaN)) {
        document.getElementById('lblMostrar').textContent = 'Por favor, ingresa un arreglo de números válido.';
    } else if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin < 0 || inicio >= numeros.length || fin >= numeros.length) {
        document.getElementById('lblMostrar').textContent = 'Por favor, ingresa posiciones válidas.';
    } else {
        const suma = sumarArreglo(numeros, inicio, fin);
        document.getElementById('lblMostrar').textContent = `La suma de los números en el rango es: ${suma}`;
    }
});

function sumarArreglo(arr, inicio, fin) {
    let suma = 0;

    if (inicio <= fin) {
        for (let i = inicio; i <= fin; i++) {
            suma += arr[i];
        }
    } else {
        for (let i = inicio; i >= fin; i--) {
            suma += arr[i];
        }
    }

    return suma;
}
//Fin de la Funcion del Ejercicio 14


