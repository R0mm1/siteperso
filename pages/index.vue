<template>
  <div id="index-page">
    <div id="top"/>
    <div id="pres">
      <h1>
        Bienvenue sur mon site!
      </h1>
      <p>
        Je m'appelle Romain, et je suis développeur web. Mais ce n'est pas juste un métier, c'est aussi une passion!<br>
        Sur ce site, vous pourrez découvrir
        <NuxtLink to="/cv">mon CV</NuxtLink>
        et
        <NuxtLink to="/projets">mes projets personnels</NuxtLink>
        .<br>
        Mais il n'y a pas que le code dans ma vie! La photographie y a aussi une place importante. N'hésitez pas à aller
        faire un tour dans <NuxtLink to="/photos">ma galerie</NuxtLink>!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Romain QUENTEL',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Site personnel de Romain QUENTEL'
    }
  ]
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";

#index-page {
  background: $bg1;
  height: 100%;
}

#top {
  height: 60%;
  background-image: url("/capfrehel.webp");
  background-position: center;
  background-size: cover;
  position: relative;
  border-bottom: 1px solid $border-clear;
}

#pres {
  position: absolute;
  top: 60%;
  width: 50%;
  left: 25%;
  background: $bg2;
  transform: translateY(-50%);
  padding: 0 15px 15px 15px;
  border: 2px solid $border-clear;
  border-radius: 5px;

  @include phone-portrait-big{
    width: calc(90% - 30px);
    left: 5%;
  }

  a{
    color: $font;
  }
}
</style>
