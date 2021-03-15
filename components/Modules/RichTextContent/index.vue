<template>
  <div
    class="py-0 my-12 md:my-0 md:py-24"
    v-editable="blok"
    style="
      background: linear-gradient(to right, #fff 0%, #fff 30%, #F5F4F2 30%, #F5F4F2 100%)
    "
  >
    <div class="container">
      <div
        class="flex pt-60 md:pt-0 md:h-screen relative"
        :style="{
          'background-image': 'url(' + blok.image.filename + ')',
          'background-size': 'cover',
          'background-position': 'right',
        }"
      >
        <div
          class="md:max-w-md bg-gray-100 md:bg-white p-7 sm:p-16 self-end"
          :class="variationClasses"
        >
          <h2 v-if="blok.title" v-html="blok.title" class="text-2xl uppercase tracking-widest mb-4"></h2>
          <div v-if="blok.content" v-html="blok.content" class="mt-2 font-semibold"></div>
          <Btn
            :blok="blok.blocks[0]"
            v-if="blok.blocks && blok.blocks.length"
            class="inline-block mt-4"
          />
        </div>
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
