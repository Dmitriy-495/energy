<!-- components/ui/NewsCard.vue -->
<template>
  <div
    class="card news-card rounded-lg overflow-hidden shadow-sm opacity-0 transform translate-y-8"
    :data-delay="delay"
  >
    <div :class="bgGradientClass" class="h-48"></div>
    <div class="p-6">
      <span class="text-sm text-orange-500 font-medium">{{ date }}</span>
      <h3 class="text-xl font-semibold mt-2 mb-3 text-gray-800">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <a href="#" class="text-orange-500 hover:text-orange-600 font-medium"
        >Читать далее →</a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  date: String,
  title: String,
  description: String,
  delay: {
    type: Number,
    default: 0,
  },
  bgGradientClass: {
    type: String,
    default: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
});
</script>
