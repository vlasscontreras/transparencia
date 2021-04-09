<template>
  <div class="relative">
    <Header class="sticky top-0 z-50" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>
