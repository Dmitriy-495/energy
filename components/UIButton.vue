<script setup lang="ts">
defineProps({
  classes: { type: String, default: "" },
});
</script>

<template>
  <button
    class="${classes} rounded-lg bg-slate-100 px-8 py-3 text-right text-lg font-semibold text-slate-900 hover:bg-orange-400 active:bg-orange-500"
  >
    <slot />
  </button>
</template>
