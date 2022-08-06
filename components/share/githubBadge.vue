<template>
  <div class="github-badge">
    <font-awesome-icon :icon="['fab', 'github']"/>
    <a target="_blank" :href="'https://github.com/' + link">Voir sur Github</a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";

.github-badge {
  padding: 3px;
  border: 1px solid $font;
  border-radius: 3px;
  display: inline-block;

  a {
    text-decoration: none;
    padding-left: 3px;
  }
}
</style>
