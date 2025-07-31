function saudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const mensagem = document.getElementById('mensagem');
    const imagem = document.getElementById('imagem');
  
    if (hora >= 6 && hora < 12) {
      mensagem.textContent = 'Bom dia!';
      imagem.src = 'manha.jpg';
      imagem.alt = 'Imagem de bom dia';
    } else if (hora >= 12 && hora < 18) {
      mensagem.textContent = 'Boa tarde!';
      imagem.src = 'tarde.jpg';
      imagem.alt = 'Imagem de boa tarde';
    } else {
      mensagem.textContent = 'Boa noite!';
      imagem.src = 'noite.jpg';
      imagem.alt = 'Imagem de boa noite';
    }
  }
  
  window.onload = saudacao;
  