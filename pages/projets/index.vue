<template>
  <div id="intro">
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
</template>

<script setup lang="ts">
useMeta({
  title: 'Projets',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Découvrez mes projets personnels'
    }
  ]
})
</script>

<style scoped lang="scss">
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
