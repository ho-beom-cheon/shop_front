<template>
  <section class="login__box">
      <h2>Login</h2>
      <input v-model="state.username" type="text" placeholder="Username" />
      <input v-model="state.password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      username: '',
      password: '',
    })

    const login = () => {
      // 로그인 로직 구현
    }

    return {
      state,
      login,
    }
  },
}
</script>

<style scoped>
.login__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login__box input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login__box button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}
</style>
