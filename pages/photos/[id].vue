<template>
  <div id="photo-page">
    <div id="photo-container">
      <img :src="data.data.photo.url_m"/>
    </div>
    <div>
      <h1>{{ data.data.photo.title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

import Photo from "~/ts/contracts/photos/Photo";

const route = useRoute()
const {data} = await useAsyncData<{ data: { photo: Photo } }>('get', () => {
  const query = `{
  photo(photoId:"` + route.params.id + `"){
    title
    url_m
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
console.log(data.value)
</script>

<style scoped lang="scss">
@import "assets/colors.scss";

#photo-page {
  min-height: 100%;
  background-color: $bg1;
  display: flex;
}

#photo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    border: 40px solid white;
    margin: 40px;
  }
}
</style>
