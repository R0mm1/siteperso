<template>
  <experience-detail>
    <template v-slot:title>Oxxeo</template>
    <template v-slot:dates>Février 2019 - Aujourd'hui</template>
    <template v-slot:content>
      Depuis 2019, je fais partis de l'aventure Oxxeo. Cela m'a permis d'effectuer des missions variées atours de PHP et
      de Symfony, tout en m'améliorant sur plein d'autres technologies de développement front-end, de déploiement continue, ect...
      Découvrez en détail les missions que j'ai pu accomplir chez <NuxtLink to="/cv/oxxeo-jouve">Luminess (ex Jouve)</NuxtLink>,
      au <NuxtLink to="/cv/oxxeo-rectorat-rennes">Rectorat de Rennes</NuxtLink>, chez <NuxtLink to="/cv/oxxeo-additi">Additi</NuxtLink> et
      maintenant chez <NuxtLink to="/cv/oxxeo-nehs-digital">Nehs Digital</NuxtLink>.
    </template>
  </experience-detail>
</template>

<script setup lang="ts">
import ExperienceDetail from "~/components/cv/experienceDetail";

useMeta({
  title: 'Oxxeo'
})
</script>

<style scoped>

</style>
