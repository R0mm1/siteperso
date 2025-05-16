<template>
  <div id="cv-page">
    <left-menu :opened="isExperiencesOpen" @wanna-close="isExperiencesOpen = false">
      <cv-left-menu-item v-for="experience in experiences" :key="experience.title" :item="experience"/>
    </left-menu>
    <div id="experience-detail-container">
      <left-menu-mobile-open @click="isExperiencesOpen = !isExperiencesOpen">
        Expériences
      </left-menu-mobile-open>
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from "~/components/share/leftMenu/leftMenu.vue"
import {watch} from "vue";
import type ExperienceObject from "~/ts/contracts/cv/Experience";
import CvLeftMenuItem from "~/components/cv/cvLeftMenuItem.vue";
import LeftMenuMobileOpen from "~/components/share/leftMenu/leftMenuMobileOpen.vue";

const route = useRoute()

const isExperiencesOpen = ref<boolean>(false)
watch(
    () => route.fullPath,
    () => {
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
        endDate: new Date(2021, 5),
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
        endDate: new Date(2023, 1),
        page: '/cv/oxxeo-nehs-digital',
      },
      {
        title: 'Scalian',
        startDate: new Date(2023, 2),
        endDate: new Date(2023, 4),
        page: '/cv/oxxeo-scalian',
      },
      {
        title: 'Additi',
        startDate: new Date(2023, 5),
        endDate: new Date(2023, 7),
        page: '/cv/oxxeo-additi-2',
      },
      {
        title: 'Luminess',
        startDate: new Date(2023, 8),
        endDate: null,
        page: '/cv/oxxeo-luminess',
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
  display: flex;
  height: 100%;
}

#experience-detail-container {
  height: 100%;
  overflow-y: auto;
  flex-grow: 1;
}
</style>
