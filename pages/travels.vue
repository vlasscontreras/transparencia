<template>
  <div class="container mx-auto py-10 md:pb-20 px-4">
    <PageHeader title="Viajes" to="/travels" class="mb-7" />

    <!-- Loading -->
    <div v-if="travels === null" :class="gridClass">
      <div v-for="n in 6" :key="`loader-${n}`" class="shadow-lg rounded-xl p-4 bg-white">
        <TravelLoader />
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="travels === false">
      <GenericRetry class="mt-3 sm:mt-0 px-4" @retry="fetchTravels" />
    </div>

    <!-- Data -->
    <TravelCollection v-else-if="travels.length > 0" :class="gridClass" :travels="travels" />

    <!-- Pagination -->
    <Pagination v-if="travels && travels.length > 0" :current="currentPage" class="mt-10" @navigate="goTo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { title } from '@/lib/meta'
import * as TravelRepository from '@/repositories/TravelRepository'
import TravelCollection from '@/components/travels/TravelCollection.vue'
import PageHeader from '@/components/PageHeader.vue'
import TravelLoader from '@/components/loaders/TravelLoader.vue'
import GenericRetry from '@/components/errors/GenericRetry.vue'
import Pagination from '@/components/navigation/Pagination.vue'

export default Vue.extend({
  components: {
    TravelCollection,
    PageHeader,
    TravelLoader,
    GenericRetry,
    Pagination
  },

  data: () => ({
    travels: null as Boolean | null,
    currentPage: 1,
    gridClass: [
      'grid',
      'grid-cols-1',
      'sm:grid-cols-2',
      'lg:grid-cols-3',
      'gap-10',
      '-mx-4',
      'sm:mx-0'
    ]
  }),

  head: {
    title: title('Viajes')
  },

  watch: {
    currentPage (newValue) {
      this.fetchTravels(newValue)
    }
  },

  mounted () {
    this.fetchTravels()
  },

  methods: {
    goTo (page: number) {
      this.currentPage = page
    },

    fetchTravels (page: number = 1, limit: number = 9) {
      this.travels = null

      const params = {
        page,
        per_page: limit
      }

      TravelRepository.all(params)
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
