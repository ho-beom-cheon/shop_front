<template>
  <TheHeader/>
    <RouterView/>
    <teleport to="body">
      <div
          v-if="isLoading"
          class="spinner-border text-danger"
          role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </teleport>
  <TheFooter/>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
export default {
  components: {
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
