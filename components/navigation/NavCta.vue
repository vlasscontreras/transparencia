<template>
  <div>
    <a href="https://www.transparencia.gob.sv/api/v1/home" target="_blank" rel="noopener noreferrer" class="inline-flex">
      Fuente
    </a>
    <a href="https://github.com/vlasscontreras/transparencia" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 rounded border px-2 py-1 hover:opacity-80 transition-opacity">
      <GitHub class="w-4 h-4" />
      <span>Código</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GitHub from '@/components/icons/GitHub.vue'

export default Vue.extend({
  components: {
    GitHub
  }
})
</script>
