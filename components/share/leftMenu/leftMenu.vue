<template>
  <div id="left-menu" :class="{'opened': opened}">
    <div id="close-left-menu">
      <button>
        <font-awesome-icon :icon="['fas', 'xmark']" @click="$emit('wanna-close')"/>
      </button>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  opened: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";

#left-menu {
  background-color: $bg1;
  padding-top: 5px;
  width: 250px;
  box-shadow: 2px 5px 5px $bg2;
  height: calc(100% - 5px);
  overflow-y: auto;

  @include phone-portrait {
    position: absolute;
    width: 100vw;
    left: calc(-100vw + 10px);

    &.opened{
      left: 0;
    }
  }
}

#close-left-menu {
  text-align: right;
  padding-right: 10px;
  display: none;

  @include phone-portrait {
    display: block;
  }
}
</style>
