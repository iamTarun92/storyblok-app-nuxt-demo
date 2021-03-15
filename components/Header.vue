<template>
  <div v-editable="blok">
    <header
      :class="{ 'hidden-navbar': !showNavbar, 'bg-white': backcolor }"
      class="fixed top-0 left-0 right-0 z-10 p-5 items-center flex text-white transition-all duration-200"
    >
      <button
        class="flex items-center"
        :class="{ 'text-black': backcolor }"
        @click="drawer"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8 mr-2"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        MENU
      </button>
      <div class="flex-1">
        <a
          v-if="blok[0].homeImage2 && blok[0].homeImage2.filename"
          v-show="backcolor == false"
          class="block w-56 mx-auto"
        >
          <img :src="blok[0].homeImage2.filename" />
        </a>
        <a
          v-if="blok[0].homeImage && blok[0].homeImage.filename"
          v-show="backcolor == true"
          class="block w-56 mx-auto"
        >
          <img :src="blok[0].homeImage.filename" />
        </a>
      </div>
      <button
        type="button"
        class="border-2 px-5 py-2 hover:bg-blue-900 hover:border-transparent"
        :class="[
          backcolor ? 'text-black border-black' : 'text-white border-white',
        ]"
      >
        {{ blok[0].title }}
      </button>
    </header>
    <aside
      class="p-5 text-white transform top-0 left-0 w-64 bg-blue-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <button
        @click="isOpen = false"
        class="flex font-medium items-center uppercase w-full"
      >
        <span class="w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        Close
      </button>
      <div class="sidebar-logo my-5">
        <a v-if="blok[0].homeImage2">
          <img
            v-if="blok[0].homeImage2 && blok[0].homeImage2.filename"
            :src="blok[0].homeImage2.filename"
          />
        </a>
      </div>
      <ul class="space-y-4">
        <li
          v-for="(item, index) in prodata(blok)"
          :key="index"
          class="nav-item"
        >
          <nuxt-link :to="item.cached_url">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
const OFFSET = 5

export default {
  props: {
    name: {
      type: String,
      default: 'HeaderLinks',
    },
    blok: {
      type: [Object, Array],
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      backcolor: false,
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    prodata(blok) {
      let dat = []
      blok.forEach(function (element, index) {
        if (index != 0) {
          const source = { title: element.title }
          Object.assign(element.link, source)
          dat.push(element.link)
        }
      })
      return dat
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
      if (this.lastScrollPosition > 100) {
        this.backcolor = true
      }
      if (this.lastScrollPosition < 100) {
        this.backcolor = false
      }
    },
  },
}
</script>

<style scoped>
.nav-item:nth-child(4) {
  border-bottom: 1px solid #fff;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
