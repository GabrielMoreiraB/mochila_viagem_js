const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');
const item = lista.querySelector('.item');

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
    const novoItem = item.cloneNode(true);
    novoItem.querySelector('li').value = nome;
    novoItem.querySelector('strong').value = quantidade;

}

