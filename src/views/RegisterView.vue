<script setup lang="ts">
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store';

import { account } from '@/utils/appwrite';

import { v4 as uuid } from 'uuid';

import InputField from '@/components/InputField.vue';
import Button from '@/components/Button.vue';
import Typography from '@/components/Typography.vue';

document.title = 'Авторизация | Black & White';

const emailInputText = ref<string>('');
const passwordInputText = ref<string>('');

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

async function login(): Promise<void> {
  isLoadingStore.set(true);

  try {
    await account.createEmailSession(emailInputText.value, passwordInputText.value);

    const response = await account.get();

    console.log(response.status);

    if (response) {
      authStore.set({
        email: response.email,
        name: response.name,
        status: response.status,
      })
    }
  } catch (error) {
    console.log(error);

    await router.push('/login');

    isLoadingStore.set(false);
  } finally {
    emailInputText.value = '';
    passwordInputText.value = '';

    await router.push('/');

    isLoadingStore.set(false);
  }
}

async function register(): Promise<void> {
  await account.create(uuid(), emailInputText.value, passwordInputText.value);
  await login();
}
</script>

<template>
  <div class="login">
    <form class="login__form p-a-xl rounded-sm block-shadow-sm" @submit.prevent>
      <div class="login__fields">
        <InputField 
          label="Email"
          placeholder="Введите email"
          v-model="emailInputText" 
        />
        <InputField 
          label="Имя"
          placeholder="Введите имя"
        />
        <InputField 
          label="Пароль" 
          type="password"
          placeholder="Введиет пароль" 
          v-model="passwordInputText" 
        />
      </div>
      <div class="flex">
        <Button class="p-x-md" label="Зарегестрироваться" color="grey-1" @click="register" />
      </div>
      <div class="login__link">
        <Typography tag="p" size="sm" class="text-grey-7">
          Уже есть аккаунт? <router-link class="text-grey-7 text-bold" to="/login">Войти</router-link>!
        </Typography>
      </div>
    </form>
  </div>
</template>

<style scoped lang="sass">
$screen-size-xl: 1440px
$screen-size-lg: 1024px
$screen-size-md: 800px
$screen-size-sm: 700px
$screen-size-xs: 600px

.login
  &__form
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: column
    align-items: center
    gap: var(--size-md)
    max-width: 600px
    background: var(--bg-color-soft)

  &__fields
    display: flex
    flex-direction: column
    gap: var(--size-md)
    width: 100%

  &__link
    text-align: center

a
  text-decoration: underline

  &:hover
    text-decoration: none
    color: var(--color-primary)

@media (max-width: $screen-size-xs)
  .login
    &__form
      position: relative
      left: 0
      transform: translate(0, 0)

</style>