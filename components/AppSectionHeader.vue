<script setup lang="ts">
import { NuxtImg } from "#components";

defineProps({
  bgImage: { type: String },
});
</script>

<template>
  <div :class="`w-full ${bgImage}`">
    <div class="container mx-auto max-w-screen-lg text-center">
      <h2 class="text-3xl font-bold lg:text-5xl">
        <slot name="title"></slot>
      </h2>
      <p class="mt-2 text-sm text-gray-700 lg:mt-6 lg:text-lg">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
