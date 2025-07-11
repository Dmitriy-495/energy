<script setup lang="ts">
const { data: articles } = await useAsyncData("article-list", () => {
  return queryCollection("articles")
    .order("date", "ASC")
    .select("date", "title", "path", "description")
    .all();
});
const tags = [
  "Энергосбережение",
  "Поверка",
  "Ремонт",
  "Обслуживание",
  "Установка",
  "Диспетчиризация",
];
</script>

<template>
  <section
    class="bg-orange-100f mb-0 flex w-full flex-col gap-y-12"
  >
    <AppSectionHeader bg-image="py-48 bg-cover bg-[url(/bg-article.jpg)]">
      <template #title>Статьи</template>
      <template #description>
        На этой странице представлены материалы и приведены рекомендации по
        обслуживанию приборов (узлов) учета газа, тепловой энергии,
        электроэнергии, ГВС и ХВС
      </template>
    </AppSectionHeader>
    <div class="container grid gap-8 lg:grid-cols-5">
      <div class="col-span-5 flex flex-col gap-8 lg:col-span-1">
        <input
          type="search"
          placeholder="Заголовок статьи"
          class="rounded-xl border border-slate-300 px-4 py-2 shadow-sm focus:border-orange-400 focus:ring-orange-200"
        />
        <div class="flex flex-col gap-3">
          <h3 class="text-lg font-semibold">Теги</h3>
          <ul class="flex flex-col gap-1">
            <li v-for="tag in tags" :key="tag">
              <button
                class="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-center hover:bg-orange-200 hover:font-semibold focus:bg-orange-200 active:bg-orange-400"
              >
                {{ tag }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-span-5 grid grid-cols-1 gap-y-1 lg:col-span-4 lg:grid-cols-2 lg:gap-4"
      >
        <NuxtLink
          v-for="article in articles"
          :key="article.path"
          :to="article.path"
        >
          <AppSectionArticleCard
            :date="article.date"
            :title="article.title"
            :description="article.description"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
