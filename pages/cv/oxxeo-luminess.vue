<template>
  <experience-detail>
    <template v-slot:title>Luminess</template>
    <template v-slot:dates>Septembre 2023 - Aujourd'hui</template>
    <template v-slot:intro></template>
    <template v-slot:content>
      <h3>Technologies</h3>
      <techno-badges
          :techno-language="technoLanguage"
          :techno-framework="technoFramework"
          :techno-os="technoOs"
          :techno-db="technoDb"
      />
    </template>
  </experience-detail>
</template>

<script setup lang="ts">
import ExperienceDetail from "~/components/cv/experienceDetail";
import TechnoBadges from "~/components/cv/technoBadges.vue";
import {
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeOs
} from "~/ts/contracts/cv/Badge";


useHead({
  title: 'Oxxeo - Luminess',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Ma seconde expérience chez Luminess pour Oxxeo'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['8']
  },
  {
    techno: "js"
  },
  {
    techno: "html",
    versions: ['5']
  },
  {
    techno: "css",
    versions: ['3']
  }
]

const technoOs: BadgeOs[] = [
  {
    techno: 'windows',
    versions: ['11']
  }
]

const technoDb: BadgeDb[] = [
  {
    techno: 'mysql'
  }
]
</script>

<style scoped>

</style>
