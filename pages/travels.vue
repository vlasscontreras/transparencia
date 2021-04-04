<template>
  <div class="container mx-auto py-10 md:pb-20 px-4">
    <PageHeader title="Viajes" to="/travels" class="mb-7" />

    <TravelCollection class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 -mx-4 sm:mx-0" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TravelCollection from '@/components/travels/TravelCollection.vue'
import PageHeader from '~/components/PageHeader.vue'

export default Vue.extend({
  components: {
    TravelCollection,
    PageHeader
  }
})
</script>
