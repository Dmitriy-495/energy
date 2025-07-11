<script setup lang="ts">
const navItems = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/about" },
  { name: "Новости", href: "/news" },
  { name: "Статьи", href: "/articles" },
];
</script>

<template>
  <div class="flex lg:hidden">
    <nav
      id="nav"
      class="peer absolute inset-x-0 top-full hidden border-b border-slate-200 bg-white target:block"
    >
      <ul class="flex flex-col items-center px-3 pb-3">
        <li v-for="item in navItems" key="item.href" class="w-full">
          <NuxtLink
            :to="item.href"
            class="inline-block w-full rounded-md py-2 text-center font-semibold hover:bg-orange-400"
            >{{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <AppHeaderMobileNavButton
      a="#nav"
      class="peer-target:hidden peer-target:[&+a]:block"
    />
    <AppHeaderMobileNavButton a="#" icon="xMark" class="hidden" />
  </div>
</template>
