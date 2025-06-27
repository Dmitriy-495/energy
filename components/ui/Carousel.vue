<!-- components/ui/Carousel.vue -->
<template>
  <div
    class="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
  >
    <div
      id="carousel"
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide 1 -->
      <div class="w-full flex-shrink-0 py-16 px-4">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Современные приборы учета энергоресурсов
            </h1>
            <p class="text-xl mb-6 opacity-90">
              Точность измерений, надежность работы и экономия ваших ресурсов
            </p>
            <button
              class="bg-gray-900 hover:bg-orange-500 transition-colors active:bg-orange-600 text-white px-6 py-2 rounded-l"
            >
              Узнать больше
            </button>
          </div>
          <div class="md:w-1/2 md:pl-8">
            <div
              class="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <span class="text-6xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="w-full flex-shrink-0 py-16 px-4">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Профессиональная установка и обслуживание
            </h1>
            <p class="text-xl mb-6 opacity-90">
              Квалифицированные специалисты и гарантия качества работ
            </p>
            <button
              class="bg-gray-900 hover:bg-orange-500 transition-colors active:bg-orange-600 text-white px-6 py-2 rounded-l"
            >
              Заказать услугу
            </button>
          </div>
          <div class="md:w-1/2 md:pl-8">
            <div
              class="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <span class="text-6xl">⚙️</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="w-full flex-shrink-0 py-16 px-4">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Экономьте до 30% на коммунальных платежах
            </h1>
            <p class="text-xl mb-6 opacity-90">
              Точный учет потребления позволит оптимизировать расходы
            </p>
            <button
              class="bg-gray-900 hover:bg-orange-500 transition-colors active:bg-orange-600 text-white px-6 py-2 rounded-l"
            >
              Рассчитать экономию
            </button>
          </div>
          <div class="md:w-1/2 md:pl-8">
            <div
              class="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center"
            >
              <span class="text-6xl">💰</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel navigation -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(slide, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full carousel-dot',
          currentSlide === index ? 'bg-white' : 'bg-white/50',
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
const totalSlides = 3;
let intervalId = null;

const goToSlide = (slideIndex) => {
  currentSlide.value = slideIndex;
};

// Auto-advance carousel
onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Стили для карусели, если они специфичны для этого компонента */
/* Использование scoped стилей гарантирует, что они не повлияют на другие компоненты */
</style>
