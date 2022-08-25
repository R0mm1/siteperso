<template>
<div>
    <img :src="photo.url_s" v-for="photo in data.data.photoset.photos"/>
</div>
</template>

<script setup lang="ts">

import Photoset from "~/ts/contracts/photos/Photoset";

const config = useRuntimeConfig()

const {data} = await useAsyncData<{ data: {photoset: Photoset} }>('post', () => {
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

<style scoped>

</style>
