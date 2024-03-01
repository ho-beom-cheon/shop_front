<template>
  <TheHeader />
  <MainSection />
  <TheFooter />
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import MainSection from '@/components/layouts/MainSection.vue'

export default {
  components: {
    MainSection,
    TheFooter,
    TheHeader
  },
  computed: {
    ...mapState(['isLoading']),
  },
}
</script>

<style>

</style>
