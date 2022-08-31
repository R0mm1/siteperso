<template>
  <div id="projets-page">
    <left-menu :opened="isProjectsOpen" @wanna-close="isProjectsOpen = false">
      <projet-left-menu-item v-for="projet in projets" :key="projet.title" :item="projet"/>
    </left-menu>
    <div id="experience-detail-container">
      <left-menu-mobile-open @click="isProjectsOpen = !isProjectsOpen">
        Projets
      </left-menu-mobile-open>
      <NuxtChild/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from "~/components/share/leftMenu/leftMenu.vue"
import LeftMenuItem from "~/ts/contracts/components/leftMenu/LeftMenuItem";
import ProjetLeftMenuItem from "~/components/projet/projetLeftMenuItem.vue";
import LeftMenuMobileOpen from "~/components/share/leftMenu/leftMenuMobileOpen.vue";
import {watch} from "vue";

const route = useRoute()

const isProjectsOpen = ref<boolean>(false)
watch(
    () => route.fullPath,
    () => {
      isProjectsOpen.value = false
    }
)

const projets: LeftMenuItem[] = [
  {
    title: 'Médiathèque',
    subtitle: 'Projet de gestion de médiathèque personnelle',
    page: '/projets/mediatheque'
  },
  {
    title: 'Site personnel',
    subtitle: 'Ce site!',
    page: '/projets/site-perso'
  }
]
</script>

<style scoped lang="scss">
@import "assets/colors.scss";

#projets-page {
  position: relative;
  background: $bg1;
  display: flex;
  height: 100%;
}
</style>
