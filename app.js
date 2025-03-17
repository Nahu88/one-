let amigos = [];

function agregarAmigo() {

    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim(); 


    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }


    amigos.push(nombre);


    input.value = '';


    mostrarListaAmigos();
}


function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');


    lista.innerHTML = '';


    for (let amigo of amigos) {

        const li = document.createElement('li');
        li.textContent = amigo;


        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultadoSorteo');
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

