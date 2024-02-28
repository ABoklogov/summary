<template>
  <CustomForm 
    class="auth-form" 
    @submit.prevent="submitUser" 
    ref="authForm"
  >
    <div class="auth-form__input">
      <CustomInput 
        name="login"
        id="login" 
        type="text"
        autocomplete="login"
        v-model:value="formData.login"
        :rules="loginRules"
      />
    </div>
    <div class="auth-form__input">
      <CustomInput 
        name="password"
        id="password"
        :type="showPassword ? 'text' : 'password'"
        autocomplete="current-password"
        :rules="passwordRules"
        v-model:value="formData.password"
      >
        <template #btn>
          <CustomButton @click="toggleShowPassword">
            <IconViewNotPassword v-if="!showPassword"/>
            <IconViewPassword v-else/>
          </CustomButton>
        </template>
      </CustomInput>
    </div>
    <Button 
      type="submit" 
      label="Войти" 
      aria-label="Войти"
      class="auth-form__btn"
    />
  </CustomForm>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'; 
import CustomInput from '@/components/shared/CustomInput.vue'; 
import CustomForm from '@/components/shared/CustomForm.vue'; 
import CustomButton from '@/components/shared/CustomButton.vue'; 
import IconViewPassword from '@/components/icons/IconViewPassword.vue'; 
import IconViewNotPassword from '@/components/icons/IconViewNotPassword.vue'; 
import {isRequired, charLimit, loginValidation, passwordValidation} from '@/utils/validationRules';

const store = useAuthStore();
import { ref, computed } from 'vue';

const authForm = ref(null);
const formData = ref({
  login: '',
  password: ''
});
const showPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const loginRules = computed(() => {
  return [isRequired, charLimit(10), loginValidation];
});
const passwordRules = computed(() => {
  return [isRequired, charLimit(15), passwordValidation];
});

const submitUser = async () => {
  const isVolidForm = authForm.value.validate();
  
  if (!isVolidForm) {
    return
  };

  const data = await store.logIn(formData.value);
  console.log("🚀 ~ submitUser ~ data:", data)
  if (data) {
    authForm.value.reset();
  } else {
    // TODO: сделать нотификашкку
  }
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
