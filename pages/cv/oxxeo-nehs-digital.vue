<template>
  <experience-detail>
    <template v-slot:title>Nehs Digital</template>
    <template v-slot:dates>Janvier 2022 - Février 2023</template>
    <template v-slot:content>
      Travail sur des plateformes web dans le domaine de la santé.<br>
      <br>
      <ul>
        <li>Estimation des tickets</li>
        <li>Développement des fonctionnalités en PHP 8, Symfony 5/6 et Angular</li>
        <li>Écriture des tests unitaires avec PHPUnit</li>
        <li>Déploiement via Ansible, Jenkins et AWX</li>
      </ul>
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
    versions: ['8']
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
    versions: ['5', '6']
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
