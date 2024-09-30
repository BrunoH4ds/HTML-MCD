function loadContent(page) {
  const content = document.getElementById('main-content');
  switch(page) {
      case 'home':
          content.innerHTML = `
              <h2>Bem-vindo à Home Page</h2>
              <p>Este é o conteúdo inicial da página.</p>
          `;
          break;
      case 'about':
          content.innerHTML = `
              <h2>Sobre Nós</h2>
              <p>Este é o conteúdo da página Sobre Nós.</p>
          `;
          break;
      case 'contact':
          content.innerHTML = `
              <h2>Contato</h2>
              <p>Entre em contato conosco através deste formulário.</p>
          `;
          break;
      default:
          content.innerHTML = `<p>Página não encontrada</p>`;
  }
}