<template>
  <section class="section">
    <div class="container">
      <div class="text-center">
        <span class="tag">Simples assim</span>
        <h2>Compre agora e receba acesso imediatamente no e-mail</h2>
      </div>
      
      <div class="steps">
        <div class="step">
          <div class="step-n">1</div>
          <div class="step-t">
            <h4>Clique no botão e finalize a compra</h4>
            <p>Checkout seguro, menos de 2 minutos</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-n">2</div>
          <div class="step-t">
            <h4>Acesse seu e-mail</h4>
            <p>Você recebe o link de acesso imediatamente após a compra</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step-n">3</div>
          <div class="step-t">
            <h4>Comece hoje mesmo</h4>
            <p>A prática do Dia 1 leva menos de 10 minutos</p>
          </div>
        </div>
      </div>
      
      <div class="faq-container">
        <div class="text-center">
          <span class="tag">Dúvidas</span>
          <h2>Perguntas Frequentes</h2>
        </div>
        
        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-q">
              1. Funciona para quem já tentou outros métodos?
              <span class="faq-arr">▼</span>
            </summary>
            <p class="faq-a">Sim. O Protocolo não é apenas mais um conteúdo motivacional. Ele é um método prático baseado em como o impulso funciona no corpo e na mente. Você vai entender o que vem antes da procrastinação, e isso muda tudo.</p>
          </details>
          
          <details class="faq-item">
            <summary class="faq-q">
              2. Quanto tempo por dia preciso dedicar?
              <span class="faq-arr">▼</span>
            </summary>
            <p class="faq-a">Cada prática leva entre 10 e 20 minutos. O protocolo é feito para caber na rotina real, sem criar mais uma tarefa impossível.</p>
          </details>
          
          <details class="faq-item">
            <summary class="faq-q">
              3. Como vou acessar o material?
              <span class="faq-arr">▼</span>
            </summary>
            <p class="faq-a">Imediatamente após a compra você recebe um e-mail com o link de acesso. Disponível pelo celular ou computador.</p>
          </details>
          
          <details class="faq-item">
            <summary class="faq-q">
              4. E se eu quebrar a sequência no meio?
              <span class="faq-arr">▼</span>
            </summary>
            <p class="faq-a">É exatamente para isso que existe o Bônus 1. O método te ensina que quebrar é normal. O que importa é o que você faz depois.</p>
          </details>
          
          <details class="faq-item">
            <summary class="faq-q">
              5. Tem garantia?
              <span class="faq-arr">▼</span>
            </summary>
            <p class="faq-a">Sim. Se você aplicar o protocolo e não ver resultado, entre em contato e tratamos caso a caso. Não queremos o seu dinheiro se o método não funcionar para você.</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 40px auto;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--color-bg-white);
  padding: 24px;
  border-radius: var(--radius-card);
  border: 1px solid #e8e2d5;
  box-shadow: var(--shadow-sm);
}

.step-n {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg-white);
  font-weight: 900;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-t h4 {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.step-t p {
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0;
}

.faq-container {
  margin-top: 80px;
}

.faq-list {
  max-width: 700px;
  margin: 40px auto 0;
}

.faq-item {
  border-bottom: 1px solid #ededec;
  padding: 20px 0;
}

.faq-q {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary-dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  user-select: none;
  list-style: none; /* Hide default arrow in webkit */
}

.faq-q::-webkit-details-marker {
  display: none;
}

.faq-arr {
  font-size: 12px;
  color: #bbb;
  transition: transform 0.3s;
  flex-shrink: 0;
}

details[open] .faq-arr {
  transform: rotate(180deg);
}

.faq-a {
  font-size: 15px;
  color: var(--color-text-muted);
  margin-top: 16px;
  line-height: 1.7;
}

@media (min-width: 768px) {
  .steps {
    flex-direction: row;
    max-width: 100%;
  }
  
  .step {
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
