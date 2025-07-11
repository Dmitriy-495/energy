<script setup lang="ts">
defineProps({
  icon: { type: String, default: "bars" },
  a: { type: String, default: "#" },
});
</script>

<template>
  <NuxtLink :to="a" class="-mr-1.5 rounded-md p-2 hover:bg-slate-100">
    <Icon :name="icon" class="size-8 text-orange-400" />
  </NuxtLink>
</template>
