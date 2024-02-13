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
        <form>
          <FloatLabel>
            <InputText id="login" v-model="login" class="card-component__input" />
            <label for="login">login</label>
          </FloatLabel>

          <FloatLabel>
            <InputText id="password" v-model="password" class="card-component__input" />
            <label for="password">password</label>
          </FloatLabel>
          
          <Button label="Войти" class="card-component__btn" @click="submitUser"/>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
  const store = useAuthStore();
  import { ref } from 'vue';

  const login = ref(null);
  const password = ref(null);

  const submitUser = () => {
    const userData = { 
      login: login.value, 
      password: password.value 
    };

    store.logIn(userData);
  };
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
  padding: 30px;

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
    margin: 30px auto 0;
    width: 100%;
  }
  &__btn {
    display: block;
    margin: 30px auto 0;
    width: 100%;
  }
}
</style>
