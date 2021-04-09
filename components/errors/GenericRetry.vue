<template>
  <div class="text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Ocurrió un error
    </h3>
    <p class="mt-2 mb-6 text-sm text-gray-500">
      Ha ocurrido un error durante la petición de datos. Por favor, intentalo de nuevo.
    </p>

    <button class="group relative flex justify-center py-2 pl-10 pr-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-auto" @click="$emit('retry')">
      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        <Redo class="h-5 w-5 text-green-500 group-hover:text-green-400" />
      </span>

      Recargar
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Redo from '@/components/icons/Redo.vue'

export default Vue.extend({
  components: {
    Redo
  }
})
</script>
