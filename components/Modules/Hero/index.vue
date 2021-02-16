<template>
  <div v-editable="blok">
    <div :style="setHeroBackground()" class="h-screen flex">
      <div class="container self-end mx-auto pb-16 lg:px-10">
        <div class="flex justify-between">
          <div class="w-6/12 self-end">
            <h1 class="leading-tight text-5xl text-white whitespace-pre" v-html="blok.title"></h1>
          </div>
          <div class="max-w-md">
            <div class="card bg-white p-5">
              <div class="card-body">
                <h1 class="card-title text-lg font-medium">
                  {{ blok.subtitle }}
                </h1>
                <p class="card-text">{{ blok.content }}</p>
                <div class="flex space-x-2 mt-2">
                  <btn :blok="blok.body[0]" />
                  <btn :blok="blok.body[1]" />
                </div>
              </div>
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
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setHeroBackground() {
      if (this.blok.thumpnail && this.blok.thumpnail.filename) {
        const bgUrl = this.blok.thumpnail.filename
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
