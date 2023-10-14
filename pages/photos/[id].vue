<template>

  <div id="photo-page">

    <div id="photo-view">

      <div id="navigate-previous-container" class="navigation-container">
        <NuxtLink
            v-if="photoResponse.data.photo.previous"
            :to="'/photos/'+photoResponse.data.photo.previous"
            id="navigate-previous"
            class="icon asButton navigation-button"
            :class="{'navigation-button-hidden': typeof photoResponse.data.photo.previous !== 'string'}"
            aria-label="Photo précédente"
            title="Photo précédente">
          <ClientOnly>
            <font-awesome-icon class="caret-right" :icon="['fas', 'caret-left']"/>
          </ClientOnly>
        </NuxtLink>
      </div>

      <div id="photo-container">
        <div id="photo">
          <div id="photo-tools"></div>
          <img ref="photo" @load="onImageLoaded" :class="{'loaded': imageLoaded}" :src="photoResponse.data.photo.url_b" :alt="photoResponse.data.photo.title"/>
          <div id="photo-loader" v-if="!imageLoaded"/>
        </div>
      </div>

      <div id="navigate-next-container" class="navigation-container">
        <NuxtLink
            v-if="photoResponse.data.photo.next"
            :to="'/photos/'+photoResponse.data.photo.next"
            id="navigate-next"
            class="icon asButton navigation-button"
            :class="{'navigation-button-hidden': typeof photoResponse.data.photo.next !== 'string'}"
            aria-label="Photo suivante"
            title="Photo suivante">
          <ClientOnly>
            <font-awesome-icon class="caret-right" :icon="['fas', 'caret-right']"/>
          </ClientOnly>
        </NuxtLink>
      </div>

    </div>

    <div id="photo-details">

      <h1>{{ photoResponse.data.photo.title }}</h1>

      <p v-if="photoResponse.data.photo.description.length > 0">
        {{ photoResponse.data.photo.description }}
      </p>

      <a id="view-flickr"
         class="icon asButton"
         :aria-label="'Voir la photo '+photoResponse.data.photo.title+' sur Flickr'"
         :title="'Voir la photo '+photoResponse.data.photo.title+' sur Flickr'"
         target="_blank"
         :href="photoResponse.data.photo.flickr_page">
        <ClientOnly>
          <font-awesome-icon :icon="['fab', 'flickr']"/>
        </ClientOnly>
        <span>Voir sur Flickr</span>
      </a>

      <div id="tech-details">
        <div id="camera-lens">{{ cameraLens }}</div>
        <table>
          <ClientOnly>
            <tr v-for="spec in specs">
              <th>{{ spec[0] }}</th>
              <td>{{ spec[1] }}</td>
            </tr>
          </ClientOnly>
        </table>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import Photo from "~/ts/contracts/photos/Photo";
import { onMounted, ref } from 'vue'

const config = useRuntimeConfig()
const route = useRoute()

type response = { data: { photo: Photo } }
const {data: photoResponse} = await useAsyncData<response>('photo-page-' + route.params.id, () => {
  const query = `{
  photo(photoId:"` + route.params.id + `"){
    title
    url_m
    url_b
    description
    flickr_page
    next
    previous
    exifs{
      iso
      lens
      focalLength
      camera
      exposureTime
      fNumber
    }
  }
}`
  return $fetch(config.public.backendUrl, {
    method: 'POST',
    body: JSON.stringify({query})
  })
})

const cameraLens = computed(() => {
  const data = []
  const camera = photoResponse.value.data.photo.exifs.camera
  const lens = photoResponse.value.data.photo.exifs.lens
  if (typeof camera === 'string' && camera.length > 0) {
    data.push(camera)
  }

  if (typeof lens === 'string' && lens.length > 0) {
    data.push(lens)
  }

  return data.join(' + ')
})

const specs = computed(() => {
  const exifs = photoResponse.value.data.photo.exifs
  const specs = {
    'Longueur focale': exifs.focalLength,
    'ISO': exifs.iso,
    'Ouverture': exifs.fNumber ? 'f/' + exifs.fNumber : null,
    'Temps d\'exposition': exifs.exposureTime ? exifs.exposureTime + ' s' : null
  }

  return Object.entries(specs)
      .filter(entry => typeof entry[1] === 'string' && entry[1].length > 0)
})

// *** Handle the image loader *** //

//Wait for the image to be loaded
const imageLoaded = ref(false)
function onImageLoaded(){
  imageLoaded.value = true
}

//If the image is already in the cache, the load event won't be triggered, so we check here the value of the complete
//property
const photo = ref(null) // The var name must match the ref value in the html
onMounted(()=>{
  imageLoaded.value = photo.value.complete
})

// *** End Handle the image loader *** //

useHead({
  title: photoResponse.value.data.photo.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: photoResponse.value.data.photo.description
    }
  ]
})

definePageMeta({
  layout: 'default-async'
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";
@import "assets/headerDimensions.scss";

$paddingTop: 40px;
$h1LineHeight: 40px;
$separatorSpaceAround: 30px;

$navigationMinWidth: 50px;
$navigationMargin: 15px;

#photo-page {
  padding-top: $paddingTop;
  height: calc(100% - $paddingTop);
  width: 100%;
  background-color: $bg1;
  overflow: auto;
}

#photo-view {
  display: flex;

  #photo-container {
    --photoBorder: 40px;

    @include phone-portrait-big {
      --photoBorder: 30px;
    }

    @include phone-portrait-medium {
      --photoBorder: 20px;
    }

    @include phone-portrait-medium {
      --photoBorder: 10px;
    }

    flex: 1;
    text-align: center;

    #photo {
      position: relative;
      display: flex;
      height: calc($remainingWindowHeight - $paddingTop - $h1LineHeight - $separatorSpaceAround - $separatorSpaceAround - $separatorSpaceAround);
      max-width: calc(100vw - $navigationMinWidth - $navigationMinWidth - $navigationMargin - $navigationMargin);
    }

    #photo img {

      max-height: calc(100% - var(--photoBorder) - var(--photoBorder));
      max-width: calc(100% - var(--photoBorder) - var(--photoBorder));
      border: var(--photoBorder) solid $font;
      margin: auto;
      transition: all .1s;
      display: none;

      &.loaded{
        display: initial;
      }
    }

    #photo-tools{
      width: 100%;
      height: 100%;
      position: absolute;
    }

    #photo-loader{
      background-color: $bg1;
      background-image: url("/loader.svg");
      background-size: 50px;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
    }
  }

  .navigation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: $navigationMinWidth;
  }

  #navigate-previous-container {
    margin-left: $navigationMargin;
    align-items: start;
  }

  #navigate-next-container {
    margin-right: $navigationMargin;
    align-items: end;
  }
}

#photo-details {
  margin: $separatorSpaceAround 10px 0 10px;

  &::before {
    content: " ";
    display: block;
    height: 1px;
    background: linear-gradient(to right, $border, 50%, transparent);
    width: 50%;
  }

  h1 {
    line-height: $h1LineHeight;
    margin: $separatorSpaceAround 0;
  }

  #view-flickr {
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 1rem;

    span {
      padding-left: 5px;
    }
  }

  #tech-details {
    font-size: .9rem;
    line-height: 1.3rem;
    margin-bottom: 1rem;
    border-collapse: collapse;

    #camera-lens {
      line-height: 1.5rem;
    }

    th {
      text-align: left;
      padding-right: 15px;
      padding-left: 0;
    }
  }
}
</style>
