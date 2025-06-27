<!-- components/ui/ArticleCard.vue -->
<template>
  <div
    class="card article-card p-8 rounded-lg shadow-sm opacity-0 transform translate-x-8"
    :data-delay="delay"
  >
    <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <a href="#" class="text-orange-500 hover:text-orange-600 font-medium"
      >Читать статью →</a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  delay: {
    type: Number,
    default: 0,
  },
});
</script>
