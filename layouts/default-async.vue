<template>
  <div>
    <layout-header/>
    <NuxtLoadingIndicator color="#55450d"/>
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
