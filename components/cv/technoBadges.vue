<template>
  <table id="techno-badges">
    <tr v-if="technoLanguage.length > 0" class="badges-row">
      <th class="badges-label">Langages</th>
      <td>
        <techno-badge v-for="technoBadge in technoLanguage" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoFramework.length > 0" class="badges-row">
      <th class="badges-label">Frameworks</th>
      <td>
        <techno-badge v-for="technoBadge in technoFramework" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoTemplating.length > 0" class="badges-row">
      <th class="badges-label">Templating</th>
      <td>
        <techno-badge v-for="technoBadge in technoTemplating" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoOs.length > 0" class="badges-row">
      <th class="badges-label">Systèmes d'exploitation</th>
      <td>
        <techno-badge v-for="technoBadge in technoOs" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoLibraries.length > 0" class="badges-row">
      <th class="badges-label">Librairies</th>
      <td>
        <techno-badge v-for="technoBadge in technoLibraries" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoDb.length > 0" class="badges-row">
      <th class="badges-label">Base de données</th>
      <td>
        <techno-badge v-for="technoBadge in technoDb" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoVersioning.length > 0" class="badges-row">
      <th class="badges-label">Versioning</th>
      <td>
        <techno-badge v-for="technoBadge in technoVersioning" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoCi.length > 0" class="badges-row">
      <th class="badges-label">Conteneurisation, CI/CD...</th>
      <td>
        <techno-badge v-for="technoBadge in technoCi" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoRouting.length > 0" class="badges-row">
      <th class="badges-label">Routage</th>
      <td>
        <techno-badge v-for="technoBadge in technoRouting" :badge="technoBadge"/>
      </td>
    </tr>
    <tr v-if="technoAuthentication.length > 0" class="badges-row">
      <th class="badges-label">Authentification</th>
      <td>
        <techno-badge v-for="technoBadge in technoAuthentication" :badge="technoBadge"/>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import {
  Badge, BadgeAuthentication,
  BadgeCi,
  BadgeDb,
  BadgeFramework,
  BadgeLanguage,
  BadgeLibraries,
  BadgeOs, BadgeRouting,
  BadgeTemplating, BadgeVersioning
} from "~/ts/contracts/cv/Badge";
import TechnoBadge from "~/components/share/technoBadge.vue";

defineProps({
  technoLanguage: {
    type: Array as PropType<BadgeLanguage[]>,
    required: false,
    default: () => []
  },
  technoFramework: {
    type: Array as PropType<BadgeFramework[]>,
    required: false,
    default: () => []
  },
  technoTemplating: {
    type: Array as PropType<BadgeTemplating[]>,
    required: false,
    default: () => []
  },
  technoOs: {
    type: Array as PropType<BadgeOs[]>,
    required: false,
    default: () => []
  },
  technoLibraries: {
    type: Array as PropType<BadgeLibraries[]>,
    required: false,
    default: () => []
  },
  technoDb: {
    type: Array as PropType<BadgeDb[]>,
    required: false,
    default: () => []
  },
  technoVersioning: {
    type: Array as PropType<BadgeVersioning[]>,
    required: false,
    default: () => []
  },
  technoCi: {
    type: Array as PropType<BadgeCi[]>,
    required: false,
    default: () => []
  },
  technoRouting: {
    type: Array as PropType<BadgeRouting[]>,
    required: false,
    default: () => []
  },
  technoAuthentication: {
    type: Array as PropType<BadgeAuthentication[]>,
    required: false,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
@import "assets/breakpoints.scss";
@import "assets/colors.scss";

@include phone-portrait-big {
  .badges-row:not(:last-of-type) {
    th, td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
}

.badges-label {
  padding-right: 15px;
  text-align: left;
  font-weight: 500;
}
</style>
