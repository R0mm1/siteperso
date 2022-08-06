<template>
  <div id="cv-page">
    <left-menu :opened="isExperiencesOpen" @wanna-close="isExperiencesOpen = false">
      <cv-left-menu-item v-for="experience in experiences" :key="experience.title" :item="experience"/>
    </left-menu>
    <div id="experience-detail-container">
      <left-menu-mobile-open @click="isExperiencesOpen = !isExperiencesOpen">
        Expériences
      </left-menu-mobile-open>
      <div id="intro" v-if="isMainOpened">
        <h1>Bienvenue sur mon CV</h1>
        <p>
          Développeur depuis 2016, ma carrière s'oriente principalement autours des technologies de PHP et de Symfony.<br>
          Mais j'ai souvent eu l'occasion, lors de mes différentes expériences professionnelles, d'expérimenter et de
          m'améliorer dans des technologies front-end, de déploiement, de conteneurisation... Ces expériences sont
          complétées par mes projets personnels que vous pouvez découvrir
          <NuxtLink to="/projets">sur cette page.</NuxtLink>
        </p>
        <p id="p-dkt">
          Vous pouvez naviguer à travers mes différentes expériences en utilisant le menu ci-contre.
        </p>
        <p id="p-mob">
          Vous pouvez retrouver mes différentes expériences professionnelles en cliquant sur le bouton "Expériences"
          ci-dessus.
        </p>
      </div>
      <NuxtChild/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from "~/components/share/leftMenu/leftMenu.vue"
import {watch} from "vue";
import ExperienceObject from "~/ts/contracts/cv/Experience";
import CvLeftMenuItem from "~/components/cv/cvLeftMenuItem.vue";
import LeftMenuMobileOpen from "~/components/share/leftMenu/leftMenuMobileOpen.vue";

const isExperiencesOpen = ref<boolean>(false)
const isMainOpened = ref<boolean>(true)

const route = useRoute()
watch(
    () => route.fullPath,
    () => {
      isMainOpened.value = route.fullPath === '/cv'
      isExperiencesOpen.value = false
    }
)

const experiences: ExperienceObject[] = [
  {
    title: 'Cognix-Systems',
    startDate: new Date(2016, 5),
    endDate: new Date(2019, 1),
    page: '/cv/cognix-systems'
  },
  {
    title: 'Oxxeo',
    startDate: new Date(2019, 1),
    endDate: null,
    page: '/cv/oxxeo',
    children: [
      {
        title: 'Luminess (Jouve)',
        startDate: new Date(2019, 1),
        endDate: new Date(2020, 11),
        page: '/cv/oxxeo-jouve',
      },
      {
        title: 'Rectorat de Rennes',
        startDate: new Date(2021, 1),
        endDate: new Date(2021, 6),
        page: '/cv/oxxeo-rectorat-rennes',
      },
      {
        title: 'Additi',
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 11),
        page: '/cv/oxxeo-additi',
      },
      {
        title: 'Nehs Digital',
        startDate: new Date(2022, 0),
        endDate: null,
        page: '/cv/oxxeo-nehs-digital',
      }
    ]
  }
]
</script>

<style lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";

#cv-page {
  position: relative;
  background: $bg1;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
  height: 100%;
}

#experience-detail-container {
  height: 100%;
  overflow-y: auto;
}

#intro{
  padding: 0 15px;
  overflow-y: auto;

  @include phone-portrait{
    margin-left: 10px;
  }
}

#p-mob {
  display: none;
}

@include phone-portrait {
  #p-mob {
    display: block;
  }
  #p-dkt {
    display: none;
  }
}
</style>
