// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementById('lista-desenhos');
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement("li");
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

//Função para adicionar um novo desenho
document.getElementById("btnAdicionar").addEventListener("click", function () {
    const novoDesenho = document.getElementById('novo-desenho').value;
    if (novoDesenho.trim() !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Substitui o elemento no índice atual
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista(); // Atualiza a exibição da lista
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    } else {
        document.getElementById("paragrafoMensagem").textContent = "Nada foi digitado!"
    }
});

// Exibe a lista inicial quando a página carrega
window.onload;