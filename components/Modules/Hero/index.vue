<template>
  <div v-editable="blok">
    <div :style="setHeroBackground()" class="pt-60 sm:pt-0 sm:h-screen flex">
      <div class="container self-end mx-auto pb-16 px-5">
        <h1
          class=" break-all sm:whitespace-pre text-4xl sm:text-5xl text-white sm:pl-10"
          v-html="blok.title"
        ></h1>

        <!-- <div class="max-w-md">
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
          </div> -->
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
