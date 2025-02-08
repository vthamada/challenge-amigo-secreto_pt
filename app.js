let amigos = []

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo); 
        document.querySelector('input').value = '';
        atualizarListaAmigos();
    }
}
function atualizarListaAmigos(){
    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}