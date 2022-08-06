<template>
  <div id="projet-mediatheque">
    <h1>Projet de gestion de médiathèque personnelle</h1>

    <p>
      Ce projet permet de gérer sa médiathèque personnelle. Pour l'instant, l'accent est mis sur la gestion des livres:
      livres papier, livres électroniques et livres audio.
    </p>
    <p>
      J'ai commencé ce projet à mes débuts dans le développement web afin de découvrir les bases d'HTML et de CSS, puis
      l'écosystème autours de PHP, et enfin le monde de Javascript. Il s'agissait dans sa première version d'un site
      statique, créé uniquement avec du HTML et du CSS.
    </p>
    <p>
      Aujourd'hui, l'application est composée de deux projets distincts: une API RESTful créée avec
      <a href="https://api-platform.com/" target="_blank">ApiPlatform</a> et un client web construit avec
      <a href="https://v2.vuejs.org/">Vue 2</a> et <a href="https://nuxtjs.org/">Nuxt</a>.
      L'authentification s'appuie sur OAuth2 grâce à un serveur Keycloak.
    </p>

    <h2>L'API REST</h2>
    <github-badge link="R0mm1/mediatheque"/>
    <h3>Technologies</h3>
    <techno-badges
        :techno-language="backTechnoLanguage"
        :techno-framework="backTechnoFramework"
        :techno-db="backTechnoDb"
    />

    <h2>Le client web</h2>
    <github-badge link="R0mm1/mediatheque-front-nuxt"/>
    <h3>Technologies</h3>
    <techno-badges
        :techno-language="frontTechnoLanguage"
        :techno-framework="frontTechnoFramework"
    />

    <h2>Technologies transverses</h2>
    <p>Ces technologies qui me permettent de tout faire fonctionner:</p>
    <techno-badges
        :techno-ci="otherTechnoCi"
        :techno-routing="otherTechnoRouting"
        :techno-authentication="otherTechnoAuthentication"
    />
  </div>
</template>

<script setup lang="ts">
import {
  BadgeAuthentication,
  BadgeCi,
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeRouting
} from "~/ts/contracts/cv/Badge";
import TechnoBadges from "~/components/cv/technoBadges.vue";
import GithubBadge from "~/components/share/githubBadge.vue";

const backTechnoLanguage: BadgeLanguage[] = [
  {
    techno: "php",
    versions: ['8']
  }
]

const backTechnoFramework: BadgeFramework[] = [
  {
    techno: 'symfony',
    versions: ['6']
  },
  {
    techno: 'other',
    label: 'ApiPlatform'
  }
]

const backTechnoDb: BadgeDb[] = [
  {
    techno: 'mysql'
  }
]

const frontTechnoLanguage: BadgeLanguage[] = [
  {
    techno: "js"
  },
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

const frontTechnoFramework: BadgeFramework[] = [
  {
    techno: 'vuejs',
    versions: ['2']
  },
  {
    techno: 'nuxt',
    versions: ['2']
  }
]

const otherTechnoCi: BadgeCi[] = [
  {
    techno: 'ansible'
  },
  {
    techno: 'docker'
  }
]

const otherTechnoAuthentication: BadgeAuthentication[] = [
  {
    techno: 'oauth2'
  },
  {
    techno: 'keycloak'
  }
]

const otherTechnoRouting: BadgeRouting[] = [
  {
    techno: 'traefik'
  },
]

useMeta({
  title: 'Projet de gestion de médiathèque personnelle',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Projet de gestion de médiathèque personnelle par Romain Quentel'
    }
  ]
})
</script>

<style scoped lang="scss">
@import "assets/breakpoints.scss";

#projet-mediatheque {
  padding: 0 15px;

  @include phone-portrait{
    margin-left: 10px;
  }
}
</style>
