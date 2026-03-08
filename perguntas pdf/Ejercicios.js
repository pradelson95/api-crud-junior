// Qual é o operador lógico usado para verificar a negação de uma expressão? (Nota: 0,2)
// a) &&
// b) ||
// c) !
// d) ==

// Resposta: c) ! (operador de negação)

// EXEMPLO 

let email = "";

// Verificando se o email é vazio usando o operador de negação
if (!email) {
    console.log("O email é vazio.");
} else {
    console.log("O email é: " + email);
}





// Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array? (Nota: 0,2)
// a) push()
// b) pop()
// c) shift()
// d) unshit()

// Resposta: a) push() (método para adicionar um elemento ao final de um array)

// EXEMPLO

let frutas = ["maçã", "banana", "laranja"];

// Adicionando um elemento ao final do array usando push()
frutas.push("uva");
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "uva"]





// 3. O que o método “Array.map()” faz? (Nota: 0,2)
// a) Remove o último elemento de um array.
// b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento.
// c) Filtra os elementos de um array com base em uma função de filtro.
// d) Inverte a ordem dos elementos em um array.

// Resposta: b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento.

// EXEMPLO

let numeros = [1, 2, 3, 4, 5];

// Usando Array.map() para criar um novo array com os quadrados dos números
let quadrados = numeros.map(function(num) {
    return num * num;
});
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]






// Qual é a função do método “Array.filter()”? (Nota: 0,2)
// a) Adicionar elementos ao início do array.
// b) Remover elementos do array com base em uma função de filtro.
// c) Transformar os elementos do array em uma string concatenada.
// d) Ordenar o array em ordem alfabética.

// Resposta: b) Remover elementos do array com base em uma função de filtro.

// EXEMPLO

let numerosMaiores = [177, 232, 32, 400, 500];

// Usando Array.filter() para criar um novo array com os números maiores que 100
let numerosFiltrados = numerosMaiores.filter(function(num) {
    return num > 100;
});
console.log(numerosFiltrados); // Saída: [177, 232, 400, 500]






// O que é async/await em JavaScript? (Nota: 0,2)
// a) Um método para criar funções síncronas em JavaScript.
// b) Uma técnica para manipulação de erros em operações assíncronas.
// c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.
// d) Uma biblioteca JavaScript para criar animações e transições suaves.

// Resposta: c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.

// EXEMPLO  
async function numerosAssincronos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5]);
        }, 2000);
    }); 
}

async function processarNumeros() {
    try {
        const numeros = await numerosAssincronos();
        console.log("Números recebidos:", numeros);
    } catch (error) {
        console.error("Erro ao processar números:", error);
    }
}





// Qual é a sintaxe correta para definir uma função assíncrona chamada "getData"? (Nota: 0,2)
// a) async getData() { return new Promise({}); }
// b) getData() { return new Promise({}); }
// c) async function getData() { return new Promise({}); }
// d) async function getData() => new Promise({});



// Resposta: c) async function getData() { return new Promise({}); }

// EXEMPLO  
async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados recebidos!");
        }, 2000);
    });
}

getData().then((data) => {
    console.log(data); // Saída após 2 segundos: "Dados recebidos!"
}).catch((error) => {
    console.error("Erro ao obter dados:", error);
});





// 7. O que será impresso no código abaixo? (Nota: 0,6)
// let palavra = "ABC";
// switch (palavra)
// ©2023 Jitterbit. jitterbit.com 2

// TESTE TEÓRICO

// {
// case "ACB":
// console.log("C");
// break;
// case "BC":
// case "ABC":
// console.log("A");
// break;
// case "B":
// console.log("Hello");
// break;
// default:
// console.log("Palavra não encontrada");
// break;
// }

// a) C.
// b) A.
// c) Hello.
// d) Palavra não encontrada


// Resposta: b) A. (O switch case verifica o valor da variável "palavra" e executa o bloco de código correspondente. No caso, "palavra" é igual a "ABC", então o case "ABC" é executado, imprimindo "A".)

// EXEMPLO
let palavra = "ABC";
switch (palavra) {
    case "ACB":
        console.log("C");
        break;
    case "BC":
    case "ABC":
        console.log("A");
        break;
    case "B":
        console.log("Hello");
        break;
    default:
        console.log("Palavra não encontrada");
        break;
}





// 8. Escreva uma função em JavaScript chamada “somaImpares” que recebe um número inteiro
// positivo “n” como parâmetro e retorna a soma de todos os números ímpares de 1 até n. (Nota: 0,6)
// Exemplo:
// somaImpares(5); // Saída esperada: 9 (1 + 3 + 5)
// somaImpares(10); // Saída esperada: 25 (1 + 3 + 5 + 7 + 9)

// Resposta:
function somaImpares(lista = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) { // Verifica se o número é ímpar
            soma += lista[i]; // Adiciona o número ímpar à soma
        }
    }
    return soma; // Retorna a soma dos números ímpares
}






// Escreva uma função chamada” inverterPalavra” que recebe uma string como parâmetro e retorna a
// string com as letras invertidas. (Nota: 0,6)
// inverterPalavra("javascript"); // Saída esperada: "tpircsavaj"

// Resposta:
function inverterPalavra(palavra = "javascript") {
    let palavraInvertida = "";  
    for (let i = palavra.length - 1; i >= 0; i--) { // Itera sobre a string de trás para frente
        palavraInvertida += palavra[i]; // Adiciona cada letra à string invertida
    }
     // Retorna a palavra invertida
    return palavraInvertida;
}

console.log(inverterPalavra());





// 11. Como você pode percorrer e mapear um array JSON em JavaScript? Explique como usar métodos
// como "map", "forEach" ou "for...of" para iterar e manipular os elementos do array. (Nota: 0,7)

// Resposta: Para percorrer e mapear um array JSON em JavaScript, você pode usar os métodos "map", "forEach" ou "for...of".

// Exemplo usando "map":
let arrayJson = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];
let nomes = arrayJson.map(function(item) {
    return item.nome; // Retorna o nome de cada objeto no array
});
console.log(nomes); // Saída: ["Alice", "Bob", "Charlie"]


// Exemplo usando "forEach":
let idades = [];
arrayJson.forEach(function(item) {
    idades.push(item.idade); // Adiciona a idade de cada objeto ao array "idades"
});
console.log(idades); // Saída: [30, 25, 35]


// Exemplo usando "for...of":
let nomesEIdades = [];
for (let item of arrayJson) {
    nomesEIdades.push(`${item.nome} tem ${item.idade} anos`); // Adiciona uma string com o nome e idade de cada objeto ao array "nomesEIdades"
}
console.log(nomesEIdades); // Saída: ["Alice tem 30 anos", "Bob tem 25 anos", "Charlie tem 35 anos"]









// 12. O que são variáveis em JavaScript? Explique como declarar e atribuir valores a uma variável. (Nota: 0,7)

// Resposta: Variáveis em JavaScript são contêineres usados para armazenar dados. Elas podem conter diferentes tipos de valores, como números, strings, objetos, etc. Para declarar uma variável, você pode usar as palavras-chave "var", "let" ou "const". Atribuir um valor a uma variável é feito usando o operador de atribuição "=".

// Exemplo de declaração e atribuição de variáveis:
let nome = "Alice"; // Declarando uma variável "nome" e atribuindo o valor "Alice"
const idade = 30; // Declarando uma constante "idade" e atribuindo o valor 30
var cidade = "São Paulo"; // Declarando uma variável "cidade" usando "var" e atribuindo o valor "São Paulo"







// Em JavaScript, é possível ter múltiplas condições em uma estrutura "if/else"? Descreva como usar operadores lógicos (como "&&" e "||") para combinar condições. (Nota: 0,6)

// Resposta: Sim, em JavaScript é possível ter múltiplas condições em uma estrutura "if/else" usando operadores lógicos como "&&" (AND) e "||" (OR). O operador "&&" é usado para combinar condições que devem ser verdadeiras ao mesmo tempo, enquanto o operador "||" é usado para combinar condições onde pelo menos uma deve ser verdadeira.

// Exemplo usando "&&":
let idadePessoa = 25;
let temCarteira = true;

if (idadePessoa >= 18 && temCarteira) {
    console.log("A pessoa pode dirigir.");
} else {
    console.log("A pessoa não pode dirigir.");
}


// Exemplo usando "||":
let diaSemana = "sábado";
let estaChovendo = false;

if (diaSemana === "sábado" || diaSemana === "domingo") {
    console.log("É fim de semana!");
} else if (estaChovendo) {
    console.log("Está chovendo, melhor ficar em casa.");
} else {
    console.log("É um dia útil.");
}





// 14. Descreva a sintaxe do bloco "try" em JavaScript. Dê um exemplo prático de como usar o "try" para envolver um código suscetível a erros. (Nota: 0,7)

// Resposta: O bloco "try" em JavaScript é usado para envolver um código que pode gerar erros. Ele é seguido por um bloco "catch" que captura e lida com o erro, e opcionalmente por um bloco "finally" que executa código independentemente de ter ocorrido um erro ou não. A sintaxe básica é:

function Divisao(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida."); // Lança um erro se b for zero
        }
        return a / b; // Retorna o resultado da divisão
    } catch (error) {
        console.error("Erro ao realizar a divisão:", error.message); // Captura e exibe o erro
    } finally {
        console.log("Operação de divisão concluída."); // Executa independentemente do resultado
    }   
}

console.log(Divisao(10, 2)); // Saída: 5







// 15. Como você pode lançar manualmente uma exceção em JavaScript? Explique o uso da
// palavra-chave "throw" para criar e lançar exceções personalizadas. (Nota: 0,7)

// Resposta: Em JavaScript, você pode lançar manualmente uma exceção usando a palavra-chave "throw". Isso permite criar e lançar exceções personalizadas quando certas condições não são atendidas. Você pode lançar um objeto de erro ou uma string como mensagem de erro.

function validarIdade(idade) {
    if (idade < 18) {
        throw new Error("Idade deve ser maior ou igual a 18."); // Lança uma exceção personalizada se a idade for menor que 18
    }   
    return "Idade válida.";
}

console.log(validarIdade(20)); // Saída: "Idade válida."





// INTEGRAÇÃO DO SISTEMAS

// 1. O que é integração de sistemas? (Nota: 0,2)
// a) É um processo de comunicação entre diferentes sistemas de computador para permitir o compartilhamento
// de dados e funcionalidades.
// b) É um processo de integração de hardware e software em um único sistema de computador.
// c) É um processo de otimização do desempenho de um único sistema de computador.
// d) É um processo de criação de sistemas de computador a partir do zero.


// Resposta: a) É um processo de comunicação entre diferentes sistemas de computador para permitir o compartilhamento de dados e funcionalidades. por exemplo, a integração entre um sistema de gestão e um sistema de e-commerce para sincronizar informações de produtos e estoque.







// 2. O que significa API (Interface de Programação de Aplicativos) em integração de sistemas? (Nota:
// 0,2)
// a) Uma Arquitetura de Programação de Aplicativos que define os padrões de codificação.
// b) Uma linguagem de programação usada para criar aplicativos.
// c) Um conjunto de funções e procedimentos que permitem a comunicação entre sistemas.
// d) Um tipo de sistema de gerenciamento de banco de dados.


// Resposta: c) Um conjunto de funções e procedimentos que permitem a comunicação entre sistemas. por exemplo, uma API RESTful que permite que um aplicativo móvel se comunique com um servidor para obter dados de usuários ou enviar informações, eu sempre acostumo usar no backend.






// 3. O que é um Web Service? (Nota: 0,2)
// a) É um serviço fornecido por uma empresa de hospedagem de sites.
// b) É um serviço web que permite a interação com um banco de dados online.
// c) É uma solução para conectar sistemas diferentes via web, usando padrões como XML e SOAP.

// RESPOSTA: c) nao lembrei a resposta mais simples, pesquisei pela internet e encontrei que É uma solução para conectar sistemas diferentes via web, usando padrões como XML e SOAP. por exemplo, um Web Service que permite que um sistema de pagamento online se integre com um sistema de e-commerce para processar transações de pagamento.








// 4. O que é um token de acesso em integração de sistemas? (Nota: 0,2)

// d) É um serviço que permite a interação com aplicativos móveis.
// 4. O que é um token de acesso em integração de sistemas? (Nota: 0,2)
// a) Um código secreto usado para acessar uma rede privada.
// b) Um arquivo de configuração usado para conectar sistemas diferentes.
// c) Uma chave de autenticação usada para autorizar o acesso a um serviço.
// d) Um identificador único para um arquivo de dados em um sistema.

// Resposta: c) Uma chave de autenticação usada para autorizar o acesso a um serviço. por exemplo, um token de acesso gerado por um serviço de autenticação que permite que um aplicativo acesse uma API protegida para obter dados do usuário ou realizar ações em nome do usuário.









// 5. O que é um "webhook" na integração de sistemas? (Nota: 0,2)
// a) É uma ferramenta usada para rastrear o tráfego da web em sistemas corporativos.
// b) É uma interface gráfica usada para projetar páginas da web.
// c) É uma API que permite a integração de diferentes aplicativos.
// d) É uma URL pública fornecida por um sistema para receber notificações automáticas de outro sistema.

// Resposta: d) É uma URL pública fornecida por um sistema para receber notificações automáticas de outro sistema. por exemplo, um webhook que permite que um sistema de gerenciamento de projetos receba notificações automáticas de um sistema de controle de versão quando um novo commit é feito em um repositório.








// 6. O que é JSON? (Nota: 0,2)
// a) Uma linguagem de programação.
// b) Um protocolo de comunicação entre servidores.
// c) Um formato de dados leve e de fácil leitura usado para trocar informações entre sistemas.
// d) Um método de autenticação e autorização em APIs.

// RESPOTA: c) Um formato de dados leve e de fácil leitura usado para trocar informações entre sistemas. por exemplo, um objeto JSON que representa um usuário com propriedades como "nome", "idade" e "email" que pode ser enviado de um servidor para um cliente em uma aplicação web.








// 7. Qual é o código de status HTTP que indica sucesso na solicitação? (Nota: 0,2)
// a) 200 OK.
// b) 404 Not Found.
// c) 500 Internal Server Error.
// d) 302 Found.

// Resposta: a) 200 OK. (O código de status HTTP 200 indica que a solicitação foi bem-sucedida e que o servidor retornou os dados solicitados ou realizou a ação solicitada com sucesso.) por exemplo, quando um cliente faz uma solicitação GET para um recurso em um servidor e o servidor retorna o recurso com um código de status 200, isso indica que a solicitação foi processada com sucesso e que o recurso foi encontrado e retornado ao cliente.





// 8. O que são headers HTTP? (Nota: 0,2)
// a) Conteúdo HTML dos sites.
// b) Informações adicionais enviadas pelo cliente e servidor em uma solicitação ou resposta HTTP.
// c) Arquivos de configuração do servidor web.
// d) Nomes de domínio registrados.


// Resposta: b) Informações adicionais enviadas pelo cliente e servidor em uma solicitação ou resposta HTTP. por exemplo, os headers HTTP podem incluir informações como "Content-Type" para indicar o tipo de conteúdo sendo enviado, "Authorization" para fornecer credenciais de autenticação, ou "User-Agent" para identificar o cliente que está fazendo a solicitação.







// 9. Quais são os delimitadores usados para marcar tags em XML? (Nota: 0,2)
// a) [ ]
// b) { }
// c) ( )
// d) < ></>

// Resposta: d) nao lembrei a resposta, mas é < ></> (delimitadores usados para marcar tags em XML, onde as tags são usadas para definir elementos e atributos em um documento XML. Por exemplo, uma tag de abertura "<nome>" e uma tag de fechamento "</nome>" podem ser usadas para envolver o conteúdo de um elemento chamado "nome" em um documento XML.)






// 10. Qual é a diferença entre integração de sistemas síncrona e assíncrona? (Nota: 0,2)
// a) Na síncrona, a comunicação ocorre em tempo real com respostas imediatas, enquanto na assíncrona, a
// resposta pode ser recebida em um momento posterior.
// b) A integração síncrona só pode ocorrer entre sistemas da mesma empresa, enquanto a assíncrona permite
// a comunicação entre empresas diferentes.
// c) A integração síncrona ocorre apenas em situações de migração de servidores, enquanto a assíncrona é
// utilizada em situações de integração de dados.
// d) A integração síncrona é mais rápida e eficiente do que a assíncrona.

// Resposta: a) Na síncrona, a comunicação ocorre em tempo real com respostas imediatas, enquanto na assíncrona, a resposta pode ser recebida em um momento posterior. por exemplo, em uma integração síncrona, um sistema pode enviar uma solicitação a outro sistema e esperar pela resposta antes de continuar com o processamento. Já em uma integração assíncrona, o sistema pode enviar a solicitação e continuar com outras tarefas, enquanto aguarda a resposta que pode chegar em um momento posterior.

