<template>
  <div class="shadow-lg sm:rounded-xl p-4 bg-white">
    <div class="w-full h-full">
      <div class="mb-4 space-y-2">
        <p class="text-gray-800 dark:text-white text-xl font-medium">
          {{ data.officer_name }}
        </p>
        <p class="text-gray-400 dark:text-gray-300 text-xs font-medium">
          {{ data.officer_position }}
        </p>
        <p class="text-gray-400 dark:text-gray-300 text-sm line-clamp-3" :title="objective">
          {{ objective }}
        </p>
      </div>

      <div v-if="data.enabled || data.marked" class="mb-4">
        <span v-if="data.enabled" class="px-2 py-1 text-xs rounded-md font-semibold text-green-500 bg-green-50">
          <Check class="inline-block w-3 mr-1" />
          Habilitado
        </span>
        <span v-if="data.marked" class="px-2 py-1 text-xs rounded-md font-semibold text-green-500 bg-green-50">
          <Check class="inline-block w-3 mr-1" />
          Marcado
        </span>
      </div>

      <div class="space-y-2 mb-6">
        <div class="flex space-x-2 items-start" :title="data.name">
          <Bookmark class="text-blue-500 icon mt-1" />
          <div class="flex-grow text-sm line-clamp-1">
            {{ data.name }}
          </div>
        </div>

        <div class="flex space-x-2 items-start">
          <Plane class="text-blue-500 icon mt-1" />
          <div class="flex-grow text-sm">
            {{ data.destination }}
          </div>
        </div>

        <div class="flex space-x-2 items-start">
          <Calendar class="text-blue-500 icon mt-1" />
          <div class="flex-grow text-sm">
            {{ departure_date }}
            <span> - </span>
            {{ return_date }}
          </div>
        </div>
      </div>

      <div class="divide-y space-y-2">
        <div v-for="item in table" :key="item.name" class="flex items-center pt-2 text-sm space-x-12 md:space-x-24 justify-between">
          <p>
            {{ item.name }}
          </p>
          <div class="flex items-end text-xs text-red-500 font-medium">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { format as formatDate } from '@/lib/date'
import { formatter } from '@/lib/money'
import Bookmark from '@/components/icons/Bookmark.vue'
import Plane from '@/components/icons/Plane.vue'
import Calendar from '@/components/icons/Calendar.vue'
import Check from '@/components/icons/Check.vue'
import Travel from '@/types/Travel'

export default Vue.extend({
  components: {
    Bookmark,
    Plane,
    Calendar,
    Check
  },

  props: {
    data: {
      type: Object as () => Travel,
      required: true
    }
  },

  data () {
    return {
      objective: this.data.objective.replace(/<[^>]*>?/gm, ''),
      departure_date: formatDate(this.data.departure_date, 'MMM D, YYYY'),
      return_date: formatDate(this.data.return_date, 'MMM D, YYYY'),
      table: [
        {
          name: 'Gastos',
          value: formatter.format(parseInt(this.data.expenses_amount, 10))
        },
        {
          name: 'Pasaje',
          value: formatter.format(parseInt(this.data.passage_amount, 10))
        },
        {
          name: 'Viáticos',
          value: formatter.format(parseInt(this.data.viatical_amount, 10))
        }
      ]
    }
  }
})
</script>

<style scoped>
.icon {
  min-width: 0.75rem;
  width: 0.75rem;
}
</style>
