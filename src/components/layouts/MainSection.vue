<template>
  <section class="category__box">
    <div>a</div>
  </section>
  <section class="category__box">
    <button @click="click">click</button>
  </section>
  <section class="category__box">
    <div>c</div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const click = () => {
      router.push('/login')
    }

    return {
      click,
    }
  },
}
</script>

<style>
@media screen and (max-width: 380px) {
  .category__box {
    margin-top: 2rem;
  }
}

</style>
