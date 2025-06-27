<!-- components/ui/AdvantageCard.vue -->
<template>
  <div
    class="card advantage-card bg-white p-8 rounded-lg shadow-sm opacity-0 transform -translate-x-16"
    :data-delay="delay"
  >
    <div
      class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6"
    >
      <span class="text-white text-xl">{{ icon }}</span>
    </div>
    <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String,
  delay: {
    type: Number,
    default: 0,
  },
});
</script>
