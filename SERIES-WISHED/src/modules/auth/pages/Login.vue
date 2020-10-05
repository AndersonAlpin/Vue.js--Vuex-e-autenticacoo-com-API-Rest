<template>
  <div class="login-page">
    <div class="card">
      <div class="card-header">Login</div>
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail" />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Senha" />
        </div>

        <button class="btn btn-primary w-100">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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