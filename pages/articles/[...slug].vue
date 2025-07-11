<script lang="ts" setup>
const route = useRoute();
const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection("articles").path(route.path).first();
});
</script>

<template>
  <template v-if="article">
    <ContentRenderer :value="article" />
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>
