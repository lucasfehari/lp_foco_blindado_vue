<template>
  <section class="section">
    <div class="container">
      
      <div class="agitation-card">
        <div class="agitation-icon-wrapper">
          <img src="/img/emojis/26a0-fe0f.png" class="iphone-emoji-lg" alt="Alerta" />
        </div>
        <p>Você quer mudar, mas toda vez que tenta, trava. Passa mais uma semana, mais um mês e a vida continua no mesmo lugar.</p>
        <p class="bridge">Mas e se em 7 dias você quebrasse esse ciclo com uma prática simples por dia e finalmente sentisse que está no controle?</p>
      </div>
      
      <div class="benefits-header text-center">
        <span class="tag">Com o Protocolo você vai:</span>
      </div>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon"><img src="/img/emojis/1f9e0.png" class="iphone-emoji-lg" alt="Brain"></div>
          <h4>Identificar o gatilho da sua procrastinação e parar de lutar no escuro</h4>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon"><img src="/img/emojis/1f6e1-fe0f.png" class="iphone-emoji-lg" alt="Shield"></div>
          <h4>Dominar impulsos sem depender de força de vontade</h4>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon"><img src="/img/emojis/23f1-fe0f.png" class="iphone-emoji-lg" alt="Stopwatch"></div>
          <h4>Criar blocos de foco real que você consegue defender</h4>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon"><img src="/img/emojis/2705.png" class="iphone-emoji-lg" alt="Check"></div>
          <h4>Terminar o que começa e respeitar sua própria palavra</h4>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.agitation-card {
  position: relative;
  background-color: var(--color-dark-surface);
  border-radius: var(--radius-card);
  padding: 70px 30px 30px;
  border-bottom: 10px solid var(--color-accent);
  margin-bottom: 50px;
  box-shadow: var(--shadow-md);
  text-align: center;
}

.agitation-icon-wrapper {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-dark-surface);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--color-bg-white);
  box-shadow: var(--shadow-sm);
  z-index: 3;
}

.agitation-card p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  margin-bottom: 16px;
}

.agitation-card .bridge {
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
}

.text-center {
  text-align: center;
  margin-bottom: 30px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.benefit-card {
  background-color: var(--color-bg-white);
  border: 1px solid #e8e2d5;
  border-radius: var(--radius-card);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 16px;
}

.benefit-card h4 {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-primary-dark);
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 640px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
