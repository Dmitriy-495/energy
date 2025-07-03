<script setup lang="ts">
defineProps({
  iconClasses: { type: String, default: "size-8 md:size-12" },
  primaryTextClasses: { type: String, default: "text-xl md:text-2xl" },
  secondaryTextClasses: { type: String, default: "text-xs md:text-sm" },
});
</script>

<template>
  <NuxtLink
    to="/"
    class="flex items-center gap-x-1 font-black sm:gap-x-2"
  >
    <Icon
      name="heroicons:bolt-solid"
      :class="`-rotate-16 text-orange-400 ${iconClasses}`"
    />
    <p class="flex flex-col whitespace-nowrap">
      <span
        :class="`leading-none tracking-wide uppercase ${primaryTextClasses}`"
        >Энергия</span
      >
      <span
        :class="`font-normal tracking-tight uppercase ${secondaryTextClasses}`"
        >Сервисная компания</span
      >
    </p>
  </NuxtLink>
</template>
