<template>
  <div id="photos-page" :class="{'err': error}">
    <div class="photo-container" v-if="!error" v-for="photo in data.data.photoset.photos">
      <NuxtLink :to="'/photos/'+photo.id" class="photo-data">
        <div class="photo-title-container">
          <div class="photo-title">{{ photo.title }}</div>
        </div>
        <img :src="photo.url_m"/>
      </NuxtLink>
    </div>

    <div v-if="error">
      Une erreur s'est produite lors de la récupération des photos...<br>
      Mais vous pouvez toujours visiter ma <a href="https://www.flickr.com/photos/169546193@N04/" target="_blank">galerie Flickr!</a>
    </div>
  </div>
</template>

<script setup lang="ts">

import Photoset from "~/ts/contracts/photos/Photoset";

const config = useRuntimeConfig()

const {data, pending, error} = await useAsyncData<{ data: { photoset: Photoset } } | null>('photos-page', () => {
  const query = `{
  photoset{
    photos{
      url_m
      width_m
      height_m
      title
      id
    }
  }
}`
  return $fetch(config.public.backendUrl, {
    method: 'POST',
    body: JSON.stringify({query})
  })
})

useMeta({
  title: 'Photos',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Découvrez mon portfolio'
    }
  ]
})
</script>

<style scoped lang="scss">
@import "assets/colors.scss";
@import "assets/breakpoints.scss";

$imgBorder: 30px;
$imgBorderMobile: 10px;

#photos-page{
  min-height: 100%;
  background-color: $bg1;

  &.err{
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }

  &:not(.err){
    display: grid;
    grid-template-columns: auto auto auto auto;

    //max-width to have x columns = x*imgWidth+x(2*imgBorder)+x<pretty margin of 10px at least between photos>
    @media (max-width: 1480px) {
      grid-template-columns: auto auto auto;
    }

    @media (max-width: 1110px) {
      grid-template-columns: auto auto;
    }

    @media (max-width: 740px) {
      grid-template-columns: auto;
    }
  }
}

.photo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.photo-data{
  position: relative;

  .photo-title-container{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: $bg1;
  }

  .photo-title{
    height: $imgBorder;
    line-height: $imgBorder;
    opacity: 0;
    transition: opacity .1s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 $imgBorder;

    @include phone-portrait{
      margin: 0 $imgBorderMobile;
      background: linear-gradient(0deg, #dcdcdc 10px, transparent);
    }
  }

  &:hover .photo-title{
    opacity: 1;
  }
}

img{
  max-width: 300px;
  max-height: 350px;
  border: $imgBorder solid $font;
  display: block;

  @include phone-portrait{
    border-width: $imgBorderMobile;
  }
}
</style>
