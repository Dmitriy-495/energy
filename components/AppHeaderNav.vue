<script setup lang="ts">
const navItems = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/about" },
  { name: "Новости", href: "/news" },
  { name: "Статьи", href: "/articles" },
];
const mobileNavOpen = ref(false);
</script>

<template>
  <nav class="hidden grow lg:block">
    <ul class="flex items-center justify-center gap-x-8">
      <li v-for="item in navItems" key="item.href">
        <NuxtLink
          :to="item.href"
          class="nav-link font-mormal text-lg text-slate-50"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
