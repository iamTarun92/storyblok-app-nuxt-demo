<template>
  <div :id="blok.id || blok._uid">
    <div :style="setHeroBackground()" class="h-64"></div>
    <div class="-mt-20 m-auto w-9/12">
      <div class="bg-white p-20 flex flex-col space-y-8 text-center">
        <h1
          v-if="blok.title"
          v-html="blok.title"
          class="uppercase font-medium text-3xl text-center"
        ></h1>
        <Statistics
          v-if="blok.statistics && blok.statistics.length"
          :blok="blok.statistics"
        />
        <div>{{ blok.content }}</div>
        <div v-if="blok.link && blok.link.length">
          <Btn :blok="blok.link[0]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from '~/components/Templates/Statistics'

export default {
  components: {
    Statistics,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setHeroBackground() {
      if (this.blok.image && this.blok.image.filename) {
        const bgUrl = this.blok.image.filename
        return {
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.34902) 0%, rgba(0, 0, 0, 0.0001) 100%), url(${bgUrl})`,
          backgroundSize: 'cover',
        }
      }

      return {}
    },
  },
}
</script>

<style></style>
