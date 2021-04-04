<template>
  <!-- Loading -->
  <div v-if="travels === null">
    <div v-for="n in 6" :key="`loader-${n}`" class="shadow-lg rounded-xl p-4 bg-white">
      <TravelLoader />
    </div>
  </div>

  <!-- Error -->
  <div v-else-if="travels === false">
    <GenericRetry class="mt-3 sm:mt-0 col-span-3 px-4" @retry="fetchTravels" />
  </div>

  <!-- Data -->
  <div v-else-if="travels.length > 0">
    <TravelItem v-for="travel in travels" :key="`travel-${travel.id}`" :data="travel" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import * as TravelRepository from '@/repositories/TravelRepository'
import TravelItem from '@/components/travels/TravelItem.vue'
import TravelLoader from '@/components/loaders/TravelLoader.vue'
import GenericRetry from '@/components/errors/GenericRetry.vue'

export default Vue.extend({
  components: {
    TravelItem,
    TravelLoader,
    GenericRetry
  },

  data: () => ({
    travels: null as Boolean | null
  }),

  mounted () {
    this.fetchTravels()
  },

  methods: {
    fetchTravels () {
      this.travels = null

      TravelRepository.all()
        .then((response) => {
          this.travels = response.data
        })
        .catch(() => {
          this.travels = false
        })
    }
  }
})
</script>
