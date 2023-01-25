const form = document.getElementById('novoItem');
const lista = document.querySelector('#lista');


form.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    console.log(evento);
    
    const nome = document.getElementById('nome').value;
    console.log(nome);
    const quantidade = document.getElementById('quantidade').value;
    console.log(quantidade);

    if(nome.value === 0 || quantidade.value === 0) return;

    criaItem(nome,quantidade);

    nome.value = "";
    quantidade .value = "";

})

function criaItem(nome,quantidade){
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    
    numeroItem.innerHTML = quantidade;
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;
    lista.appendChild(novoItem);
    console.log(novoItem);

}

