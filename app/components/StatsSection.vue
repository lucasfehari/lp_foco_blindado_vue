<template>
  <section class="section">
    <div class="container text-center">
      <span class="tag tag-dark">A escala do problema</span>
      <h2>Por que isso acontece com tanta gente?</h2>
      <p class="subtitle">Os dados mostram que você não está sozinho — e que o problema é maior do que parece.</p>
      
      <!-- 
        Grid de Estatísticas:
        'stats-grid' divide os 4 itens em 2 colunas usando CSS Grid.
      -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-num">97,4%</span>
          <p class="stat-desc">dos brasileiros procrastinam todos os dias</p>
        </div>
        
        <div class="stat-card">
          <span class="stat-num">3h32</span>
          <p class="stat-desc">por dia em redes sociais — Brasil em 1º lugar no mundo</p>
        </div>
        
        <!-- 
          'accent-card' é uma classe extra para destacar este card em específico,
          invertendo as cores (fundo escuro, texto claro).
        -->
        <div class="stat-card accent-card">
          <span class="stat-num">+67%</span>
          <p class="stat-desc">de afastamentos por ansiedade em 2024 — novo recorde</p>
        </div>
        
        <div class="stat-card">
          <span class="stat-num">38,4%</span>
          <p class="stat-desc">têm eliminar a procrastinação como meta para 2025</p>
        </div>
      </div>
      
      <p class="footer-note">Fontes: pesquisas nacionais 2024–2025</p>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
  font-weight: 200;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 40px;
}

/* 
  Definição do Grid: 
  'grid-template-columns: repeat(2, 1fr)' significa que teremos 2 colunas 
  ocupando o mesmo tamanho (1 fraction cada).
*/
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

/* Estilização padrão de cada card de dado */
.stat-card {
  background: var(--color-bg-white);
  border: 1px solid #e8e2d8;
  border-radius: var(--radius-card);
  padding: 32px 24px;
  box-shadow: var(--shadow-sm);
  /* 'transition' suaviza a animação de hover */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efeito Hover: quando o mouse passa por cima, o card 'levanta' um pouco */
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.stat-num {
  display: block;
  font-size: clamp(36px, 6vw, 48px);
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}

.stat-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
}

/* Regras específicas para o card de destaque */
.accent-card {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.accent-card .stat-num {
  color: var(--color-white);
}

.accent-card .stat-desc {
  color: rgba(255, 255, 255, 0.9);
}

.footer-note {
  font-size: 12px;
  color: #aaa;
  font-style: italic;
}

/* Para celulares: Quebramos o Grid para 1 coluna apenas ('1fr') */
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
