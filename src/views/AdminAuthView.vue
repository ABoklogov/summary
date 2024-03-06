<template>
  <div class="admin-auth">
    <Card class="card-component">
      <template #header>
        <img alt="settings" :src="require('@/assets/images/setting.png')" />
      </template>
      <template #title>
        <span class="card-component__title">Введите логин/пароль</span>
      </template>

      <template #content>
        <AuthForm/>
      </template>
    </Card>
  </div>
</template>

<script setup>
import AuthForm from '@/components/auth/AuthForm.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.admin-auth {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $pink;
  padding: 50px 0;
}
.card-component {
  max-width: 500px;
  padding: 5px;

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
}

@media screen and (min-width: 768px) {
  .card-component {
    padding: 30px;
  }
}
</style>
