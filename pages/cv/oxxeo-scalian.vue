<template>
  <experience-detail>
    <template v-slot:title>Scalian</template>
    <template v-slot:dates>Mars 2023 - Mai 2023</template>
    <template v-slot:intro>
      Travail sur la plateforme OPERAT de l'ADEME.
    </template>
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
  title: 'Oxxeo - Scalian',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience chez Scalian pour Oxxeo'
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

const technoFramework: BadgeFramework[] = [
  {
    techno: 'angular',
  },
  {
    techno: 'symfony',
    versions: ['6']
  },
]

const technoOs: BadgeOs[] = [
  {
    techno: 'windows',
    versions: ['10']
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
