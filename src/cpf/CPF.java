/*Uma parte do código já foi disponibilizada junto com a atividade (no arquivo CPF.java) e deve ser aproveitada.

O arquivo CPF.java tem a seguinte estrutura:
1) Solicita que a pessoa informe os 9 primeiros dígitos do CPF e os guarda em uma String.
2) Converte a String informada pela pessoa para um vetor de int.
3) Utiliza o vetor de int para fazer os cálculos e descobrir os dois últimos dígitos.
4) Converte o CPF final de vetor de int para String e o exibe no console.

No código compartilhado, as partes 1, 2 e 4 já foram implementadas e não devem ser alteradas. Você precisa apenas fazer a parte 3.*/
package cpf;

import java.util.Scanner;

public class CPF {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Informe os 9 primeiros dígitos do CPF (apenas números): ");
        String digitos = teclado.next();
        int[] cpf = converterStringParaVetorInt(digitos);
        
        // descobrir os dois últimos dígitos e colocá-los na variável cpf        
           int numero10=0;numero10= digito10(cpf);cpf[9]=numero10;
           int numero11=0;numero11= digito11(cpf);cpf[10]=numero11;
                            
        System.out.println("CPF completo: " + converterVetorIntParaString(cpf));            
    } 
    static int digito10(int cpf[]){ 
        int i=0,L=10,soma=0,d10=0,numero10=0;
        while (i<9){
            soma+=(cpf[i]*L);     
         i++;
         L--;         
        }  d10+=(soma%11);
                numero10=(11-d10);
                    if(numero10>9){
                        numero10=0;
                    }           return numero10;
    }                                 
    static int digito11(int cpf[]){           
        int i=1,M=10,soma=0,d11=0,numero11=0;        
        while (i<=9){
            soma+=(cpf[i]*M);     
         i++;
         M--;         
        }   d11+=(soma%11);
                numero11=(11-d11);
                    if(numero11>9){
                        numero11=0;
                    }           return numero11;   
    }   
    // Esta função converte o CPF (os 9 dígitos informados na entrada) de String para um vetor de int
    // Também insere dois 0 no fim, para completar os 11 dí­gitos de um CPF
    // Ex.: "963852741" vira [9, 6, 3, 8, 5, 2, 7, 4, 1, 0, 0]
    static int[] converterStringParaVetorInt(String cpfString) {
        int[] cpfNumerico = new int[11];
        for (int i = 0; i < cpfString.length(); i++) {
            cpfNumerico[i] = Character.getNumericValue(cpfString.charAt(i));
        } return cpfNumerico;
    }  
    // Esta função converte o CPF de vetor de int (usado nos cálculos) para String
    // Ex.: [9, 6, 3, 8, 5, 2, 7, 4, 1, 2, 8] vira "96385274128"
    static String converterVetorIntParaString(int[] cpfNumerico) {
        String cpfString = "";
        for (int i = 0; i < cpfNumerico.length; i++) {
            cpfString += Integer.toString(cpfNumerico[i]);
        } return cpfString;
    }   
}
