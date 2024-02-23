<template>
  <TheHeader/>
    <MainSection/>
  <TheFooter/>
</template>

<script>
import MainSection from "@/components/layouts/MainSection.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
export default {
  components: {
    MainSection,
    TheFooter,
    TheHeader
  }
}
</script>

<style>

</style>
