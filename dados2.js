document.addEventListener('DOMContentLoaded', function() {
    fetch('dados2.json')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            data.forEach(produto => {
                const li = document.createElement('li');
                li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
                productContainer.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});