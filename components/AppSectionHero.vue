<template>
  <section id="hero" class="w-full">
    <div class="container mx-auto my-10 lg:my-42 lg:flex">
      <div
        class="flex flex-col items-center justify-center text-center lg:w-1/3 lg:items-start lg:text-left"
      >
        <h2
          class="bg-linear-to-r from-orange-700 to-yellow-400 bg-clip-text text-4xl font-black tracking-tight text-transparent lg:text-6xl"
        >
          СК Энергия
        </h2>
        <p class="mt-4 text-xl text-gray-700 uppercase lg:text-2xl">
          полный комлекс услуг по эксплуатации приборов и узлов учета
          энергоресурсов и воды
        </p>
        <div class="mt-8 flex gap-x-2">
          <NuxtLink
            to="#"
            class="rounded-lg bg-slate-800 px-8 py-3 text-lg font-semibold text-slate-50 hover:bg-orange-400 active:bg-orange-500"
            >Каталог
          </NuxtLink>
          <NuxtLink
            to="#services"
            class="rounded-lg bg-slate-100 px-8 py-3 text-right text-lg font-semibold text-slate-900 hover:bg-orange-400 active:bg-orange-500"
            >Узнать подробнее...
          </NuxtLink>
        </div>
      </div>
      <div
        class="mt-8 min-h-80 rounded-2xl bg-orange-100 lg:mx-8 lg:mt-0 lg:min-h-130 lg:w-2/3 lg:shadow-2xl"
      >
        <p class="p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          debitis, voluptatem, dolorem harum voluptates minima quae iure
          deleniti esse nemo adipisci necessitatibus laborum ipsam blanditiis
          doloremque facere error quod ipsa.
        </p>
      </div>
    </div>
  </section>
</template>
