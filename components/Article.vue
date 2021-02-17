<template>
  <div>
    <div v-editable="blok" class="prose my-24 mx-auto">
      <h1 class="text-2xl">{{ blok.name }}</h1>
      <p class="mb-10">{{ blok.intro }}</p>
      <img class="w-5/12" :src="blok.image.filename" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
