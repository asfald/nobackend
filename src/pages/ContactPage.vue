<template>
<Container size="extra-large">
  <div class=" m-auto flex flex-col justify-center gap-y-12">
    <NavBar />
    <ContactForm />
    <Footer />
  </div>
</Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import Container from '../components/Container.vue'

export default defineComponent({
  name: "ContactPage",
  components: { NavBar, Footer, ContactForm,Container },
  setup() {
    return {};
  },
});
</script>