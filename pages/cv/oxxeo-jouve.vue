<template>
  <experience-detail>
    <template v-slot:title>Luminess (Jouve)</template>
    <template v-slot:dates>Février 2019 - Décembre 2020</template>
    <template v-slot:intro>
      Développement d'API REST en PHP/Symfony, création de clients web en AngularJS et Angular.<br>
      <ul>
        <li>Analyse du besoin, étude de faisabilité et conseil</li>
        <li>Estimation des temps de développement</li>
        <li>Développement des évolutions en PHP avec Symfony 2.8, Symfony 3.4, AngularJS et Angular</li>
        <li>Réalisation des tests unitaires et fonctionnels</li>
        <li>Réalisation d’un POC autour de la fraude</li>
        <li>Gestion des retours</li>
        <li>Travail en agilité</li>
      </ul>
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

import type {
  BadgeCi,
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeOs,
  BadgeVersioning
} from "~/ts/contracts/cv/Badge";

useHead({
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
