<template>
<Container size="extra-large">
  <div class="m-auto flex flex-col justify-center gap-y-24">
    <NavBar />
    <PhotoGallery />
    <WorkGallery class="pb-24" />
    <Footer  />
  </div>
</Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import WorkGallery from "../components/WorkGallery.vue";
import PhotoGallery from "../components/PhotoGallery.vue";
import Container from "./../components/Container.vue";

export default defineComponent({
  name: "GalleryView",
  components: { NavBar, Footer, WorkGallery, PhotoGallery, Container },

  setup() {
    return {};
  },
});
</script>