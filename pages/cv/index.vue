<template>
  <div id="intro">
    <h1>Bienvenue sur mon CV</h1>
    <p>
      Développeur depuis 2016, ma carrière s'oriente principalement autours des technologies de PHP et de
      Symfony.<br>
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
</template>

<script setup lang="ts">
useMeta({
  title: 'CV',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mon CV'
    }
  ]
})
</script>

<style lang="scss" scoped>
@import "assets/breakpoints.scss";

#intro {
  padding: 0 15px;
  overflow-y: auto;

  @include phone-portrait {
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
