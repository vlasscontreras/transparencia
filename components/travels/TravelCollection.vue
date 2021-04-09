<template>
  <div>
    <TravelItem v-for="travel in travels" :key="`travel-${travel.id}`" :data="travel" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TravelItem from '@/components/travels/TravelItem.vue'
import Travel from '@/types/Travel'

export default Vue.extend({
  components: {
    TravelItem
  },

  props: {
    travels: {
      type: Array as () => Array<Travel>,
      default: null
    }
  }
})
</script>
