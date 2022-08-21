<template>
  <experience-detail>
    <template v-slot:title>Nehs Digital</template>
    <template v-slot:dates>Janvier 2022 - Ajourd'hui</template>
    <template v-slot:content>
      Travail sur des plateformes web dans le domaine de la santé.
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
  title: 'Oxxeo - Nehs Digital',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience chez Nehs Digital pour Oxxeo'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['5.6', '8']
  },
  {
    techno: "ts"
  },
  {
    techno: "html",
    versions: ['5']
  }
]

const technoFramework: BadgeFramework[] = [
  {
    techno: 'symfony',
    versions: ['6']
  },
  {
    techno: 'angular'
  }
]

const technoOs: BadgeOs[] = [
  {
    techno: 'fedora'
  }
]

const technoDb: BadgeDb[] = [
  {
    techno: 'postgresql'
  },
  {
    techno: 'mongodb'
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
  },
  {
    techno: 'ansible'
  },
  {
    techno: 'docker'
  },
  {
    techno: 'kubernetes'
  },
  {
    techno: 'k3d'
  },
]
</script>

<style scoped>

</style>
