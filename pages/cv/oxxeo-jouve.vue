<template>
  <experience-detail>
    <template v-slot:title>Luminess (Jouve)</template>
    <template v-slot:dates>Février 2019 - Décembre 2020</template>
    <template v-slot:intro>
      Développement d'API REST en PHP/Symfony, création de clients web en AngularJS et Angular.
    </template>
    <template v-slot:content>
      <h3>Technologies</h3>
      <techno-badges
          :techno-language="technoLanguage"
          :techno-framework="technoFramework"
          :techno-os="technoOs"
          :techno-db="technoDb"
          :techno-versioning="technoVersioning"
          :techno-ci="technoCi"
      />
    </template>
  </experience-detail>
</template>

<script setup lang="ts">
import ExperienceDetail from "~/components/cv/experienceDetail";
import TechnoBadges from "~/components/cv/technoBadges.vue";

import {
  BadgeCi,
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeOs,
  BadgeVersioning
} from "~/ts/contracts/cv/Badge";

useMeta({
  title: 'Oxxeo - Luminess (Jouve)',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience chez Luminess (Jouve) pour Oxxeo'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['7']
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
    versions: ['2.8', '3.4']
  },
  {
    techno: 'angularjs'
  },
  {
    techno: 'angular'
  }
]

const technoOs: BadgeOs[] = [
  {
    techno: 'windows',
    versions: ['7']
  }
]

const technoDb: BadgeDb[] = [
  {
    techno: 'mysql'
  }
]

const technoVersioning: BadgeVersioning[] = [
  {
    techno: 'git'
  }
]

const technoCi: BadgeCi[] = [
  {
    techno: 'jenkins'
  }
]
</script>

<style scoped>

</style>
