<template>
  <div id="photo-page">
    <div id="expanded-view" :class="{'opened': isExpandedViewOpened}">
      <button @click="isExpandedViewOpened = false">
        <font-awesome-icon class="caret-right" :icon="['fas', 'xmark']"/>
      </button>
      <div id="expanded-image-container">
        <img :src="photoResponse.data.photo.url_b"/>
      </div>
    </div>
    <div id="photo-view">
      <div id="photo-container">
        <div id="photo-tools">
          <div id="icons">
            <button aria-label="Agrandir la photo" title="Agrandir" @click="isExpandedViewOpened = true">
              <font-awesome-icon :icon="['fas', 'expand']"/>
            </button>
            <a aria-label="Aller sur ma galerie Flickr"
               title="Voir sur Flickr"
               target="_blank"
               :href="photoResponse.data.photo.flickr_page">
              <font-awesome-icon :icon="['fab', 'flickr']"/>
            </a>
          </div>
        </div>
        <img :src="photoResponse.data.photo.url_m"/>
      </div>
    </div>
    <div>
      <h1>{{ photoResponse.data.photo.title }}</h1>
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
  return $fetch('http://localhost:4000/', {
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
  const specs = {
    'Longueur focale': photoResponse.value.data.photo.exifs.focalLength,
    'ISO': photoResponse.value.data.photo.exifs.iso,
    'Ouverture': 'f/' + photoResponse.value.data.photo.exifs.fNumber,
    'Temps d\'exposition': photoResponse.value.data.photo.exifs.exposureTime + ' s'
  }

  return Object.entries(specs)
      .filter(entry => typeof entry[1] === 'string' && entry[1].length > 0)
})

const isExpandedViewOpened = ref<boolean>(false)

useMeta({
  title: photoResponse.value.data.photo.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: photoResponse.value.data.photo.description
    }
  ]
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";

#photo-page {
  min-height: 100%;
  background-color: $bg1;
  display: flex;

  h1 {
    margin-top: 40px;
  }
}

#expanded-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $bg1;

  z-index: -1;
  opacity: 0;
  transition: opacity .1s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &.opened {
    z-index: 20;
    opacity: 1;
  }

  #expanded-image-container:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
    position: relative;
    margin: 40px;

    #photo-tools {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      #icons {
        position: absolute;
        bottom: 0;
        right: 45px;
        color: $bg1;
        opacity: 0;
        transition: opacity .1s;
      }

      &:hover #icons {
        opacity: 1;
      }

      button {
        border: none;
      }
    }
  }

  img {
    border: 40px solid white;
    display: block;
  }
}

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
</style>
