<template>
  <div class="experience-detail">
    <h1>
      <slot name="title"/>
    </h1>
    <h2>
      <slot name="dates"/>
    </h2>
    <p>
      <slot name="intro"/>
    </p>
    <div>
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "assets/breakpoints";

$xpDetailsPaddingX: 15px;

.experience-detail {
  padding: 0 $xpDetailsPaddingX;
  overflow-y: auto;

  @include phone-portrait-big{
    width: calc(100vw - 10px - $xpDetailsPaddingX - $xpDetailsPaddingX - 5px);
    margin-left: 10px;
  }
}
</style>
