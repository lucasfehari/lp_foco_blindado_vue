<template>
  <div>
    <header class="header">
      <div class="header-inner container">
       <img src="/img/logo_foco_blindado.png" alt="Logo" class="logo_foco_blindado">
      </div>
    </header>
    
    <div class="attention-bar">
      <p>Você está travado pela procrastinação e não consegue manter o foco por mais de alguns dias?</p>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(8px);
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

.logo_foco_blindado {
  width: 100%;
  max-width: 180px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.header-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary-dark);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.dot {
  width: 5px;
  height: 5px;
  background-color: var(--color-accent);
  border-radius: 50%;
  display: inline-block;
}

.header-sub {
  font-size: 12px;
  color: #000000ff;
  font-weight: 500;
}

.attention-bar {
  background: linear-gradient(to right, #0072ff , #002271ff);
  padding: 12px 20px;
  text-align: center;
}

.attention-bar p {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.01em;
}
</style>
