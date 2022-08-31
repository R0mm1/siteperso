<template>
  <div>
    <header>
      <NuxtLink id="title" to="/">Romain Quentel</NuxtLink>
      <div id="main-menu-icon" @click="isMenuOpened = !isMenuOpened">
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </div>
      <div id="main-menu" ref="menuRef" :class="{'isOpened': isMenuOpened}">
        <div id="navigation-menu">
          <NuxtLink @click="isMenuOpened = false" to="/photos">Photos</NuxtLink>
          <NuxtLink @click="isMenuOpened = false" to="/projets">Projets</NuxtLink>
          <NuxtLink @click="isMenuOpened = false" to="/cv">CV</NuxtLink>
        </div>
        <div id="ext-link-menu">
          <a aria-label="Aller vers mon profil Linkedin" title="Linkedin" target="_blank" href="https://www.linkedin.com/in/romain-q-7a168915b">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
          <a aria-label="Aller vers ma page Github" title="Github" target="_blank" href="https://github.com/R0mm1">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
          <a aria-label="Aller sur ma galerie Flickr" title="Flickr" target="_blank" href="https://www.flickr.com/photos/169546193@N04/">
            <font-awesome-icon :icon="['fab', 'flickr']"/>
          </a>
        </div>
      </div>
    </header>
    <div class="content">
      <slot/>
    </div>

  </div>
</template>

<script setup lang="ts">
import {onClickOutside} from '@vueuse/core'

const isMenuOpened = ref(false)

const menuRef = ref(null)
onClickOutside(
    menuRef,
    (e) => {
      if((e.target as HTMLElement).closest('#main-menu-icon') === null){
        isMenuOpened.value = false
      }
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

button {
  background: transparent;
  border: 1px solid $gold;
  border-radius: 5px;
  color: inherit;
  padding: 10px 15px;
}

a {
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
    display: flex;
    flex-grow: 1;

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
    }
  }

  #navigation-menu {
    flex-grow: 1;

    @include phone-portrait {
      display: flex;
      flex-direction: column;

      a {
        margin: 0 !important;
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

  #ext-link-menu {
    @include phone-portrait {
      text-align: center;
      a {
        margin: 0 10px !important;
        font-size: 1.2em;
      }
    }

    a {
      margin: 0 7px;
    }
  }
}

.content {
  height: calc(100vh - $headerHeight - $headerPadding - $headerPadding - $headerBorderBottomHeight);
}

</style>
