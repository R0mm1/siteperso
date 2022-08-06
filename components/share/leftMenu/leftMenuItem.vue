<template>
  <div class="left-menu-item" :style="{'margin-left': (indent*15)+'px'}" :class="{'enhanced': isEnhanced}">
    <NuxtLink :to="page" class="main-data">
      <div class="title">
        <slot name="title"/>
      </div>
      <div class="subtitle">
        <slot name="subtitle"/>
      </div>
    </NuxtLink>
    <div class="children">
      <slot name="children"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {enhanced} from "~/ts/components/MenuEnhanceSelectedElement";

const props = defineProps({
  page: {
    type: String,
    required: true
  },
  indent: {
    type: Number,
    required: false,
    default: 0
  }
})

const {isEnhanced} = enhanced(props.page)

</script>

<style scoped lang="scss">
@import "assets/colors.scss";

.left-menu-item {
  margin-bottom: 20px;
  padding: 0 5px 0 5px;

  .main-data {
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    .title{
      font-weight: 700;
      padding-bottom: 3px;
    }
  }

  .children{
    margin-top: 1em;
  }

  &.isChild {
    padding-right: 10px;
  }

  &.enhanced {
    border-right: 3px solid $border-clear;
  }
}

.subtitle {
  font-size: .9em;
}
</style>
