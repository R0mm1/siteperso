<template>
  <div>
    <layout-header/>
    <div id="layout-content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from '~/components/layout/header.vue'
</script>

<style lang="scss">
@import "assets/layout/default";
</style>
