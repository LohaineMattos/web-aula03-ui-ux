document.getElementById('cardViewBtn').addEventListener('click', function() {
    // Lógica para exibir os produtos em cards
    document.querySelector('main').classList.add('card-view');
    document.querySelector('main').classList.remove('list-view');
});

document.getElementById('listViewBtn').addEventListener('click', function() {
    // Lógica para exibir os produtos em lista
    document.querySelector('main').classList.add('list-view');
    document.querySelector('main').classList.remove('card-view');
});