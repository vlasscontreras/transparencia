<template>
  <div>
    <div class="hidden sm:block pb-1">
      <Breadcrumbs :to="to" :title="title" />
    </div>
    <div class="sm:flex sm:justify-between">
      <h2 class="text-2xl font-semibold font-sans text-gray-900 sm:text-xl">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '~/components/navigation/Breadcrumbs.vue'

export default Vue.extend({
  components: {
    Breadcrumbs
  },

  props: {
    to: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>
