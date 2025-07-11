<script setup lang="ts">
import { NuxtImg } from "#components";

defineProps({
  date: { type: String },
  title: { type: String },
  description: { type: String },
  path: { type: String },
});
</script>

<template>
  <article class="mx-auto w-full">
    <div
      class="flex flex-col gap-2 rounded-xl border border-slate-300 bg-slate-50 p-6 shadow-xl transition duration-150 ease-in-out hover:scale-103 hover:border-orange-400"
    >
      <header class="flex flex-col items-center justify-center gap-2">
        <NuxtImg fit="cover" src="/transfer.png" />
        <h3 class="text-center text-xl font-bold lg:text-3xl">{{ title }}</h3>
      </header>
      <p class="text-left text-gray-700 lg:text-lg">{{ description }}</p>
      <p class="text-right text-sm lg:text-lg">{{ date }}</p>
    </div>
  </article>
</template>
