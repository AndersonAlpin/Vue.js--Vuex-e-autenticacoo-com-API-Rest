<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              class="form-control"
              placeholder="Senha"
              v-model="form.password"
            />
          </div>
          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: 'dlowy12@google.co.uk',
      password: 'xtPqmEFaip2'
    },
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer login')
      }
    }
  },
};
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 30%;
}
</style>