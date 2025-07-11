<script setup lang="ts">
const sericesCard = [
  {
    header: "Поверка",
    icon: "scale",
    description:
      "Услуги по поверке приборов учета всех видов энергоресурсов и воды при истечении межповерочного интервала.",
  },
  {
    header: "Установка",
    icon: "build",
    description:
      "Услуги по проектированию и установке узлов учета тепловой энергии, электроэнергии, газа, горячего и холодного водоснабжения, водоотведения.",
  },
  {
    header: "Ремонт",
    icon: "wrench",
    description:
      "Профессиональный ремонт приборов учета энергоресурсов с проведением стендовых испытаний и оформлением документов о допуске в эксплуатацию.",
  },
  {
    header: "Проектирование",
    icon: "pencil",
    description:
      "Проведение проектно-изыскательгных работ, проектирование и составление проектной документации на установку и замену узлов учета.",
  },
  {
    header: "Обслуживание",
    icon: "cog",
    description:
      "Техничесое облуживание всех типов приборов и узлов учета энергоресурсов, электричества и воды",
  },
  {
    header: "Диспетчиризация",
    icon: "computer",
    description:
      "Установка модулей беспроводной передачи данных с приборов учета и настройка програмного обеспечения.",
  },
];
</script>

<template>
  <div class="mx-auto flex justify-center pt-8 lg:pt-12">
    <div class="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article v-for="card in sericesCard" key="card.header">
        <AppSectionServiceCard
          :icon="card.icon"
          :header="card.header"
          :description="card.description"
        />
      </article>
    </div>
  </div>
</template>
