<template>
  <section class="section section-unique text-center">
    <div class="container">
      <span class="tag tag-dark">Acesso Imediato</span>
      <h2>Protocolo Foco Blindado em 7 Dias</h2>
      
      <div class="price-box">
        <p class="old-price">De <span>R$338,00</span></p>
        <div class="price-big">R$67</div>
        <p class="price-sub">ou 8x de R$8,80</p>
        <p class="price-sub">Acesso no e-mail imediatamente</p>
      </div>
      
      <div class="cta-wrapper">
        <a href="https://pay.hotmart.com/S105322046I?bid=1780083391008" class="btn">QUERO O PROTOCOLO AGORA</a>
        
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
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.price-box {
  margin: 40px 0;
}

.old-price {
  font-size: 16px;
  color: var(--color-text-muted);
}

.old-price span {
  text-decoration: line-through;
  color: #a3957a;
  font-weight: 600;
}

.price-big {
  font-size: 72px;
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.price-sub {
  font-size: 16px;
  color: var(--color-text-muted);
  font-weight: 500;
}

.cta-wrapper {
  max-width: 400px;
  margin: 0 auto;
}

.seals {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
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
  color: var(--color-text-muted);
}
</style>
