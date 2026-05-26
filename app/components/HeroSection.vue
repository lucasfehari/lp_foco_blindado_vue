<template>
  <!-- 
    Hero Section: A primeira dobra do site. 
    Usamos a classe 'hero' para gerenciar o padding e a cor de fundo, 
    e 'animate-fade-in' (definida no main.css) para dar o efeito de entrada.
  -->
  <section class="hero animate-fade-in">
    <!-- 'text-center' foi criado no estilo global (ou escopado) para alinhar todo o texto e usar Flexbox em coluna -->
    <div class="container text-center">
    
      <!-- Headline forte: clamp() permite que o texto seja responsivo dependendo do tamanho da tela -->
      <h1>Pare de perder dias inteiros e <span class="text-gray">vença a procrastinação em 7 dias</span> com uma prática por dia</h1>
      <p class="hero-sub">Sem motivação forçada. Sem técnicas mirabolantes. Só o que funciona na prática.</p>
      
       <div class="reference-badge">
  <div class="badge-icon-wrapper">
    <!-- Se estiver usando imagem para o emoji do iPhone -->
    <img src="/img/emoji_check.png" alt="Check" class="badge-emoji" />
    
    <!-- Ou usando o emoji de texto comum: -->
    <!-- <span class="badge-emoji">✅</span> -->
  </div>
  <span class="badge-text">Resultados em 7 dias</span>
</div>
        
        
        <!-- Os selos usam Flexbox ('display: flex') e 'flex-wrap' para quebrarem de linha se a tela for muito pequena -->
        <div class="seals">
          <span class="seal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Compra Segura
          </span>
          <span class="seal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Privacidade Protegida
          </span>
          <span class="seal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Satisfação Garantida
          </span>
        </div>
      </div>
    
    <!-- 
      Seção visual dos Mockups:
      Usamos uma div com 'position: relative' para permitir a sobreposição das imagens (z-index e margens negativas).
    -->
    <div class="container mockup-container">
      <div class="mockup-wrapper">
        <img src="/img/iphone.png" alt="Celular Checklist" class="phone-mockup" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Espaçamento interno da primeira dobra */
.hero {
  padding: 60px 0 20px;
  background-color: var(--color-bg);
}

/* Flexbox em formato de coluna, garantindo que o texto e o botão fiquem centralizados verticalmente */
.text-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 
  'clamp' é uma função incrível: define (Mínimo, Ideal (ex: 6% da largura), Máximo).
  Isso faz a fonte crescer ou diminuir suavemente de acordo com a tela do celular/PC. 
*/
h1 {
  font-size: clamp(40px, 10vw, 52px);
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 20px;
  max-width: 800px;
}

.text-gray {
  color: var(--color-text-muted);
}

.hero-sub {
  font-size: 24px;
  color: var(--color-text-light);
  margin-bottom: 32px;
  max-width: 600px;
  line-height: 26px;
}

.cta-wrapper {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Flexbox para os selos ficarem lado a lado (em linha). 'justify-content: center' alinha ao meio */
.seals {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Se a tela encolher, eles pulam para a próxima linha */
  gap: 16px;
  margin-top: 16px;
}

.seal {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #888;
  font-weight: 500;
}

.seal svg {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

.mockup-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

/* Wrapper principal dos mockups com 'relative' para o posicionamento do celular poder sobrepor o livro */
.mockup-wrapper {
  position: relative;
  max-width: max-content;
  width: 1420px;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinha o livro e o celular pela base inferior */
}


/* Celular: Fica na frente (z-index 2) e usa margin-left negativa para "entrar" na área do livro */
.phone-mockup {
  width: 400%;
  object-fit: contain;
  z-index: 2;/* Faz a sobreposição visual */
  margin-bottom: -20px;
  filter: drop-shadow(0 16px 48px rgba(0,0,0,0.25));
  margin-right: -7%;
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .mockup-wrapper {
    flex-direction: column; /* Coloca um em cima do outro */
    align-items: center; /* Centraliza os dois */
  }
  
  .book-mockup {
    width: 80%; /* Aumenta a proporção no celular */
  }
  
  .phone-mockup {
    width: 100%;
    margin-left: 0; /* Remove a sobreposição horizontal */
    margin-top: -30px; /* Adiciona sobreposição vertical */
  }
}

/* Container principal em formato de pílula */
.reference-badge {
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e7eb; /* Borda cinza bem sutil */
  border-radius: 100px;      /* Formato arredondado de pílula */
  padding: 14px 48px 14px 14px; /* Menos padding na esquerda para abraçar o círculo */
  gap: 12px;                 /* Espaço entre o círculo cinza e o texto */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); /* Sombra bem leve */
  margin-bottom: 24px;       /* Espaçamento inferior */
}

/* Círculo cinza que envolve o emoji */


/* Ajuste do tamanho do emoji */
.badge-emoji {
  width: 50px;
  height: 50px;
  font-size: 50px; /* Caso use emoji em formato de caractere texto */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilização do texto */
.badge-text {
  font-family: 'Schibsted Grotesk', sans-serif; /* Ou sua fonte padrão */
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  letter-spacing: -0.01em;
}
</style>
