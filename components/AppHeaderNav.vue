<template>
  <div>
    <nav class="hidden grow lg:block">
      <ul
        v-for="item in navItems"
        key="item.href"
        class="flex flex-row items-center justify-center gap-x-8"
      >
        <li>
          <NuxtLink :to="item.href" class="nav-link font-semibold">{{
            item.name
          }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="flex lg:hidden">
      <nav class="absolute inset-x-0 top-full border-b bg-white">
        <ul
          v-for="item in navItems"
          :key="item.href"
          class="flex flex-col items-center px-3 pb-3"
        >
          <li class="w-full">
            <NuxtLink
              :to="item.href"
              class="inline-block w-full rounded-md py-2 text-center font-semibold hover:bg-orange-400"
              >{{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex lg:hidden">
      <NuxtLink to="#nav" class="-mr-1.5 rounded-md p-2 hover:bg-slate-100">
        <Icon name="heroicons:bars-3-solid" class="size-8 text-orange-400" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { name: "Главная", href: "#home" },
  { name: "Услуги", href: "#services" },
  { name: "Новости", href: "#news" },
  { name: "Статьи", href: "#content" },
];
const mobileNavOpen = ref(false);
</script>
