<!-- components/ui/ServiceCard.vue -->
<template>
  <div
    class="card service-card text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 opacity-0 transform translate-y-8"
    :data-delay="delay"
  >
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
    >
      <span class="text-2xl" :class="iconColor">{{ icon }}</span>
    </div>
    <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ title }}</h3>
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
  iconBgColor: {
    type: String,
    default: "bg-orange-100",
  },
  iconColor: {
    type: String,
    default: "text-orange-500",
  },
});
</script>
