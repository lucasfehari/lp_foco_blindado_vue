<template>
  <section class="section section-gray">
    <div class="container text-center">
      <span class="tag">A decisão é sua</span>
      <h2>Agora você tem duas escolhas:</h2>
      
      <div class="choices">
        <div class="ch bad">
          <div class="ch-label"><img src="/img/emojis/274c.png" class="iphone-emoji-sm" alt="Bad"> Opção 1</div>
          <div class="ch-body">
            <h4>Continuar do mesmo jeito</h4>
            <p>Adiando, perdendo dias e prometendo que "semana que vem começa de verdade".</p>
          </div>
        </div>
        
        <div class="ch good">
          <div class="ch-label"><img src="/img/emojis/2705.png" class="iphone-emoji-sm" alt="Good"> Opção 2</div>
          <div class="ch-body">
            <h4>Mudar hoje mesmo</h4>
            <p>Protocolo em mãos, primeira prática hoje em menos de 20 minutos.</p>
          </div>
        </div>
      </div>
      
      <div class="closing">
        <p>Eu sei (e você também sabe): <strong>a opção 2 é a mais inteligente.</strong></p>
        <a href="https://pay.hotmart.com/S105322046I?bid=1780083391008" class="btn">QUERO O PROTOCOLO AGORA</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.choices {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 40px auto;
  max-width: 700px;
}

.ch {
  background: var(--color-bg-white);
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-align: left;
  border: 1px solid #e8e2d5;
}

.ch-label {
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ch.bad .ch-label {
  background-color: #fce8e8;
  color: #cc3030;
  border-bottom: 1px solid #fad2d2;
}

.ch.good .ch-label {
  background-color: var(--color-accent-light);
  color: var(--color-primary-dark);
  border-bottom: 1px solid var(--color-accent);
}

.ch-body {
  padding: 24px;
}

.ch.bad h4 {
  font-size: 16px;
  font-weight: 500;
  color: #cc3030;
  margin-bottom: 10px;
}

.ch.good h4 {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 10px;
}

.ch p {
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
}

.closing {
  margin-top: 40px;
}

.closing p {
  font-size: 18px;
  margin-bottom: 24px;
}

.closing strong {
  color: var(--color-primary-dark);
}

@media (max-width: 640px) {
  .choices {
    grid-template-columns: 1fr;
  }
}
</style>
