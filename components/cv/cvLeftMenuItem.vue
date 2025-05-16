<template>
  <left-menu-item :page="item.page" :indent="indent">
    <template v-slot:title>
      {{ item.title }}
    </template>
    <template v-slot:subtitle>
      <span class="start-date">
          {{ months[item.startDate.getMonth()] }} {{ item.startDate.getFullYear() }}
        </span>
      <span class="end-date">
          <font-awesome-icon class="caret-right" :icon="['fas', 'caret-right']"/>
          <template v-if="item.endDate !== null">
            {{ months[item.endDate.getMonth()] }} {{ item.endDate.getFullYear() }}
          </template>
          <template v-else>Aujourd'hui</template>
        </span>
    </template>
    <template v-slot:children>
      <cvLeftMenuItemChild v-for="child in item.children" :key="child.title" :indent="indent+1"
                           :item="child"/>
    </template>
  </left-menu-item>
</template>

<script setup lang="ts">
import LeftMenuItem from "~/components/share/leftMenu/leftMenuItem.vue";
import {defineAsyncComponent, type PropType} from "vue";
import type Experience from "~/ts/contracts/cv/Experience";

const cvLeftMenuItemChild = defineAsyncComponent(() => import('./cvLeftMenuItem.vue'))

defineProps({
  item: {
    type: Object as PropType<Experience>,
    required: true
  },
  indent: {
    type: Number,
    required: false,
    default: 0
  }
})

const months = {
  0: 'janvier',
  1: 'février',
  2: 'mars',
  3: 'avril',
  4: 'mai',
  5: 'juin',
  6: 'juillet',
  7: 'août',
  8: 'septembre',
  9: 'octobre',
  10: 'novembre',
  11: 'décembre',
}
</script>

<style scoped lang="scss">
@import "assets/colors.scss";

.caret-right {
  margin: 0 3px;
}
</style>

