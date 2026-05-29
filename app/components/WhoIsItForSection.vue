<template>
  <section class="section section-dark">
    <div class="container text-center">
      <span class="tag tag-dark">Para quem é</span>
      <h2>O Protocolo Foco Blindado é para você que:</h2>
      
      <ul class="forlist">
        <li>
          <div class="ck">✓</div>
          <span>Começa mas não termina o que planeja</span>
        </li>
        <li>
          <div class="ck">✓</div>
          <span>Sente que o celular e as distrações são mais fortes que você</span>
        </li>
        <li>
          <div class="ck">✓</div>
          <span>Já tentou organizar a rotina e não durou mais de uma semana</span>
        </li>
        <li>
          <div class="ck">✓</div>
          <span>Quer clareza e controle, e não mais um método motivacional</span>
        </li>
        <li>
          <div class="ck">✓</div>
          <span>Está cansado de prometer para si mesmo e não cumprir</span>
        </li>
      </ul>
      
      <p class="closing">Se você se identificou com qualquer um desses pontos, o Protocolo é <strong>exatamente para você.</strong></p>
    </div>
  </section>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.forlist {
  list-style: none;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  text-align: left;
}

.forlist li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--color-accent);
  transition: background 0.3s ease;
}

.forlist li:hover {
  background: rgba(255, 255, 255, 0.08);
}

.ck {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 900;
}

.forlist li span {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.closing {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 30px;
}

.closing strong {
  color: var(--color-primary-light);
}

.ck-dark {
  background: var(--color-white);
  color: var(--color-primary-dark);
}

.ck-dark + p {
  color: var(--color-white);
}
</style>
