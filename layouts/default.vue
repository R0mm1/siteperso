<template>
  <div>
    <header>
      <NuxtLink id="title" to="/">Romain Quentel</NuxtLink>
      <div id="main-menu-icon" @click="isMenuOpened = !isMenuOpened">
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </div>
      <div id="main-menu" ref="menuRef" :class="{'isOpened': isMenuOpened}">
        <a @click="isMenuOpened = false" target="_blank" href="https://www.flickr.com/photos/169546193@N04/">Photos</a>
        <NuxtLink @click="isMenuOpened = false" to="/projets">Projets</NuxtLink>
        <NuxtLink @click="isMenuOpened = false" to="/cv">CV</NuxtLink>
      </div>
    </header>
    <div class="content">
      <slot/>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const isMenuOpened = ref(false)

const menuRef = ref(null)
onClickOutside(
    menuRef,
    () => {
      isMenuOpened.value = false
    },
)
</script>

<style lang="scss">
@import "assets/colors";

@font-face {
  font-family: louis_george_cafe;
  src: url("/Louis_George_Cafe.ttf");
}

body {
  font-family: louis_george_cafe, sans-serif;
  margin: 0;
  color: $font;
}

button{
  background: transparent;
  border: 1px solid $gold;
  border-radius: 5px;
  color: inherit;
  padding: 10px 15px;
}

a{
  color: inherit;
}
</style>
<style scoped lang="scss">
@import "assets/colors";
@import "assets/breakpoints.scss";

$headerHeight: 2.5em;
$headerPadding: 5px;
$headerBorderBottomHeight: 1px;

header {
  width: calc(100% - $headerPadding - $headerPadding);
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
  padding: $headerPadding;
  background-color: $bg1;
  border-bottom: $headerBorderBottomHeight solid $gold;

  #title {
    font-size: 2em;
    color: inherit;
    text-decoration: none;
  }

  #main-menu-icon {
    display: none;
    position: absolute;
    width: 100px;
    text-align: center;
    right: 0;

    @include phone-portrait {
      display: inline-block;
    }
  }

  #main-menu {
    @include phone-portrait {
      position: absolute;
      top: calc($headerHeight + $headerPadding + $headerPadding);
      background-color: $bg1;
      z-index: 2;
      display: flex;
      flex-direction: column;
      right: 0;
      border: 1px solid $gold;

      &:not(.isOpened) {
        display: none;
      }

      a {
        margin: 0 !important;
        width: 100px;
        text-align: center;
      }
    }

    a {
      font-size: 1.2em;
      margin: 20px;
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid $border;
    }
  }
}

.content {
  height: calc(100vh - $headerHeight - $headerPadding - $headerPadding - $headerBorderBottomHeight);
}

</style>
