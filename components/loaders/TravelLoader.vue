<template>
  <ContentLoader width="732" height="747">
    <rect x="1" width="632" height="38" rx="19" />
    <rect x="1" y="112" width="731" height="110" rx="30" />
    <rect x="1" y="65" width="476" height="20" rx="10" />
    <rect y="264" width="190" height="46" rx="23" />
    <rect x="42" y="350" width="319" height="25" rx="12.5" />
    <circle cx="15" cy="362" r="15" />
    <rect x="42" y="405" width="373" height="25" rx="12.5" />
    <circle cx="15" cy="417" r="15" />
    <rect x="42" y="460" width="351" height="25" rx="12.5" />
    <rect y="624" width="732" height="50" rx="25" />
    <rect y="697" width="732" height="50" rx="25" />
    <rect y="551" width="732" height="50" rx="25" />
    <circle cx="15" cy="472" r="15" />
  </ContentLoader>
</template>

<script lang="ts">
import Vue from 'vue'
import { ContentLoader } from 'vue-content-loader'

export default Vue.extend({
  components: {
    ContentLoader
  }
})
</script>
