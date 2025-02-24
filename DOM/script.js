// Seleciona o botão e adiciona um evento de clique
const changeBgButton = document.getElementById('change-bg');
changeBgButton.addEventListener('click', function() {
  document.body.style.backgroundColor = '#f0f8ff'; // Muda a cor de fundo
});

// Adiciona um parágrafo ao clicar no botão
const addParagraphButton = document.getElementById('add-paragraph');
addParagraphButton.addEventListener('click', function() {
  const p = document.createElement('p');
  p.textContent = 'Este é um novo parágrafo adicionado ao DOM.';
  document.body.appendChild(p);
});

// Adiciona uma imagem ao DOM
const addImageButton = document.getElementById('add-image');
addImageButton.addEventListener('click', function() {
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/150';
  img.alt = 'Imagem de exemplo';
  document.body.appendChild(img);
});

// Modifica o texto de um h1 existente
const changeTitleButton = document.getElementById('change-title');
changeTitleButton.addEventListener('click', function() {
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.textContent = 'Título Modificado!';
  }
});

// Remove o último parágrafo adicionado
const removeParagraphButton = document.getElementById('remove-paragraph');
removeParagraphButton.addEventListener('click', function() {
  const paragraphs = document.querySelectorAll('p');
  if (paragraphs.length > 0) {
    paragraphs[paragraphs.length - 1].remove();
  }
});

// Adiciona uma lista ao DOM
const addListButton = document.getElementById('add-list');
addListButton.addEventListener('click', function() {
  const ul = document.createElement('ul');
  const items = ['Item 1', 'Item 2', 'Item 3'];
  items.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
});
