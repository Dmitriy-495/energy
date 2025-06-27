<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Здесь можно добавить глобальные стили, если они не определены в Tailwind */
body {
  font-family: "Open Sans", sans-serif; /* Важно для корректного отображения шрифта */
}
</style>
