<template>
  <header>
    <Navbar />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '@/components/navigation/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>
