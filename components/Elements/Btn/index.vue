<template>
  <button :class="classes">{{ blok.linkLabel }}</button>
</template>

<script>
export default {
  props: {
    blok: {
      type: null,
      required: true
    },
    type: {
      type: [String, Array, Object],
      required: false,
      default: 'primary',
    },
  },
  computed: {
    classes() {
      // Array is allowed to allow conditional type usage via array
      // Example:
      // <ButtonsBase
      //   :type="[processingPayment ? 'primaryInverted' : 'primary']"
      //   @click.native="createPayment"
      // >
      //   <WLoadingSpinner type="button" class="mx-auto" />
      // </ButtonsBase>

      if (Array.isArray(this.type)) {
        return this.$wind.buttons.base[this.type[0]]
      }

      // Object is allowed as a type choice so that we can conditionally render the styles on a button object
      // Example:
      // <ButtonsBase
      //   :type="{ primaryInverted: processingPayment }"
      //   @click.native="createPayment"
      // >
      //   <WLoadingSpinner type="button" class="mx-auto" />
      // </ButtonsBase>

      if (typeof this.type === 'object') {
        return this.$wind.buttons.base[Object.keys(this.type)[0]]
      }

      return this.$wind.buttons.base[this.type]
    }
  },
};
</script>

<style></style>
