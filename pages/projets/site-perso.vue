<template>
  <div id="projet-site-perso">
    <h1>Ce site!</h1>
    <github-badge link="R0mm1/siteperso"/>
    <p>
      Ce site n'est pas simplement une vitrine pour moi, ça a aussi été l'occasion de découvrir Vue.js 3 et la
      Composition API, ainsi que Nuxt3. Utilisateur de Vue2 et Nuxt pour mon projet de
      <NuxtLink to="/projets/mediatheque">gestionnaire de médiathèque personnelle</NuxtLink>
      ,
      ce petit site m'a permis d'appréhender les nouveautés et les différences entres ces différentes versions, ainsi
      que la maturité de ces deux technologies et de leurs écosystèmes. Outre le fait de maintenir mes connaissances à
      jour, cela m'a permis de poser les bases d'une réflexion sur une éventuelle migration du projet de médiathèque.
    </p>

    <techno-badges
        :techno-language="technoLanguage"
        :techno-framework="technoFramework"
        :techno-ci="technoCi"
        :techno-routing="technoRouting"
    />
  </div>
</template>

<script setup lang="ts">

import GithubBadge from "~/components/share/githubBadge.vue";
import {BadgeCi, BadgeFramework, BadgeLanguage, BadgeRouting} from "~/ts/contracts/cv/Badge";
import TechnoBadges from "~/components/cv/technoBadges.vue";

const technoLanguage: BadgeLanguage[] = [
  {
    techno: "ts"
  },
  {
    techno: "html",
    versions: ['5']
  },
  {
    techno: "css",
    versions: ['3']
  },
  {
    techno: "scss"
  }
]

const technoFramework: BadgeFramework[] = [
  {
    techno: 'vuejs',
    versions: ['3']
  },
  {
    techno: 'nuxt',
    versions: ['3']
  }
]

const technoCi: BadgeCi[] = [
  {
    techno: 'docker'
  }
]

const technoRouting: BadgeRouting[] = [
  {
    techno: 'traefik'
  }
]

useHead({
  title: 'Site personnel',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon site personnel'
    }
  ]
})
</script>

<style scoped lang="scss">
@import "assets/breakpoints.scss";

#projet-site-perso {
  padding: 0 15px;

  @include phone-portrait {
    margin-left: 10px;
  }
}
</style>
