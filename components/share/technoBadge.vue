<template>
  <div class="techno-badge" :class="classes">
    <span class="techno-badge-label">{{ getLabel }}</span>
    <span class="techno-badge-versions" v-if="hasVersions">
      {{ versions }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {Badge} from "~/ts/contracts/cv/Badge";

const props = defineProps({
  badge: Object as PropType<Badge>
})

const getLabel = computed(() => {
  return props.badge.label ?? props.badge.techno
})

const versions = computed(() => {
  return props.badge.versions.join(', ')
})

const hasVersions = computed(()=>{
  return typeof props.badge.versions !== 'undefined' && props.badge.versions.length > 0
})

const classes = computed(() => {
  const classes = {
    'no-version': !hasVersions.value
  }
  classes[props.badge.techno] = true
  return classes
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";

.techno-badge {
  display: inline-block;
  padding: 5px;
  border-radius: 2px;
  margin-right: 15px;
  min-width: 2em;
  color: black;
  border: 1px solid transparent;

  @include phone-portrait-big{
    margin-bottom: 2px;
    margin-top: 2px;
  }

  &.other{
    border: 1px solid rgba(255, 255, 255, .3);
    color: $font;
  }

  &.php {
    background-color: #8892BF;
  }

  &.js{
    background-color: #f5e11b;
  }

  &.ts{
    background-color: #3178c6;
  }

  &.html{
    background-color: #e54c21;
  }

  &.css{
    background-color: #536fe4;
  }

  &.scss{
    background-color: #cf649a;
  }

  &.symfony{
    background-color: #bbbeba;
  }

  &.angular{
    background-color: #f71749;
  }

  &.angularjs{
    background-color: #a66464;
  }

  &.vuejs{
    background-color: #43b684;
  }

  &.nuxt{
    background-color: #00dc82;
  }

  &.smarty{
    background-color: #f0c040;
  }

  &.twig{
    background-color: #bacf29;
  }

  &.windows{
    background-color: #05a6f1;
  }

  &.ubuntu{
    background-color: #b25b9c;
  }

  &.fedora{
    background-color: #52a2da;
  }

  &.debian{
    background-color: #bc5170;
  }

  &.jquery{
    background-color: #0769ad;
  }

  &.mysql{
    background-color: #018aa8;
  }

  &.postgresql{
    background-color: #4b7fa9;
  }

  &.mongodb{
    background-color: #00ed64;
  }

  &.git{
    background-color: #f54c27;
  }

  &.gitlab{
    background-color: #ee6429;
  }

  &.jenkins{
    background-color: #f0d6b7;
  }

  &.ansible{
    background-color: #5bbdbf;
  }

  &.docker{
    background-color: #309cef;
  }

  &.kubernetes{
    background-color: #4c84f7;
  }

  &.k3d{
    background-color: #02a6f2;
  }

  &.nginx{
    background-color: #009639;
  }

  &.traefik{
    background-color: #24a1c1;
  }

  &.oauth2{
    background-color: #d5d5d5;
  }

  &.keycloak{
    background-color: #00b8e3;
  }
}

.techno-badge-label {
  border-right: 1px solid rgba(255, 255, 255, .3);
  padding-right: 3px;
  margin-right: 3px;
}

.techno-badge.no-version .techno-badge-label {
  width: 100%;
  text-align: center;
  border-right: none;
  display: inline-block;
}

.techno-badge-versions {
  font-size: .8em;
  display: inline-block;
}
</style>
