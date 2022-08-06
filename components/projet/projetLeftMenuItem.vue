<template>
  <left-menu-item :page="item.page" :indent="0">
    <template v-slot:title>
      {{item.title}}
    </template>
    <template v-slot:subtitle>
      {{item.subtitle}}
    </template>
  </left-menu-item>
</template>

<script setup lang="ts">
import LeftMenuItem from "~/components/share/leftMenu/leftMenuItem.vue";
import LeftMenuItemObject from '~/ts/contracts/components/leftMenu/LeftMenuItem';
import {PropType} from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<LeftMenuItemObject>,
    required: true
  }
})
</script>

<style scoped>

</style>
