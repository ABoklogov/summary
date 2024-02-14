<template>
  <form class="auth-form" @submit.prevent="submitUser">
    <!-- <div class="auth-form__input">
      <label for="login">login</label>
      <InputText 
        id="login" 
        v-model="login" 
        :invalid="!validLogin" 
        @blur="blurLogin"
      />
      <span v-if="!validLogin" class="auth-form__error">{{ errorLogin }}</span>
    </div>
    
    <div class="auth-form__input">
      <label for="password">password</label>
      <Password 
        id="password" 
        v-model="password" 
        toggleMask 
        :invalid="!validPassword" 
        @blur="blurPassword"
      />
      <span v-if="!validPassword" class="auth-form__error">{{ errorPassword }}</span>
    </div> -->


    <CustomInput 
      id="login" 
      v-model:value="formData.login"
      :rules="loginRules"
      class="auth-form__input"
    />
    <CustomInput 
      id="password" 
      v-model:value="formData.password" 
      :rules="passwordRules"
      class="auth-form__input"
    />
    
    <Button 
      type="submit" 
      label="Войти" 
      aria-label="Войти"
      class="auth-form__btn"
    />
      <!-- :disabled="!validateForm" -->

  </form>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'; 
import CustomInput from '@/components/shared/CustomInput.vue'; 
import {isRequired, charLimit, loginValidation, passwordValidation} from '@/utils/validationRules';

const store = useAuthStore();
import { ref, watch, computed } from 'vue';

const formData = ref({
  login: '',
  password: ''
});

// const login = ref('');
// const isFirstLogin = ref(true);
// const validLogin = ref(true);
// const errorLogin = ref('');

// const password = ref('');
// const isFirstPassword  = ref(true);
// const validPassword = ref(true);
// const errorPassword = ref('');

const loginRules = computed(() => {
  return [isRequired, charLimit(10), loginValidation];
});
const passwordRules = computed(() => {
  return [isRequired, charLimit(15), passwordValidation];
});
// const validateForm = computed(() => {
//   return !isFirstLogin.value && !isFirstPassword.value && validLogin.value && validPassword.value
// });

// const validateLogin = () => {
//   return (validLogin.value = loginRules.value.every(rule => {
//     const { hasPassed, message } = rule(login.value);

//     if (!hasPassed) {
//       errorLogin.value = message;
//     };
 
//     return hasPassed;
//   }));
// };
// const validatePassword = () => {
//   return (validPassword.value = passwordRules.value.every(rule => {
//     const { hasPassed, message } = rule(password.value);

//     if (!hasPassed) {
//       errorPassword.value = message;
//     };
 
//     return hasPassed;
//   }));
// };

// watch(login, () => {
//   if (isFirstLogin.value) return;
//   validateLogin();
// });
// watch(password, () => {
//   if (isFirstPassword.value) return;
//   validatePassword();
// });

// const blurLogin = () => {
//   if (isFirstLogin.value) validateLogin();
//   isFirstLogin.value = false;
// };
// const blurPassword = () => {
//   if (isFirstPassword.value) validatePassword();
//   isFirstPassword.value = false;
// };

const submitUser = () => {
  // if (!validateForm) return;

  // const userData = { 
  //   login: login.value, 
  //   password: password.value 
  // };
console.log(formData.value);
  // store.logIn(userData);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.auth-form {
  &__input {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 10px auto 0;
    width: 100%;
  }
  &__btn {
    display: block;
    margin: 50px auto 0;
    width: 100%;
  }
  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: $fontMicro;
    color: $red;
  }
}
.auth-form__input:deep .p-password-input {
  width: 100%;
}
.auth-form__input:deep svg {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .auth-form {
    &__input {
      margin: 20px auto 0;
    }
  }
}
</style>
