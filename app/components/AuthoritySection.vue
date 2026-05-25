<template>
  <section class="section section-dark">
    <div class="container text-center">
      <span class="tag tag-dark">Quem criou</span>
      
      <div class="authority-content">
        <div class="auth-photo">
          <img src="/img/14834143637404656196.jpg.jpeg" alt="Djeison Staudt" />
        </div>
        
        <div class="auth-text">
          <h2 class="auth-name">Djeison Staudt</h2>
          <p class="auth-title">Criador do Protocolo Foco Blindado</p>
          
          <div class="auth-desc">
            <p>Empresário há 6 anos, pratico 10 treinos por semana, sigo plano alimentar, gerencio Airbnb, em paralelo crio conteúdo e ainda tenho tempo para família. Vivo na pele o que ensino.</p>
            <p>Criei o Protocolo Foco Blindado a partir do que vivo na prática. Não é teoria motivacional, é o método que uso para defender minha linha todo dia, mesmo quando o caos aparece.</p>
            <p>Minha missão: mostrar que qualquer homem pode quebrar ciclos de procrastinação e construir uma vida com mais foco, consistência e resultado real.</p>
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

.authority-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 800px;
  margin: 40px auto 0;
}

.auth-photo {
  width: 100%;
  max-width: 400px;
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.auth-photo img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.auth-text {
  text-align: left;
}

.auth-name {
  font-size: 32px;
  font-weight: 500;
  color: var(--color-white);
  margin-bottom: 4px;
}

.auth-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.auth-role {
  font-size: 16px;
  color: var(--color-primary-light);
  font-weight: 500;
  margin-bottom: 24px;
}

.auth-desc p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 16px;
}

@media (min-width: 768px) {
  .authority-content {
    flex-direction: row;
    align-items: center;
  }
  
  .auth-photo {
    flex: 1;
  }
  
  .auth-text {
    flex: 1.2;
  }
}
</style>
