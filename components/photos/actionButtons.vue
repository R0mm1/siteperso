<template>
  <div id="icons">
    <button class="icon" id="icon-expend" aria-label="Agrandir la photo" title="Agrandir" @click="$emit('expend')">
      <font-awesome-icon :icon="['fas', 'expand']"/>
      <span>Agrandir</span>
    </button>
    <a id="icon-view-flickr"
       class="icon asButton"
       aria-label="Aller sur ma galerie Flickr"
       title="Voir sur Flickr"
       target="_blank"
       :href="flickrPage">
      <font-awesome-icon :icon="['fab', 'flickr']"/>
      <span>Voir sur Flickr</span>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  flickrPage: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "assets/breakpoints.scss";

#icons {
  transition: opacity .1s;
  display: flex;

  .icon {
    margin-right: 15px;

    span {
      padding-left: 5px;
    }
  }

  @include phone-portrait {
    #icon-expend {
      display: none;
    }
  }
}
</style>
