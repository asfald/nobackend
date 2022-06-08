<template>
  <div class="m-auto flex flex-col justify-center align-center font-roboto gap-y-12">
    <div
      class="
        flex
        md:flex-row
        flex-col
        justify-center
        md:gap-x-12
        lg:gap-x-24
        justify-center
      "
    >
      <div class="flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.3752653272975!2d24.741266116207274!3d59.42681561024422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949857a430c7%3A0xd8e2deaa7cd1c82!2sTallinn%20Polytechnic%20School!5e0!3m2!1sen!2see!4v1654666925588!5m2!1sen!2see"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div class="w-full md:w-96 md:max-w-full mx-auto">
          <div class="p-6 border border-black">
            <form ref="form" @submit.prevent="sendEmail">
              <label class="block mb-6">
                <span class="text-black">Sinu nimi</span>
                <input
                  type="text"
                  name="user_name"
                  class="block w-full mt-1 border-black border shadow-sm"
                  placeholder="jaan"
                />
              </label>
              <label class="block mb-6">
                <span class="text-black">Sinu e-mail</span>
                <input
                  name="user_email"
                  type="email"
                  class="block w-full mt-1 border-black shadow-sm border"
                  placeholder="jaan@jaan.ee"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-black">Sinu sõnum</span>
                <textarea
                  name="message"
                  class="block w-full mt-1 border-black shadow-sm border"
                  rows="3"
                  placeholder="Millest mõtled?"
                ></textarea>
              </label>
              <div class="mb-6">
                <input
                  type="submit"
                  value="Kirjuta"
                  class="
                    h-10
                    px-5
                    text-black
                    border border-black
                    rounded
                    transition-colors
                    duration-150
                    cursor-pointer
                  "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center m-auto text-center align-center space-y-4">
      <p class="uppercase font-bold">rain oselin</p>
      <p class="font-bold">57800512</p>
    
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "ContactForm",
  components: { emailjs },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_lxa8xwj",
          "template_99ygimk",
          this.$refs.form,
          "CPQQ4Mk-uyXdqdPZD"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },

  setup() {
    return {};
  },
});
</script>