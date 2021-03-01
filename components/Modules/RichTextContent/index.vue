<template>
  <div
    class="py-24"
    v-editable="blok"
    style="background:linear-gradient(to right, #FFF 0%, #FFF 30%, #F5F4F2 30%, #F5F4F2 100%)"
  >
    <div
      class="flex h-screen relative max-w-screen-lg mx-auto"
      :style="{
        'background-image': 'url(' + blok.image.filename + ')',
        'background-size': 'cover',
      }"
    >
      <div class="max-w-md bg-white p-16 self-end" :class="variationClasses">
        <h2 v-if="blok.title" v-html="blok.title" class="text-2xl"></h2>
        <div v-if="blok.content" v-html="blok.content" class="mt-2"></div>
        <Btn
          :blok="blok.blocks[0]"
          v-if="blok.blocks && blok.blocks.length"
          class="inline-block mt-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      variation: null,
    }
  },
  computed: {
    variationClasses() {
      // return this.$wind.box.base[this.blok.variation]

      if (this.blok.variation == 'content_left') {
        return this.$wind.box.base['content_left']
      } else {
        return this.$wind.box.base['content_right']
      }
    },
  },
}
</script>
