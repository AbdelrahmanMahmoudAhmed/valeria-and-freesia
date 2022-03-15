<template>
  <landing-sec-one />
  <products />
  <content />
</template>

<script>
import LandingSecOne from "src/components/landing-components/LandingSecOne.vue";
import Content from "src/components/landing-components/Contact.vue";
import Products from "src/components/landing-components/Products.vue";
export default {
  components: { LandingSecOne, Content, Products },
  setup() {},
};
</script>

<style></style>
