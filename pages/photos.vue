<template>
  <div id="photos-page">
    <div class="photo-container" v-for="photo in data.data.photoset.photos">
      <div class="photo-data">
        <div class="photo-title-container">
          <div class="photo-title">{{ photo.title }}</div>
        </div>
        <img :src="photo.url_m"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Photoset from "~/ts/contracts/photos/Photoset";

const config = useRuntimeConfig()

const {data} = await useAsyncData<{ data: { photoset: Photoset } }>('post', () => {
  const query = `{
  photoset{
    photos{
      url_m
      url_s
      title
      id
    }
  }
}`
  return $fetch('http://localhost:4000/', {
    method: 'POST',
    body: JSON.stringify({query})
  })
})

console.log(data.value.data.photoset)

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
  background-color: $bg1;
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
