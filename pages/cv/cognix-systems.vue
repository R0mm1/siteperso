<template>
  <experience-detail>
    <template v-slot:title>Cognix-Systems</template>
    <template v-slot:dates>Juin 2016 - Février 2019</template>
    <template v-slot:intro>
      Développement de solutions web sur mesure pour des clients.
    </template>
    <template v-slot:content>
      <h3>Technologies</h3>
      <techno-badges
          :techno-language="technoLanguage"
          :techno-framework="technoFramework"
          :techno-templating="technoTemplating"
          :techno-os="technoOs"
          :techno-libraries="technoLibraries"
          :techno-db="technoDb"
          :techno-versioning="technoVersioning"
          :techno-ci="technoCi"
      />
      <h3>Missions et tâches</h3>
      <ul>
        <li>Rédaction des spécifications techniques</li>
        <li>Création des tickets et répartition des tâches</li>
        <li>Création de la base de données</li>
        <li>Développement back de l’application</li>
        <li>Interventions sur le front en support des développeurs front-end</li>
        <li>Rédaction des tests unitaires</li>
        <li>Livraison continue via GitLab</li>
        <li>Maintenance de l’application et gestion des retours client</li>
      </ul>
    </template>
  </experience-detail>
</template>

<script setup lang="ts">
import ExperienceDetail from "~/components/cv/experienceDetail";
import type {
  BadgeCi,
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeLibraries,
  BadgeOs,
  BadgeTemplating, BadgeVersioning
} from "~/ts/contracts/cv/Badge";
import TechnoBadges from "~/components/cv/technoBadges.vue";

useHead({
  title: 'Cognix-Systems',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience chez Cognix-Systems'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['5.6', '7.0']
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
    techno: 'other',
    label: 'Framework Cognix-Systems'
  }
]

const technoTemplating: BadgeTemplating[] = [
  {
    techno: 'smarty',
    versions: ['2']
  }
]

const technoOs: BadgeOs[] = [
  {
    techno: 'windows',
    versions: ['10']
  }
]

const technoLibraries: BadgeLibraries[] = [
  {
    techno: 'jquery'
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
    techno: 'gitlab'
  }
]
</script>

<style scoped>
ul {
  list-style-position: inside;
  padding-left: 0;
  line-height: 1.2em;
}
</style>
