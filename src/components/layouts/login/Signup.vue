<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="userId">User ID</label>
                <input type="text" class="form-control" id="userId" v-model="state.form.userId">
              </div>
              <div class="form-group  mt-2">
                <label for="userPassword">Password</label>
                <input type="password" class="form-control" id="userPassword" v-model="state.form.userPassword">
              </div>
              <div class="form-group mt-2">
                <label for="userName">User Name</label>
                <input type="text" class="form-control" id="userName" v-model="state.form.userName">
              </div>
              <div class="form-group mt-2">
                <label for="userEmail">Email</label>
                <input type="email" class="form-control" id="userEmail" v-model="state.form.userEmail">
              </div>
              <div class="form-group mt-2">
                <label for="userPhone">Phone</label>
                <input type="text" class="form-control" id="userPhone" v-model="state.form.userPhone">
              </div>
              <div class="form-group mt-2">
                <label for="userNickname">User NickName</label>
                <input type="text" class="form-control" id="userName" v-model="state.form.userNickname">
              </div>
              <button type="button" class="btn btn-primary mt-2" @click="register">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
      form: {
        userId: '',
        userPassword: '',
        userName: '',
        userEmail: '',
        userPhone: '',
        userNickname: '',
      }
    })
    const register = () => {
      const url = 'user/insert'
      // 회원가입 로직 구현
      axios.post(url, {
        userId: state.form.userId,
        userPassword: state.form.userPassword,
        userName: state.form.userName,
        userEmail: state.form.userEmail,
        userPhone: state.form.userPhone,
        userNickname : state.form.userNickname,
      })
      .then(({data}) => {
        if (data) {
          router.push('/login')
        } else {
          alert('회원가입에 실패하였습니다.')
        }
      })
      .catch(error => {
        console.error(error)
      })
    }
    return {
      state,
      register,
    }
  }
}
</script>
<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;  /* 뷰포트 높이의 50% */
}
.card {
  width: 100%;
}

</style>
