<template>
  <section class="category__box">
    <div>a</div>
  </section>
  <section class="category__box">
    <btton @click="click">click</btton>
  </section>
  <section class="category__box">
    <div>c</div>
  </section>
</template>

<script>

export default {
  components: {
  },
  setup() {
    const click = () => {
      console.log('clicked')
    }
    return {
      click,
    }
  }
}
</script>

<style>
@media screen and (max-width: 380px) {
  .category__box {
    margin-top: 2rem;
  }
}

</style>
