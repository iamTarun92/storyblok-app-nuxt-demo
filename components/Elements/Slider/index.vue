<template>
  <div class="owl-carousel m-20">
    <div class="owl-stage-outer overflow-x-hidden">
      <div class="owl-stage relative flex space-x-2">
        <div
          :class="`owl-item bg-yellow-300 flex-shrink-0 w-1/${items}`"
          v-for="slide in slides"
          :key="slide"
        >
          <div class="item p-10">
            <h4>{{ slide.title }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="owl-nav flex justify-between mt-5">
      <button
        type="button"
        role="presentation"
        class="owl-prev"
        @click="previous"
      >
        <span aria-label="Previous">prev</span></button
      ><button type="button" role="presentation" class="owl-next" @click="next">
        <span aria-label="Next">next</span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: 1,
      slides: [
        {
          title: 'Slide 1',
          id: 1,
        },
        {
          title: 'Slide 2',
          id: 2,
        },
        {
          title: 'Slide 3',
          id: 3,
        },
        {
          title: 'Slide 4',
          id: 4,
        },
        {
          title: 'Slide 5',
          id: 5,
        },
      ],
    }
  },
  methods: {
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
  },
}
</script>

<style scoped>
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}

h2 {
  font-size: 24px;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  transition: all 0.3s;
  background: #ddd;
  margin: 20px 0;
}

.carousel-controls__button {
  cursor: pointer;
  background: tomato;
  border: 0;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 18px;
}
</style>
