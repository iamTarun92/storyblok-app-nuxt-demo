<template>
  <div :id="blok.id || blok._uid">
    <div class="container m-auto my-10 py-20 lg:px-10">
      <h1 class="text-4xl relative mb-5 font-medium tracking-wide">
        {{ blok.title.toUpperCase() }}
      </h1>
      <div class="mt-10 space-x-2">
        <div class="carousel-controls flex justify-end space-x-1.5 mb-10">
          <button @click="prevArrow(getCarouselDomID())" class="rounded-full h-12 w-12 flex items-center justify-center bg-black text-white">
            <span>prev</span>
          </button>
          <button @click="nextArrow(getCarouselDomID())" class="rounded-full h-12 w-12 flex items-center justify-center bg-black text-white">
            <span>next</span>
          </button>
        </div>
        <VueSlickCarousel v-bind="settings" :ref="getCarouselDomID()" class="pl-20">
          <div v-for="(item, ind) in blok.items" :key="ind" class="pr-5">
            <div class="featured">
              <div class="featured-inner">
                <h2
                  class="flex featured-title relative text-lg font-bold uppercase tracking-wide"
                >
                  {{ item.title }}
                </h2>
                <div class="featured-content mt-3 leading-8 text-lg">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    }
  },
  props: {
    name: {
      type: String,
      default: 'FeaturedInBlock',
    },
    blok: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getCarouselDomID() {
      const _id = this.blok.id || this.blok._uid
      return `carousel-${_id}`
    },
    nextArrow(caro) {
      this.$refs[caro].next()
    },
    prevArrow(caro) {
      this.$refs[caro].prev()
    },
  },
}
</script>

<style scoped>
.featured-title::after {
  content: '';
  flex: 1 1;
  border-bottom: 1px solid #000;
  margin: auto 10px auto 10px;
}
</style>
