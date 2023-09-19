<template>
  <experience-detail>
    <template v-slot:title>Additi</template>
    <template v-slot:dates>Juin 2023 - Août 2023</template>
    <template v-slot:intro>
      Travail sur un logiciel web à usage interne.
      <ul>
        <li>Participation aux cérémonies Agile (poker planning, revues de sprint...)</li>
        <li>Développement des fonctionnalités en PHP 8 et Symfony 5</li>
        <li>Écriture des tests unitaires avec PHPUnit</li>
      </ul>
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
  title: 'Oxxeo - Additi',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Ma seconde expérience chez Additi pour Oxxeo'
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
    techno: 'symfony',
    versions: ['6']
  },
]

const technoOs: BadgeOs[] = [
  {
    techno: 'ubuntu',
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
