<template>
  <MainSection />
  <div class="container">
    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email" />
        <input
          id="email"
          v-model.trim="state.email"
          placeholder="Email"
          type="email"
          class="form-control">
      </div>
      <div class="form-group">
        <label for="password" />
        <input
          id="password"
          v-model.trim="state.password"
          placeholder="Password"
          type="password"
          class="form-control">
      </div>
      <div class="form-group">
        <button
          class="btn btn-primary"
          type="submit"
          :disabled="!validated">
          로그인
        </button>
        <button
          type="button"
          class="btn btn-light"
          @click="$router.push('/signup')">
          회원가입
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      email: '',
      password: '',
    })

    return {
          state
    }
  },
}
</script>
