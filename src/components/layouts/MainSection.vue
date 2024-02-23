<template>
  <section class="category__box">
    <div>a</div>
<!--    <ProductList-->
<!--        category="생활가전"-->
<!--        class="main" />-->
  </section>
  <section class="category__box">
    <div>b</div>
<!--    <ProductLis<div>a</div>t-->
<!--        category="계절가전"-->
<!--        class="main" />-->
  </section>
  <section class="category__box">
    <div>c</div>
<!--    <ProductList-->
<!--        category="디지털"-->
<!--        class="main" />-->
  </section>
</template>

<script>

export default {
  // components: {
  //   ProductList,
  // },
  // mounted() {
  //   this.readAllProducts()
  // },
  // methods: {
  //   ...mapActions('product', ['readAllProducts'])
  // }

}
</script>

<!--<style lang="scss" scoped>-->
<!--.category__box {-->
<!--  margin-top: 5rem;-->
<!--}-->
<style>
@media screen and (max-width: 380px) {
  .category__box {
    margin-top: 2rem;
  }
}

</style>
