class  Calculadora{

    constructor(){
        this.clear = document.getElementById('visor');
        this.visor = document.getElementById('visor');
        this.calculation = document.getElementById('visor');
        this.resert = document.getElementById('visor');
        this.root= document.getElementById('visor');
        this.potency = document.getElementById('visor');
        this.percentage = document.getElementById('visor');
        this.createListener()
    }

    createListener(){
    //operações básicas e porcentagem   
    document.getElementById("oper1").addEventListener("click",() => this.numeroVisor ("-"));
    document.getElementById("oper2").addEventListener("click",() => this.numeroVisor ("+"));
    document.getElementById("oper3").addEventListener("click",() => this.numeroVisor ("*"));
    document.getElementById("oper4").addEventListener("click",() => this.numeroVisor ("/"));
    document.getElementById("oper5").addEventListener("click",() => this.porcentagem ("%"));
    //pontuação
    document.getElementById("oper6").addEventListener("click",() => this.numeroVisor ("("));
    document.getElementById("oper7").addEventListener("click",() => this.numeroVisor (")"));
    document.getElementById("oper8").addEventListener("click",() => this.numeroVisor (","));
    document.getElementById("oper9").addEventListener("click",() => this.numeroVisor ("."));
    //potência, raiz quadrada e igualdade
    document.getElementById("oper10").addEventListener("click",() => this.potencia("²X"));
    document.getElementById("oper11").addEventListener("click",() => this.raiz ("√"));
    document.getElementById("result").addEventListener("click",() => this.calcular ("="));
    //limpar
    document.getElementById("resert").addEventListener("click",() => this.resetar ("CE"));
    document.getElementById("clear").addEventListener("click",() => this.limpar ("C"));
    //números de 0 a 9
    document.getElementById("num0").addEventListener("click",() => this.numeroVisor ("0"));
    document.getElementById("num1").addEventListener("click",() => this.numeroVisor ("1"));
    document.getElementById("num2").addEventListener("click",() => this.numeroVisor ("2"));
    document.getElementById("num3").addEventListener("click",() => this.numeroVisor ("3"));
    document.getElementById("num4").addEventListener("click",() => this.numeroVisor ("4"));
    document.getElementById("num5").addEventListener("click",() => this.numeroVisor ("5"));
    document.getElementById("num6").addEventListener("click",() => this.numeroVisor ("6"));
    document.getElementById("num7").addEventListener("click",() => this.numeroVisor ("7"));
    document.getElementById("num8").addEventListener("click",() => this.numeroVisor ("8"));
    document.getElementById("num9").addEventListener("click",() => this.numeroVisor ("9"));
}

    //concatenar os números no visor 
    numeroVisor(numeroCalculadora){
        this.visor.value += numeroCalculadora;   
    }
    //zera o visor  
    resetar() {
        this.resert.value = '0' ;
        this.resert.value.disabled = true;
    }
    //limpar o visor 
    limpar() {
        this.clear.value = ""
    }
    //calcula com eval 
    calcular(){
        this.visor.value = eval(this.calculation.value);
    }
    //tira a raiz quadrada
    raiz(){
        this.visor.value = Math.sqrt(this.root.value);
    }
    //tira a potência elevando ao quadrado 
    potencia(){
        this.visor.value = Math.pow(this.potency.value,2)   
    }
    //tirando a porcentagem 
    porcentagem (){
        this.visor.value = this.percentage.value/100;  
    }
}

new Calculadora();


