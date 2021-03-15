<template>
  <div :id="blok.id" class="md:flex flex-wrap text-center space-y-4">
    <div v-for="item in blok" :key="item._uid" class="w-1/3 m-auto">
      <div
        v-if="item.number"
        v-html="item.number"
        class="font-medium text-4xl"
      ></div>
      <div v-if="item.title" v-html="item.title.toUpperCase()" class="font-medium"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Array,
      default: null,
    },
  },
  computed: {
    rowClasses() {
      const mdRowWidth = Math.ceil(12 / this.blok.length - 1)
      return `w-1/${mdRowWidth}`
    },
  },
}
</script>
