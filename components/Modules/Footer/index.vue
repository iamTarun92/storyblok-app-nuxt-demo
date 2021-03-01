<template>
  <div>{{blok}}</div>
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

<style></style>
