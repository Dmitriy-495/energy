<script setup lang="ts">
defineProps({
  icon: { type: String, default: "check" },
  header: { type: String },
  description: { type: String },
});
</script>

<template>
  <div
    class="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 hover:border-orange-400"
  >
    <header class="flex flex-col items-center justify-center gap-2">
      <Icon :name="icon" class="size-10 text-orange-400" />
      <h3 class="text-xl font-bold lg:text-3xl">{{ header }}</h3>
    </header>
    <p class="flex-1 text-center text-gray-700 lg:text-lg">
      {{ description }}
    </p>
    <NuxtLink
      to="#contacts"
      class="mx-auto rounded-lg bg-slate-100 px-8 py-3 text-center text-lg font-semibold text-slate-900 hover:bg-orange-400 active:bg-orange-500"
    >
      Заказать услугу
    </NuxtLink>
  </div>
</template>
