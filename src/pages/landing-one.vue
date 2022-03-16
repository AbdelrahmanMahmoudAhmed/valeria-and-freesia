<template>
  <landing-sec-one />
  <products />
  <content />
  <Footer />
</template>

<script>
import LandingSecOne from "src/components/landing-components/LandingSecOne.vue";
import Content from "src/components/landing-components/Contact.vue";
import Products from "src/components/landing-components/Products.vue";
import Footer from "src/components/landing-components/Footer.vue";
export default {
  components: { LandingSecOne, Content, Products , Footer },
  setup() {},
};
</script>

<style></style>
