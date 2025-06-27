<!-- pages/index.vue -->
<template>
  <div>
    <AppHeader />
    <section id="services" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Наши услуги
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" id="servicesGrid">
          <ServiceCard
            icon="🔥"
            title="Тепловая энергия"
            description="Установка и обслуживание счетчиков тепла для квартир и промышленных объектов"
            :delay="100"
          />
          <ServiceCard
            icon="⚡"
            title="Электроэнергия"
            description="Электросчетчики различных типов с возможностью дистанционного снятия показаний"
            :delay="200"
          />
          <ServiceCard
            icon="🔧"
            title="Газ"
            description="Газовые счетчики для бытового и промышленного использования с гарантией безопасности"
            :delay="300"
          />
          <ServiceCard
            icon="💧"
            title="Вода"
            description="Водосчетчики горячей и холодной воды с длительным сроком службы"
            :delay="400"
          />
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Наши преимущества
        </h2>
        <div class="grid md:grid-cols-3 gap-8" id="advantagesGrid">
          <AdvantageCard
            icon="✓"
            title="Сертифицированное оборудование"
            description="Все приборы учета имеют необходимые сертификаты и соответствуют государственным стандартам"
            :delay="800"
          />
          <AdvantageCard
            icon="🏆"
            title="Опыт более 10 лет"
            description="Наша команда имеет богатый опыт в установке и обслуживании приборов учета различных типов"
            :delay="500"
          />
          <AdvantageCard
            icon="🔧"
            title="Полный цикл услуг"
            description="От консультации и подбора оборудования до установки, настройки и последующего обслуживания"
            :delay="200"
          />
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section id="news" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Последние новости
        </h2>
        <article class="grid md:grid-cols-3 gap-8" id="newsGrid">
          <NewsCard
            date="15 июня 2025"
            title="Новые модели счетчиков воды с интеллектуальными функциями"
            description="Представляем новую линейку водосчетчиков с возможностью дистанционного мониторинга и предупреждения о протечках."
            bg-gradient-class="bg-gradient-to-br from-blue-400 to-blue-600"
            :delay="200"
          />
          <NewsCard
            date="10 июня 2025"
            title="Изменения в законодательстве об учете электроэнергии"
            description="Обзор новых требований к установке и эксплуатации электросчетчиков в жилых и коммерческих помещениях."
            bg-gradient-class="bg-gradient-to-br from-green-400 to-green-600"
            :delay="400"
          />
          <NewsCard
            date="5 июня 2025"
            title="Акция: скидка 20% на установку счетчиков тепла"
            description="До конца июня действует специальное предложение на установку теплосчетчиков для жилых комплексов."
            bg-gradient-class="bg-gradient-to-br from-purple-400 to-purple-600"
            :delay="600"
          />
        </article>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Полезные статьи
        </h2>
        <div class="grid md:grid-cols-2 gap-8" id="articlesGrid">
          <ArticleCard
            title="Как выбрать счетчик воды: руководство для потребителей"
            description="Подробное руководство по выбору водосчетчика: типы, характеристики, критерии выбора и рекомендации экспертов."
            :delay="100"
          />
          <ArticleCard
            title="Экономия на коммунальных услугах: практические советы"
            description="Эффективные способы снижения расходов на отопление, электричество, газ и воду с помощью современных приборов учета."
            :delay="400"
          />
          <ArticleCard
            title="Обслуживание приборов учета: что нужно знать"
            description="Регламент технического обслуживания, сроки поверки и замены различных типов счетчиков."
            :delay="700"
          />
          <ArticleCard
            title="Умные счетчики: технологии будущего уже сегодня"
            description="Обзор современных интеллектуальных систем учета энергоресурсов и их преимущества для потребителей."
            :delay="1000"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Связаться с нами
        </h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-800">
              Оставьте заявку
            </h3>
            <form class="space-y-6" @submit.prevent="submitForm">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-gray-900 hover:bg-orange-500 transition-colors active:bg-orange-600 text-white px-6 py-2 rounded-l font-semibold"
              >
                Отправить заявку
              </button>
            </form>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-800">
              Контактная информация
            </h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-orange-500 text-xl">📍</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Адрес</h4>
                  <p class="text-gray-600">
                    г. Москва, ул. Примерная, д. 123, офис 456
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-orange-500 text-xl">📞</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Телефон</h4>
                  <p class="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-orange-500 text-xl">✉️</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Email</h4>
                  <p class="text-gray-600">info@metrikaplus.ru</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-orange-500 text-xl">🕒</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Режим работы</h4>
                  <p class="text-gray-600">
                    Пн-Пт: 9:00-18:00<br />Сб: 10:00-15:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
import ServiceCard from "~/components/ui/ServiceCard.vue";
import AdvantageCard from "~/components/ui/AdvantageCard.vue";
import NewsCard from "~/components/ui/NewsCard.vue";
import ArticleCard from "~/components/ui/ArticleCard.vue";
import Carousel from "~/components/ui/Carousel.vue"; // Импортируем компонент карусели

// Обработка отправки формы
const submitForm = () => {
  alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  // Здесь можно добавить реальную отправку данных на сервер
};

// Инициализация Intersection Observer для анимации
// Это можно сделать в клиентском плагине, чтобы избежать проблем с SSR
// Для примера, оставим здесь, но лучше вынести в plugin
import { onMounted } from "vue";
import AppHeader from "~/components/AppHeader.vue";

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  // Анимация для Service Cards
  const servicesObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".service-card");
        cards.forEach((card, index) => {
          const delay = parseInt(card.dataset.delay) || 0;
          setTimeout(() => {
            card.classList.remove("opacity-0", "translate-y-8");
            card.classList.add("opacity-100", "translate-y-0");
          }, delay);
        });
        servicesObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const servicesGrid = document.getElementById("servicesGrid");
  if (servicesGrid) {
    servicesObserver.observe(servicesGrid);
  }

  // Анимация для Advantage Cards
  const advantagesObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".advantage-card");
        cards.forEach((card, index) => {
          const delay = parseInt(card.dataset.delay) || 0;
          setTimeout(() => {
            card.style.transition = "all 0.5s ease-out";
            card.classList.remove("opacity-0", "-translate-x-16");
            card.classList.add("opacity-100", "translate-x-0");
          }, delay);
        });
        advantagesObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const advantagesGrid = document.getElementById("advantagesGrid");
  if (advantagesGrid) {
    advantagesObserver.observe(advantagesGrid);
  }

  // Анимация для News Cards
  const newsObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".news-card");
        cards.forEach((card, index) => {
          const delay = parseInt(card.dataset.delay) || 0;
          setTimeout(() => {
            card.classList.remove("opacity-0", "translate-y-8");
            card.classList.add("opacity-100", "translate-y-0");
          }, delay);
        });
        newsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const newsGrid = document.getElementById("newsGrid");
  if (newsGrid) {
    newsObserver.observe(newsGrid);
  }

  // Анимация для Articles Cards
  const articlesObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".article-card");
        cards.forEach((card, index) => {
          const delay = parseInt(card.dataset.delay) || 0;
          setTimeout(() => {
            card.classList.remove("opacity-0", "-translate-x-8");
            card.classList.add("opacity-100", "translate-x-0");
          }, delay);
        });
        articlesObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const articlesGrid = document.getElementById("articlesGrid");
  if (articlesGrid) {
    articlesObserver.observe(articlesGrid);
  }
});
</script>
