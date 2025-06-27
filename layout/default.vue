<!-- layouts/default.vue -->
<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { CommonAppFooter } from "#components";

// Можно добавить здесь скрипты, если они нужны для всего лейаута
</script>

<style>
/* Перенос стилей из html, которые не являются компонентами */
.work-sans {
  font-family: "Open Sans", sans-serif;
}

.nav-link {
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 50%;
  background-color: #ea580c;
  transition: all 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.card {
  transition: all 0.3s ease-out;
  border: 2px solid transparent;
}

.card:hover {
  border-color: #ea580c;
  transform: translateY(-8px);
}

/* Добавьте стили для карусели, если они не будут в компоненте Carousel.vue */
.carousel-dot {
  transition: all 0.3s ease;
}
.carousel-dot:hover {
  background-color: white !important; /* Переопределить для ховера */
}
.carousel-dot.active {
  background-color: white !important; /* Для активной точки */
}
</style>
