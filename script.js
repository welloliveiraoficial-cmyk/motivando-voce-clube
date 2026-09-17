/* =========================================================
   MOTIVANDO VOCÊ CLUBE — LÓGICA GERAL
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  iniciarTelaAbertura();
});

/**
 * Controla a animação da barra de carregamento na tela de abertura
 * e prepara a transição para a próxima tela (login), que será
 * implementada na próxima fase do projeto.
 */
function iniciarTelaAbertura() {
  var barra = document.getElementById('barra-carregamento');

  if (!barra) return;

  // Anima a barra de carregamento suavemente até 100%
  requestAnimationFrame(function () {
    barra.style.transition = 'width 2.4s ease-in-out';
    barra.style.width = '100%';
  });

  // Quando o carregamento terminar, o app seguirá para a tela de login.
  // Por enquanto, apenas registramos o fim do carregamento no console.
  setTimeout(function () {
    console.log('Carregamento concluído. Próxima etapa: tela de login.');
    // Exemplo de como a transição será feita futuramente:
    // trocarTela('tela-abertura', 'tela-login');
  }, 2800);
}

/**
 * Função utilitária para trocar de tela — será usada
 * conforme novas telas forem adicionadas (login, início, etc.).
 */
function trocarTela(idAtual, idProxima) {
  var atual = document.getElementById(idAtual);
  var proxima = document.getElementById(idProxima);

  if (atual) atual.classList.remove('tela-ativa');
  if (proxima) proxima.classList.add('tela-ativa');
}
