<template>
  <header class="inset-x-0 top-0 z-50 border-b border-slate-200 bg-slate-900">
    <div class="flex items-center justify-between gap-x-10 p-2 lg:px-8 lg:py-4">
      <AppLogo
        class="text-white"
        icon-classes="size-12 lg:size-18"
        primaryTextClasses="text-2xl lg:text-4xl"
        secondaryTextClasses="text-sm lg:text-lg"
      >
      </AppLogo>
      <AppHeaderNav />
      <AppHeaderMobileNav />
      <AppPhone />
    </div>
  </header>
</template>
