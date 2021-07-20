function calcular() {
    debugger;
    var v1 = document.getElementById ("valor1").value;
    var v2 = document.getElementById ("valor2").value;
    var oper = document.getElementById ("oper").value;
 
    if (oper == "soma") {
       var res = parseInt(v1) + parseInt(v2);
    } else if (oper == "sub") {
          var res = v1-v2;
       } else if (oper == "multi") {
             var res = v1*v2;
          } else {
             var res = v1/v2;
          }
 
    document.getElementById("res").value = res;
 }

document.getElementById("btncheck1").addEventListener("click",() =>calcular()); 


 