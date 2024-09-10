// QUESTÃO 1
/*Explicação:
Função fibonacci: Calcula recursivamente o n-ésimo número da sequência.
Entrada do usuário: O usuário informa o número para o qual deseja calcular o Fibonacci.
Verificação: Compara o número informado com o resultado da função fibonacci para determinar se pertence à sequência.*/

function fibonacci(n) {
  if (n <= 0) {
    return "Posição inválida. A sequência começa em 1.";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const num = parseInt(prompt("Digite um número: "));
const resultado = fibonacci(num);

if (num === resultado) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}



//QUESTÃO 2
/*Explicação:
Função contarAs: Conta o número de ocorrências da letra 'a' (maiúscula ou minúscula) em uma string.
Entrada do usuário: O usuário informa uma string.
Contagem: Converte a string para minúsculas e divide em um array usando 'a' como separador. O comprimento do array menos 1 indica o número de 'a's.*/

function contarAs(texto) {
    return texto.toLowerCase().split('a').length - 1;
  }
  
  const texto = prompt("Digite uma string: ");
  const numAs = contarAs(texto);
  
  console.log(`A letra 'a' aparece ${numAs} vezes na string.`);