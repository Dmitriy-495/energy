<!-- components/common/AppHeader.vue -->
<template>
  <header class="bg-white shadow-lg">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <a
            class="flex items-center tracking-wide no-underline hover:no-underline"
            href="#"
          >
            <div class="flex flex-col ps-2">
              <span class="font-bold text-gray-950 text-2xl tracking-wider"
                >ЭНЕРГИЯ</span
              >
              <span class="font-semibold text-gray-950 text-xs">
                СЕРВИСНАЯ КОМПАНИЯ
              </span>
            </div>
          </a>
        </div>

        <ul class="hidden md:flex space-x-8">
          <li>
            <a href="#home" class="nav-link text-gray-800">Главная</a>
          </li>
          <li>
            <a href="#services" class="nav-link text-gray-700">Услуги</a>
          </li>
          <li>
            <a href="#" class="nav-link text-gray-700">О нас</a>
          </li>
          <li>
            <a href="#news" class="nav-link text-gray-700">Новости</a>
          </li>
          <li>
            <a href="#contact" class="nav-link text-gray-700">Контакты</a>
          </li>
        </ul>

        <button
          class="bg-gray-900 hover:bg-orange-500 transition-colors active:bg-orange-600 text-white px-6 py-2 rounded-lg"
        >
          Заказать звонок
        </button>

        <!-- Mobile menu button -->
        <button
          class="md:hidden text-gray-900 hover:text-orange-500"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div id="mobileMenu" class="hidden md:hidden mt-4 pb-4">
        <ul class="space-y-2">
          <li>
            <a
              href="#home"
              class="block text-gray-700 hover:text-orange-500 py-2"
              >Главная</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block text-gray-700 hover:text-orange-500 py-2"
              >Услуги</a
            >
          </li>
          <li>
            <a href="#" class="block text-gray-700 hover:text-orange-500 py-2"
              >О нас</a
            >
          </li>
          <li>
            <a
              href="#news"
              class="block text-gray-700 hover:text-orange-500 py-2"
              >Новости</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block text-gray-700 hover:text-orange-500 py-2"
              >Контакты</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Carousel Component -->
    <Carousel />
  </header>
</template>

<script setup>
const toggleMobileMenu = () => {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
};

// Если вам нужно передать какие-то пропсы карусели, это можно сделать здесь
</script>
