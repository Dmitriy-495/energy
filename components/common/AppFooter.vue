<!-- components/common/AppFooter.vue -->
<template>
  <div>
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2">
              <div class="flex flex-col ps-2">
                <span class="font-bold text-gray-200 text-2xl tracking-wider"
                  >ЭНЕРГИЯ</span
                >
                <span class="font-semibold text-gray-200 text-xs">
                  СЕРВИСНАЯ КОМПАНИЯ
                </span>
              </div>
            </div>
            <p class="text-gray-400 pt-4 pe-4">
              Надежные приборы учета энергоресурсов для дома и бизнеса
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Услуги</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Счетчики тепла</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Электросчетчики</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Газовые счетчики</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Водосчетчики</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Информация</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >О компании</a
                >
              </li>
              <li>
                <a href="#news" class="hover:text-white transition-colors"
                  >Новости</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors"
                  >Статьи</a
                >
              </li>
              <li>
                <a href="#contact" class="hover:text-white transition-colors"
                  >Контакты</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Контакты</h4>
            <div class="space-y-2 text-gray-400">
              <p>+7 (929) 530-10-77</p>
              <p>info@services-energy.ru</p>
              <p>г. Москва, Можайское ш., 118</p>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>© 2025 ООО "СК Энергия". Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
