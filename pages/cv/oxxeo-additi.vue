<template>
  <experience-detail>
    <template v-slot:title>Additi</template>
    <template v-slot:dates>Juillet 2021 - Décembre 2021</template>
    <template v-slot:intro>
      Développement du site <a target="_blank" href="https://commerces.ouest-france.fr">Ouest-France Commerces</a>.<br>
      <ul>
        <li>Participation aux cérémonies Agile (poker planning, revues de sprint...)</li>
        <li>Développement des fonctionnalités en PHP 7.4/8 et Symfony 5</li>
        <li>Écriture des tests unitaires avec PHPUnit</li>
        <li>Déploiement via GitLab</li>
        <li>Poc de migration du projet en PHP8</li>
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
      />
    </template>
  </experience-detail>
</template>

<script setup lang="ts">
import ExperienceDetail from "~/components/cv/experienceDetail";
import TechnoBadges from "~/components/cv/technoBadges.vue";

import type {
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeOs,
  BadgeVersioning
} from "~/ts/contracts/cv/Badge";

useHead({
  title: 'Oxxeo - Additi',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience chez Additi pour Oxxeo'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['7', '8']
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
    versions: ['5']
  }
]

const technoOs: BadgeOs[] = [
  {
    techno: 'ubuntu'
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
</script>

<style scoped>

</style>
