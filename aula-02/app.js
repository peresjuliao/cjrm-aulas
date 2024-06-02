// Strings
// console.log('hello, world!');
// const email = 'leon@rogermelo.com.br';

// console.log(email);

// concatenação de strings
// const firstName = 'Nathan';
// const lastName = 'Drake';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// acessando caracteres
// console.log(fullName[2]);

// comprimento de uma string
// length é um propriedade que retorna o comprimento de uma string
// console.log(fullName.length);

// métodos de string
// toUpperCase() é um método que retorna a string em letras maiúsculas
// console.log(fullName.toUpperCase());

// toLowerCase() é um método que retorna a string em letras minúsculas
// const result = fullName.toLowerCase();
// console.log(result);

// os métodos toUpperCase() e toLowerCase() não alteram a string original
// console.log(fullName);

// indexOf() é um método que retorna o índice da primeira ocorrência de um caractere ou substring
// const index = email.indexOf('@');
// console.log(index);

// qualquer caractere dentro de aspas simples ou duplas é uma string

// strings tem métodos e propriedades

/* Aula 02-04 */
// métodos comuns de strings
// const email = 'laracroft@rogermelo.com.br'

// lastIndexOf() é um método que retorna o índice da última ocorrência de um caractere ou substring
// const lastIndexOfA = email.lastIndexOf('a');
// console.log(lastIndexOfA);

// slice() é um método que retorna uma parte da string
// const emailSlice = email.slice(0, 9);
// console.log(emailSlice);

// replace() é um método que substitui uma string por outra
// const emailReplace = email.replace('laracroft', 'chun-li');
// console.log(emailReplace, email);

// Aula 02-05
//  Numbers
// inteiros e decimais
// const radius = 10;
// const pi = 3.14;

// operadores aritméticos
// const reminder = 5 % 2; // resto da divisão
// const area = pi * radius ** 2; // fórmula da área de um círculo

// console.log(area);
// // ordem de operações
// const crazyOperation = 5 * (10 - 3) ** 2;

// console.log(crazyOperation);
// Precedência de operadores
// 1º parênteses
// 2º expoentes e radiciação
// 3º multiplicação e divisão
// 4º adição e subtração

// operadores de incremento e decremento
// const likes = 10;
// let postLikes = 10;
// likes = likes + 1; // não é possível reatribuir um valor a uma constante

// postLikes++; // incremento

// console.log(likes);
// console.log(postLikes);

// postLikes--; // decremento
// console.log(postLikes);
// // operadores addition, subtraction, multiplication, division, remainder
// postLikes = postLikes + 10;

// console.log(postLikes);

// postLikes += 10; // adição esse é o operador de atribuição
// console.log(postLikes);

// postLikes -= 10; // subtração esse éo operador de atribuição
// console.log(postLikes);

// postLikes *= 10; // multiplicação esse é o operador de atribuição
// console.log(postLikes);

// postLikes /= 10; // divisão esse é o operador de atribuição
// console.log(postLikes);

// Esse operadores são shorthand assignment operators

// NaN - nota number
// console.log(7 / 'oi'); // NaN significa que a operação não é um número

// concatenação de strings com números
// const likesMessage = 'O post tem ' + postLikes + ' likes.';
// console.log(likesMessage);

// Template strings
// Template strings são strings que permitem expressões embutidas
const postTitle = 'É bolacha ou biscoito?';
const postAuthor = 'Matheus Saad';
const postComments = 15;

// usando concatenação
const postMessage = 'O post "' + postTitle + '" do ' + postAuthor + ', tem ' + postComments + ' comentários.';
console.log('Usando concatenação:');
console.log(postMessage);
// Um dos grandes problemas de usar concatenação é que o código fica difícil de ler
// Para apresentar aspas simples dentro de uma string, use aspas duplas. Se não use aspas simples. Isso pode ser feito ao contrário também. Esse é o grande problema de usar concatenação.

// usando template strings
const postMessageTemplate = `O post "${postTitle}" do ${postAuthor}, tem ${postComments} comentários.`;
console.log('Usando template strings:');
console.log(postMessageTemplate);
// criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`;
console.log('Usando template strings para criar templates HTML:');
console.log(html);