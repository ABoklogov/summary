<template>
  <div class="card flex align-items-center justify-content-center">
    <Card class="card-component">
      <template #header>
        <img alt="settings" :src="require('@/assets/images/setting.png')" />
      </template>
      <template #title>
        <span class="card-component__title">Введите пароль</span>
      </template>
      <template #content>
        <InputText class="card-component__input" />
      </template>

      <template #footer>
        <Button label="Войти" class="card-component__btn" />
      </template>
    </Card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-component {
  max-width: 500px;
  padding: 30px;
  margin-top: 50px;

  & img {
    display: block;
    max-width: 100%;
    width: 50%;
    margin: 0 auto 30px;
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
