let amigos = []

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeAmigo); 
        document.querySelector('input').value = '';
    }
}
