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
      email: 'mblader0@umich.edu',
      password: 'pOKJof0PWZ'
    },
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({ name: 'Home' })
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