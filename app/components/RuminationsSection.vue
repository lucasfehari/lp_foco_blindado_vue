<template>
  <!-- 
    A tag <section> com a classe 'section-dark' aplica o fundo escuro definido no main.css.
    Utilizamos 'py-16' (padding) para dar respiro vertical.
  -->
  <section class="section section-dark">
    <!-- 'container' centraliza o conteúdo na tela com uma largura máxima -->
    <div class="container">
      <div class="text-center">
        <!-- Tag de destaque para chamar a atenção -->
        <span class="tag tag-dark">Fala a verdade...</span>
        <h2>Você já tentou mudar a rotina, mas trava sempre no começo</h2>
        <p class="subtitle">Toda vez que você decide agir, você pensa:</p>
      </div>
      
      <!-- 
        Aqui removemos a diagramação de chat. 
        Usamos CSS Grid (rumination-grid) para distribuir as frases em cards simples e limpos. 
      -->
      <div class="rumination-grid">
        <div class="r-card">
          <p>"Tenho motivação mas não consigo manter por mais de 2 semanas"</p>
        </div>
        
        <div class="r-card">
          <p>"Se falho um dia, já falho nos outros também. Já foi."</p>
        </div>
        
        <div class="r-card">
          <p>"Pego o celular sem perceber e passa uma hora"</p>
        </div>
        
        <div class="r-card">
          <p>"Passei o dia todo ocupado e não avancei em nada que importa"</p>
        </div>
        
        <div class="r-card">
          <p>"Tinha me programado para estudar 3 horas, veio um imprevisto, não faço nada."</p>
        </div>
        
        <div class="r-card">
          <p>"Sou disciplinado no trabalho mas nas outras áreas não consigo"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Centraliza o texto do cabeçalho da seção */
.text-center {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85); /* Branco com 85% de opacidade para não ficar tão forte */
}

/* 
  Utilizamos CSS Grid para alinhar os elementos lado a lado (2 colunas).
  O 'gap' adiciona o espaçamento entre as colunas e as linhas.
*/
.rumination-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Cria 2 colunas de tamanhos iguais */
  gap: 20px; /* Espaço de 20px entre os cards */
  max-width: 800px; /* Limita a largura para os cards não ficarem muito esticados */
  margin: 0 auto; /* Centraliza a grid horizontalmente */
}

/* 
  Estilo do card. Fundo levemente transparente (efeito glass/clean) 
  com bordas sutis, fugindo do design de 'chat'
*/
.r-card {
  background-color: rgba(255, 255, 255, 0.05); /* Fundo quase transparente */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borda bem fina e sutil */
  border-radius: 12px; /* Cantos arredondados */
  padding: 24px; /* Espaçamento interno */
  display: flex; /* Flexbox para centralizar o texto internamente */
  align-items: center; /* Centraliza no eixo vertical */
  justify-content: center; /* Centraliza no eixo horizontal */
  text-align: center;
}

.r-card p {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  font-style: italic; /* Dá uma cara de 'pensamento' ou 'citação' */
}

/* Responsividade: em telas menores (celulares), a grid passa a ter apenas 1 coluna */
@media (max-width: 768px) {
  .rumination-grid {
    grid-template-columns: 1fr; /* 1 coluna ocupando todo o espaço */
  }
}
</style>
