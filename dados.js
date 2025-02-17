document.addEventListener('DOMContentLoaded', () => {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('product-container');
            data.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.imagem}" alt="${product.nome}">
                    <h2>${product.nome}</h2>
                    <p>Preço: R$${product.preco}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});