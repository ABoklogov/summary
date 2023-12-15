<template>
  <div class="card flex align-items-center justify-content-center">
    <Card class="card-component">
      <template #header>
        <div class="card-component__header">
          <img alt="settings" :src="require('@/assets/images/setting.png')" />
        </div>
      </template>
      <template #title>
        <span class="card-component__title">Введите пароль</span>
      </template>
      <template #content>
        <InputText class="card-component__input"/>
      </template>

      <template #footer>
        <Button label="Войти" class="card-component__btn"/>
      </template>
    </Card>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .card-component {
    max-width: 500px;
    padding: 30px;
    margin-top: 50px;
     
    &__header {
      padding: 50px;
    }
    & img {
      max-width: 100%;
    }
    &__title {
      display: block;
      text-align: center;
    }
    &__input {
      display: block;
      margin: 20px auto 0;
    }
    &__btn {
      display: block;
      margin: 30px auto 0;
      width: 250px;
    }
  }
</style>