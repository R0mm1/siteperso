<template>
  <div id="photo-page">
    <div id="expanded-view" :class="{'opened': isExpandedViewOpened}">
      <button @click="isExpandedViewOpened = false">
        <font-awesome-icon class="caret-right" :icon="['fas', 'xmark']"/>
      </button>
      <div id="expanded-image-container">
        <img :src="photoResponse.data.photo.url_b" :alt="photoResponse.data.photo.title"/>
      </div>
    </div>
    <div id="photo-view">
      <div id="photo-container">
        <div id="photo-tools"></div>
        <div id="photo">
          <img :src="photoResponse.data.photo.url_m" :alt="photoResponse.data.photo.title"/>
        </div>
      </div>
    </div>
    <div id="photo-info">
      <h1>{{ photoResponse.data.photo.title }}</h1>
      <action-buttons :flickr-page="photoResponse.data.photo.flickr_page" @expend="isExpandedViewOpened = true"/>
      <p>
        {{ photoResponse.data.photo.description }}
      </p>
      <div id="tech-details">
        <div id="camera-lens">{{ cameraLens }}</div>
        <table>
          <tr v-for="spec in specs">
            <th>{{ spec[0] }}</th>
            <td>{{ spec[1] }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Photo from "~/ts/contracts/photos/Photo";
import ActionButtons from "~/components/photos/actionButtons.vue";

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

const isExpandedViewOpened = ref<boolean>(false)

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

#photo-page {
  height: 100%;
  background-color: $bg1;
  display: flex;
  overflow: auto;

  @include phone-portrait {
    flex-direction: column;
  }

  @include desktop {
    h1 {
      margin-top: 40px;
    }
  }
}

#expanded-view {

  @include phone-portrait {
    display: none;
  }

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: $bg1;

  z-index: -1;
  opacity: 0;
  transition: opacity .1s;

  display: flex;
  justify-content: center;
  text-align: center;

  &.opened {
    z-index: 20;
    opacity: 1;
  }

  #expanded-image-container {
    display: flex;
    max-height: 100%;

    &:before {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    img {
      display: block;
      max-height: 100%;
      margin: auto;
    }
  }

  button {
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 21;
  }
}

#photo-view {

  #photo-container {
    display: flex;
    position: relative;

    @include desktop {
      height: $remainingWindowHeight;
    }

    @include phone-portrait {
      flex-direction: column;
    }

    #photo-tools {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      &:hover #icons {
        opacity: 1;
      }
    }

    @include desktop{
      #photo{
        height: $remainingWindowHeight;
      }
    }

    img {
      display: block;
      transition: all .1s;

      @include desktop {
        --border-height: 40px;

        @media (max-height: 600px) {
          --border-height: 20px;
        }

        @media (max-height: 500px) {
          --border-height: 10px;
        }

        margin: var(--border-height);
        margin-top: 40px;
        border: var(--border-height) solid $font;
        max-height: calc(100% - var(--border-height) -  var(--border-height) - var(--border-height) - 40px);
      }

      @include phone-portrait {
        margin: 0;
        border: 10px solid;
        max-width: calc(100vw - 20px);
        max-height: calc($remainingWindowHeight - 50px);
      }
    }
  }
}

#photo-info {
  padding-left: 15px;

  #tech-details {
    font-size: .9rem;
    line-height: 1.3rem;

    #camera-lens {
      line-height: 1.5rem;
    }

    th {
      text-align: left;
    }
  }
}


</style>
