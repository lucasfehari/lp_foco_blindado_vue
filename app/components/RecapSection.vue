<template>
  <section class="section">
    <div class="container text-center">
      <span class="tag">Tudo que você recebe</span>
      <h2>Um sistema completo para os próximos 7 dias</h2>
      
      <div class="recap-wrapper">
        <div class="recap-visual">
          <div class="composite-img">
            <img src="/img/produtos_juntos.png" alt="Produtos juntos" class="img_produtos_juntos" />
          </div>
        </div>
        
        <div class="recap-card">
          <div class="ri">
            <span class="ri-name"><span class="ri-ck">✓</span> Guia dos 7 Dias</span>
            <span class="ri-pr">R$97,00</span>
          </div>
          
          <div class="ri">
            <span class="ri-name"><span class="ri-ck">✓</span> Aulas em Vídeo (3 módulos)</span>
            <span class="ri-pr">R$147,00</span>
          </div>
          
          <div class="ri">
            <span class="ri-name"><span class="ri-ck">✓</span> Bônus: Como Retomar Após Quebrar</span>
            <span class="ri-pr">R$47,00</span>
          </div>
          
          <div class="ri">
            <span class="ri-name"><span class="ri-ck">✓</span> Bônus: Rotina Antes de Dormir</span>
            <span class="ri-pr">R$47,00</span>
          </div>
          
          <div class="ri-total">
            <p>Tudo isso deveria custar: <span>R$338,00</span></p>
          </div>
          
          <div class="ri-today">
            <p>Mas hoje você acessa por:</p>
            <div class="price-big">R$67</div>
            <p class="price-sub">ou 8x de R$8,80 · Acesso imediato</p>
          </div>
          
          <a href="https://pay.hotmart.com/S105322046I?bid=1780083391008" class="btn">QUERO O PROTOCOLO AGORA</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.recap-wrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.recap-visual {
  width: 100%;
  max-width: 500px;
}

.composite-img {
  position: relative;
  padding: 0 20px 20px;
}


.comp-phone {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 25%;
  transform: rotate(3deg);
  filter: drop-shadow(0 15px 40px rgba(0,0,0,0.25));
}
.img_produtos_juntos{
 width: 650px;

}

.recap-card {
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-white);
  border: 1px solid #e8e2d5;
  border-radius: var(--radius-card);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  text-align: left;
}

.ri {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0ebe0;
}

.ri-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-muted);
}

.ri-ck {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 800;
}

.ri-pr {
  font-size: 14px;
  color: #ccc;
  text-decoration: line-through;
  font-weight: 500;
}

.ri-total {
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px dashed #e8e2d5;
}

.ri-total p {
  margin: 0;
  font-size: 15px;
}

.ri-total span {
  text-decoration: line-through;
  color: #aaa;
  font-weight: 600;
}

.ri-today {
  padding: 24px 0;
  text-align: center;
}

.ri-today p {
  margin-bottom: 8px;
}

.price-big {
  font-size: 64px;
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.price-sub {
  font-size: 14px;
  color: #888;
  margin-bottom: 24px;
}

@media (min-width: 900px) {
  .recap-wrapper {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 40px;
  }
  
  .recap-visual {
    display: flex;
    align-items: center;
  }
}
</style>
