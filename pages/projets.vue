<template>
  <div id="projets-page">
    <left-menu :opened="isProjectsOpen" @wanna-close="isProjectsOpen = false">
      <projet-left-menu-item v-for="projet in projets" :key="projet.title" :item="projet"/>
    </left-menu>
    <div id="experience-detail-container">
      <left-menu-mobile-open @click="isProjectsOpen = !isProjectsOpen">
        Projets
      </left-menu-mobile-open>
      <div id="intro" v-if="isMainOpened">
        <h1>Découvrez mes projets personnels</h1>
        <p>
          Ces projets que je mène sur mon temps libre me permettent d'étancher ma soif de curiosité en matière de
          technologies. J'y utilise souvent des briques logicielles que je n'utilise pas ou peu dans mes
          <NuxtLink to="/cv">expériences professionnelles</NuxtLink>, ce qui me permet d'élargir mon horizon de
          connaissances.
        </p>
        <p id="p-dkt">
          Vous pouvez découvrir ces projets en utilisant le menu ci-contre.
        </p>
        <p id="p-mob">
          Vous pouvez découvrir ces projets en cliquant sur le bouton "Projets" ci-dessus.
        </p>
      </div>
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

const isMainOpened = computed(() => route.fullPath === '/projets')

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
  height: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: left;
}
</style>
