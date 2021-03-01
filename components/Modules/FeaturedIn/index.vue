<template>
  <div :id="blok.id || blok._uid">
    <div class="container m-auto my-10 py-20 lg:px-10">
      <h1 class="text-4xl relative mb-5 font-medium tracking-wide">{{blok.title.toUpperCase()}}</h1>
      <div class="flex space-x-10 flex-wrap mt-10">
        <div class="flex-1" v-for="(item,ind) in blok.items" :key="ind">
          <div class="featured">
            <div class="featured-inner">
              <h2 class="flex featured-title relative text-lg font-bold uppercase tracking-wide">{{item.title}}</h2>
              <div class="featured-content mt-3 leading-8 text-lg">{{item.content}}</div>
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
      default: 'FeaturedInBlock',
    },
    blok: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.featured-title::after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #000;
    margin: auto 10px auto 10px;
}
</style>
