<template>
  <form class="auth-form" @submit.prevent="submitUser" ref="authForm">
    <CustomInput 
      id="login" 
      v-model:value="formData.login"
      :rules="loginRules"
      class="auth-form__input"
    />
    <CustomInput 
      id="password" 
      v-model="formData.password"
      :rules="passwordRules"
      class="auth-form__input"
    />
    <!-- <div class="auth-form__input">
      <label for="password">password</label>
      <Password  
        id="password" 
        toggleMask 
        v-model="formData.password"
        :invalid="!validPassword"
        @blur="blurPassword"
      />
      <span v-if="!validPassword" class="auth-form__error">{{ errorPassword }}</span>
    </div> -->

    <Button 
      type="submit" 
      label="Войти" 
      aria-label="Войти"
      class="auth-form__btn"
    />
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
// const isFirstPassword  = ref(true);
// const validPassword = ref(true);
// const errorPassword = ref('');

const authForm = ref(null)

const loginRules = computed(() => {
  return [isRequired, charLimit(10), loginValidation];
});
const passwordRules = computed(() => {
  return [isRequired, charLimit(15), passwordValidation];
});

const validateForm = computed(() => {
  if (!authForm.value) {
    return false
  } else {
    const validLogin = authForm.value[0].attributes[5].value;
    return JSON.parse(validLogin) && !isFirstPassword.value && validPassword.value
  };
});

// const validatePassword = () => {
//   return (validPassword.value = passwordRules.value.every(rule => {
//     const { hasPassed, message } = rule(formData.value.password);
    
//     if (!hasPassed) {
//       errorPassword.value = message;
//     };

//     return hasPassed;
//   }));
// };

// watch(() => formData.value.password, () => {
//   if (isFirstPassword.value) return;
//   validatePassword();
// });

// const blurPassword = () => {
//   if (isFirstPassword.value) validatePassword();
//   isFirstPassword.value = false;
// };

const submitUser = async () => {
  if (!validateForm.value) {
    return
  };
    // console.log(formData.value);
  const data = await store.logIn(formData.value);
  console.log("🚀 ~ submitUser ~ data:", data)
  if (data) {
    resetForm();
  }
};

const resetForm = () => {
  formData.value.password = '';
  formData.value.login = '';
};

</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.auth-form {
  &__input {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
  &__input:not(:first-child) {
    margin-top: 10px;
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
    &__input:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>
