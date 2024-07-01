let listaDeItens = [];

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const ulItens = document.getElementById('lista-de-itens');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    salvarItem();
    mostrarItem();
});

function salvarItem() {
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => {
       return elemento.valor.toUpperCase() === comprasItem.toUpperCase();
    });

    if (checarDuplicado) {
        alert("Item já existe");
    } else {
        listaDeItens.push({
            valor: comprasItem
        });
    }

    console.log(listaDeItens);
}

function mostrarItem() {
    ulItens.innerHTML = '';

    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
           <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}"></input>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li> 
        `;
    });

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            console.log('Fui clicado!');
        })
    })
}
