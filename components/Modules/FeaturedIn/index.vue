<template>
  <div :id="blok.id || blok._uid" class="py-12">
    <div class="container">
      <h1 class="text-4xl relative mb-5 font-medium tracking-wide">
        {{ blok.title.toUpperCase() }}
      </h1>
      <div class="my-14 space-x-2">
        <div class="carousel-controls flex md:justify-end space-x-1.5 mb-10">
          <button
            @click="prevArrow(getCarouselDomID())"
            class="transform rotate-180 border-4 border-black flex h-12 items-center justify-center p-3 rounded-full w-12"
          >
            <span
              ><svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="play circle"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-play-circle prev b-icon bi"
              >
                <g transform="translate(8 8) scale(2 2) translate(-8 -8)">
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  ></path>
                  <path
                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                  ></path>
                </g></svg
            ></span>
          </button>
          <button
            @click="nextArrow(getCarouselDomID())"
            class="border-4 border-black flex h-12 items-center justify-center p-3 rounded-full w-12"
          >
            <span
              ><svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="play circle"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-play-circle prev b-icon bi"
              >
                <g transform="translate(8 8) scale(2 2) translate(-8 -8)">
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  ></path>
                  <path
                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                  ></path>
                </g></svg
            ></span>
          </button>
        </div>
        <VueSlickCarousel
          v-bind="settings"
          :ref="getCarouselDomID()"
        >
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
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
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
