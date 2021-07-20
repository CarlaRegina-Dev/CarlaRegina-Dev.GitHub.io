class  Calculadora{

    constructor(){
        this.clear = document.getElementById('visor')
        this.visor = document.getElementById('visor')
        this.calculo = document.getElementById('visor')
        this.resert = document.getElementById('visor')
    }

    numerosVisor(numeroCalculadora){
        this.visor.value+=numeroCalculadora;
    }

    resetar() {
        this.resert.value = '0';
        this.resert.value.disabled = false;
    }
    
    limpar() {
        this.clear.value = ""
    }

    calcular(){
        if(this.calculo){
            document.getElementById('visor').value = eval(this.calculo.value);
        }else{
            visor.value = '0'
        }
    }
}

let calculadora = new Calculadora();


document.getElementById("oper1").addEventListener("click",() => calculadora.numerosVisor ("-"));
document.getElementById("oper2").addEventListener("click",() => calculadora.numerosVisor ("+"));
document.getElementById("oper3").addEventListener("click",() => calculadora.numerosVisor ("*"));
document.getElementById("oper4").addEventListener("click",() => calculadora.numerosVisor ("/"));
document.getElementById("oper5").addEventListener("click",() => calculadora.numerosVisor ("%"));

document.getElementById("oper6").addEventListener("click",() => calculadora.numerosVisor ("("));
document.getElementById("oper7").addEventListener("click",() => calculadora.numerosVisor (")"));
document.getElementById("oper8").addEventListener("click",() => calculadora.numerosVisor (","));
document.getElementById("oper9").addEventListener("click",() => calculadora.numerosVisor ("."));

document.getElementById("oper11").addEventListener("click",() => calculadora.numerosVisor ("sqrt"));
document.getElementById("oper10").addEventListener("click",() => calculadora.numerosVisor("²X"));

document.getElementById("resert").addEventListener("click",() => calculadora.resetar ("CE"));
document.getElementById("clear").addEventListener("click",() => calculadora.limpar ("C"));
document.getElementById("result").addEventListener("click",() => calculadora.calcular ("="));

document.getElementById("num").addEventListener("click",() => calculadora.numerosVisor ("0"));
document.getElementById("num1").addEventListener("click",() => calculadora.numerosVisor ("1"));
document.getElementById("num2").addEventListener("click",() => calculadora.numerosVisor ("2"));
document.getElementById("num3").addEventListener("click",() => calculadora.numerosVisor ("3"));
document.getElementById("num4").addEventListener("click",() => calculadora.numerosVisor ("4"));

document.getElementById("num5").addEventListener("click",() => calculadora.numerosVisor ("5"));
document.getElementById("num6").addEventListener("click",() => calculadora.numerosVisor ("6"));
document.getElementById("num7").addEventListener("click",() => calculadora.numerosVisor ("7"));
document.getElementById("num8").addEventListener("click",() => calculadora.numerosVisor ("8"));
document.getElementById("num9").addEventListener("click",() => calculadora.numerosVisor ("9"));


