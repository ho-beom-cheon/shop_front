<template>
  <div class="container">
  <section class="login__box">
      <h2>Login</h2>
      <input v-model="state.form.userId" type="number" placeholder="userId" />
      <input v-model="state.form.userPassword" type="password" placeholder="Password" />
      <button @click="login">Login</button>
  </section>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/routes'

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      form : {
        userId: '',
        userPassword: '',
      }
    })
    const login = () => {
      const url = 'user/select'
      // 로그인 로직 구현
      axios.get(url, {
        params: {
          userId: state.form.userId,
          userPassword: state.form.userPassword
        }
      })
      .then(({data}) => {
        if (data) {
          router.push('/main')
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
      })
      .catch(error => {
        console.error(error)
      })
    }

    return {
      state,
      login,
    }
  },
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;  /* 뷰포트 높이의 50% */
}


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
