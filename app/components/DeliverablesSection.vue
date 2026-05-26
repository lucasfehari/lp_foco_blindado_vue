<template>
  <section class="section section-gray">
    <!-- Container principal limitando a largura e centralizando o texto inicialmente -->
    <div class="container text-center">
      <span class="tag">E tem mais!</span>
      <h2>Veja tudo que você vai receber</h2>
      
      <!-- 
        Grid dos Entregáveis: 
        Usamos display Flex (em coluna no celular) para empilhar os itens. 
      -->
      <div class="deliverables-grid">
        <!-- Card 1: Guia 7 Dias -->
        <div class="dlv-card">
          <div class="dlv-vis">
            <img src="/img/livro_foco_blindado.png" alt="Guia dos 7 Dias" class="dlv-img-book" />
          </div>
          <!-- Corpo do texto à direita (no desktop) -->
          <div class="dlv-body">
            <span class="dlv-badge"><img src="/img/emojis/1f4d6.png" class="iphone-emoji-sm" alt="Book"> Guia dos 7 Dias</span>
            <p>Uma prática por dia durante 7 dias. Com espaço para escrever, checklist para riscar e campo de reflexão em cada dia. Use no celular ou imprima. Feito para executar — não para guardar na gaveta.</p>
          </div>
        </div>
        
        <!-- Card 2: Aulas em Vídeo. A classe 'alt' serve para mudar a cor de fundo visualmente. -->
        <div class="dlv-card alt">
          <div class="dlv-vis">
            <img src="" alt="Aulas em Vídeo" class="dlv-img-laptop" />
          </div>
          <div class="dlv-body">
            <span class="dlv-badge"><img src="/img/emojis/1f3ac.png" class="iphone-emoji-sm" alt="Video"> Aulas em Vídeo</span>
            <p>O método completo antes de cada prática. Você assiste para entender o porquê, depois usa o guia para executar. 3 módulos completos: A Raiz do Problema, Dominando Impulsos e Vida Intencional.</p>
          </div>
        </div>
        
        <!-- Bônus 1 -->
        <div class="dlv-card">
          <div class="dlv-vis">
            <img src="/img/iphone_retormar_rotina.png" alt="Bônus 1" class="dlv-img-book" />
          </div>
          <div class="dlv-body">
            <span class="dlv-badge bonus"><img src="/img/emojis/1f381.png" class="iphone-emoji-sm" alt="Gift"> Bônus 1 — Como Retomar a Rotina Após Quebrar</span>
            <p>Quebrou a sequência? Esta aula elimina o padrão "tudo ou nada" e te coloca de volta no trilho sem culpa, sem recomeçar do zero.</p>
          </div>
        </div>
        
        <!-- Bônus 2 -->
        <div class="dlv-card alt">
          <!-- composite-img permite que o celular sobreponha o livro usando absolute -->
          <div class="dlv-vis">
            <div class="composite-img">
              <img src="/img/Gemini_Generated_Image_8gfotr8gfotr8gfo.png" alt="Bônus 2" class="dlv-img-book" />
              <img src="/img/Gemini_Generated_Image_fh2buifh2buifh2b.png" alt="Celular" class="dlv-img-phone" />
            </div>
          </div>
          <div class="dlv-body">
            <span class="dlv-badge bonus"><img src="/img/emojis/1f381.png" class="iphone-emoji-sm" alt="Gift"> Bônus 2 — Rotina Antes de Dormir</span>
            <p>Protocolo noturno em 3 fases para desacelerar a mente, desligar o modo reativo e preparar o dia seguinte antes mesmo de acordar.</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

/* Espaçamento vertical entre cada card de entregável */
.deliverables-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
}

/* Base do Card. No celular fica um embaixo do outro (flex-col) */
.dlv-card {
  background: var(--color-bg-white);
  border-radius: var(--radius-card);
  overflow: hidden; /* Garante que as imagens não fujam das bordas do card */
  border: 1px solid #e8e2d8;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

/* Alternância de cores para não ficar tudo branco */
.dlv-card.alt {
  background-color: var(--color-bg-white);
}

/* Área visual (esquerda no Desktop, topo no Mobile) */
.dlv-vis {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Mantém as imagens 'grudadas' na parte inferior da área visível */
  background: var(--color-bg);
  border-bottom: 1px solid #f0ebe0;
  min-height: 90px;
}

.dlv-card.alt .dlv-vis {
  background: #F4F4F4;
  border-bottom: 1px solid #e8e4da;
}

/* Área de texto (direita no Desktop, baixo no Mobile) */
.dlv-body {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilo do badge/etiqueta superior */
.dlv-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 6px 16px;
  border-radius: var(--radius-btn);
  text-transform: uppercase;
  margin-bottom: 16px;
}

/* Badges de bônus usam a mesma cor, mas podemos inverter para dar destaque */
.dlv-badge.bonus {
  background: var(--color-primary);
  color: var(--color-white);
}

.dlv-body p {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 0;
  max-width: 600px;
}

/* Imagens */
.dlv-img-book {
  width: 170px;
  object-fit: contain;
  margin-bottom: 1,5px;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
}

.dlv-img-laptop {
  width: 240px;
  object-fit: contain;
  margin-bottom: -50px;
}

/* Container para a imagem sobreposta (Bônus 2) */
.composite-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: 300px;
}

/* O celular ganha position: absolute para flutuar acima do livro */
.dlv-img-phone {
  width: 120px;
  position: absolute;
  bottom: -15px;
  right: 10px;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
}

/* RESPONSIVIDADE DESKTOP (> 768px) */
@media (min-width: 768px) {
  /* No PC, o card vira linha (imagem na esquerda, texto na direita) */
  .dlv-card {
    flex-direction: row;
    align-items: stretch;
  }
  .dlv-img-book {
   transform: translateY(90px);
   transform: scale(130%);
}
  /* Pulo do Gato: Inverte a ordem nos cards pares (nth-child(even)) para ficar texto na esquerda e imagem na direita */
  .dlv-card:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  /* Ajuste de tamanhos e bordas para o visual horizontal */
  .dlv-vis {
    width: 45%;
    min-height: auto;
    padding: 30px;
    border-bottom: none;
    border-right: 1px solid #f0ebe0;
  }
  
  .dlv-card:nth-child(even) .dlv-vis {
    border-right: none;
    border-left: 1px solid #e8e4da;
  }
  
  .dlv-body {
    width: 55%;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 40px;
  }
  
  .dlv-body p {
    text-align: left;
  }
}
</style>
