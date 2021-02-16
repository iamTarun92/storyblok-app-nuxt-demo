<template>
  <div>
    <div class="-mt-20 m-auto w-9/12 py-20">
      <div class="flex space-x-8">
        <div>
          <div
            v-if="blok.image1 && blok.image1.filename"
            :style="{
              'background-image': `url(${blok.image1.filename})`,
              'background-size': 'cover',
            }"
            class="h-screen"
          ></div>
          <div class="bg-white -mt-20 w-11/12 p-10 pl-0 space-y-6">
            <h3
              v-if="blok.title1"
              v-html="blok.title1"
              class="text-3xl uppercase whitespace-pre"
            ></h3>
            <div v-if="blok.content1" v-html="blok.content1"></div>
            <div v-if="blok.link1 && blok.link1.length">
              <Btn :blok="blok.link1[0]" />
            </div>
          </div>
        </div>

        <div class="mt-20 flex flex-col">
          <div
            v-if="blok.image2 && blok.image2.filename"
            :style="{
              'background-image': `url(${blok.image2.filename})`,
              'background-size': 'cover',
            }"
            class="h-screen"
          ></div>
          <div class="bg-white -mt-20 w-11/12 p-10 pr-0 space-y-6 self-end">
            <h3
              v-if="blok.title2"
              v-html="blok.title2"
              class="text-3xl uppercase whitespace-pre"
            ></h3>
            <div v-if="blok.content2" v-html="blok.content2"></div>
            <div v-if="blok.link2 && blok.link2.length">
              <Btn :blok="blok.link2[0]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'RichText-DoubleBlocks',
    },
    blok: {
      type: Object,
      default: null,
    },
  },
  methods: {
    setHeroBackground(image) {
      if (this.blok.image && this.blok.image.filename) {
        const bgUrl = this.blok.image.filename
        return {
          background: `url(${bgUrl})`,
          backgroundSize: 'cover',
        }
      }

      return {}
    },
  },
}
</script>
