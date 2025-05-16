<template>
  <experience-detail>
    <template v-slot:title>Rectorat de Rennes</template>
    <template v-slot:dates>Février 2021 - Juillet 2021</template>
    <template v-slot:intro>
      Maintenance d'une forge logicielle en PHP.<br>
      <ul>
        <li>Analyse du besoin, étude de faisabilité et conseil</li>
        <li>Écriture des tests unitaires et d’intégration en TDD</li>
        <li>Développement de plugins en PHP 5.3</li>
        <li>Écriture de la documentation technique et utilisateur</li>
        <li>Écriture de campagnes de test sur Squash TM</li>
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
import type {
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeOs
} from "~/ts/contracts/cv/Badge";


useHead({
  title: 'Oxxeo - Rectorat de Rennes',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon expérience au Rectorat de Rennes pour Oxxeo'
    }
  ]
})

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['5.3']
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
    techno: 'vuejs',
    versions: ['2']
  }
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
