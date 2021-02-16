<template>
  <div :id="blok.id" class="flex flex-wrap">
    <div
      v-for="item in blok"
      :key="item._uid"
      :class="rowClasses()"
      class="text-center"
    >
      <div v-if="item.number" v-html="item.number" class="font-medium text-4xl"></div>
      <div v-if="item.title" v-html="item.title" class="font-medium"></div>
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
  methods: {
    rowClasses() {
      const mdRowWidth = Math.ceil(12 / this.blok.length-1)

      return `w-1/${mdRowWidth}`
    },
  },
}
</script>
