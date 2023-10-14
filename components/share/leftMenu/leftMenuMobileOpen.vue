<template>
  <button id="display-experiences">
    <font-awesome-icon class="caret-right" :icon="['fas', 'caret-left']"/>
    <slot/>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "assets/breakpoints";

#display-experiences {
  margin-left: 25px;
  margin-top: 5px;
  display: none;

  @include phone-portrait-big {
    display: block;
  }
}
</style>
