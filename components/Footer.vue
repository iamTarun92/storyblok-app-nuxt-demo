<template>
  <footer class="py-28 text-white" :class="name">
    <div class="container mx-auto lg:px-10">
      <div class="footer-row-first lg:flex flex-wrap">
        <div class="item flex-1">
          <a v-if="blok.homeImage">
            <img :src="blok.homeImage.filename" />
          </a>
        </div>
        <div class="item flex-1">
          <div
            v-if="blok.copyrightNavItems"
            v-for="(itemList, index) in blok.copyrightNavItems"
            v-bind:key="index"
          >
            <div v-for="(item, index) in itemList.buttons" :key="index">
              <nuxt-link to="" class="text-white">
                {{ item.linkLabel }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="item whitespace-pre-line flex-1 text-white">
          {{ blok.disclaimer[0].content }}
        </div>
        <div class="item flex-1">
          <ul v-if="blok.socialLinks">
            <li v-for="(link, index) in blok.socialLinks" :key="index">
              <a :href="link.url" target="_blank" class="text-white">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-row-second flex justify-between mt-16">
        <div v-if="blok.copyrights">
          <div v-html="blok.copyrights"></div>
        </div>
        <div v-if="blok.secondaryLogo && blok.secondaryLogo.filename">
          <img
            :src="blok.secondaryLogo.filename"
            :alt="blok.secondaryLogo.alt"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Footer',
    },
    blok: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.Footer {
  background-color: #011e41;
}
</style>
