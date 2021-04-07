<template>
  <div class="container mx-auto py-10 md:pb-20 px-4">
    <PageHeader title="Viajes" to="/travels" class="mb-7" />

    <!-- Loading -->
    <div v-if="$fetchState.pending" :class="gridClass">
      <div v-for="n in 6" :key="`loader-${n}`" class="shadow-lg rounded-xl p-4 bg-white">
        <TravelLoader />
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="$fetchState.error">
      <GenericRetry class="mt-3 sm:mt-0 px-4" @retry="$fetch" />
    </div>

    <!-- Data -->
    <div v-else>
      <TravelCollection :class="gridClass" :travels="travels" />

      <!-- Pagination -->
      <Pagination :current="currentPage" class="mt-10" @navigate="goTo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import * as TravelRepository from '@/repositories/TravelRepository'
import { title } from '@/lib/meta'
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
    travels: null,
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

  /**
   * Fetch travels
   */
  async fetch () {
    this.scrollUp()

    const response = await TravelRepository.all({
      page: this.currentPage,
      perPage: 9
    })

    this.travels = response.data
  },

  fetchKey: 'page',

  head: {
    title: title('Viajes')
  },

  computed: {
    currentPage (): number {
      const current = this.$route.query.page
      return current ? parseInt(current.toString()) : 1
    }
  },

  watch: {
    '$route.query.page': '$fetch'
  },

  methods: {
    /**
     * Scroll to the page top
     */
    scrollUp () {
      document.documentElement.scrollIntoView({
        behavior: 'smooth'
      })
    },

    /**
     * Update page query string
     */
    goTo (page: string) {
      this.$router.push({
        path: this.$route.path,
        query: { page }
      })
    }
  }
})
</script>
