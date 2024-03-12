<template>
  <TheHeader />
      <RouterView />
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import store from '@/store'
import axios from 'axios'
import {watch} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: 'App',
  components: {
    TheFooter,
    TheHeader
  },
  setup() {
          const check = () => {
            axios.get('').then(({data}) => {
                  console.log(data)
                  store.commit('setAccount', data || 0)
             })
          }
          const route = useRouter()

          watch(route, () => {
                check()
          })
    }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
