<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAuthStore } from '@/store/auth.store';
import { useScreenStore } from '@/store/screen.store';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';

const authStore = useAuthStore();
const screenStore = useScreenStore();
</script>

<template>
  <header 
    :class="[
      `${screenStore.width > 768 ? 'header' : 'header-mobile'}`,
      `${authStore.isAuth ? 'p-y-md' : 'p-y-xl'}`,
    ]"
  >
    <div class="header__container container-lg">
      <div>
        <router-link :to="{ name: 'home' }">
          <Logo />
        </router-link>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  </header>
</template>

<style scoped lang="sass">
.header
  border-bottom: 1px solid var(--border-color) 

  &__container
    display: flex
    justify-content: space-between
    align-items: center

  &-mobile
    border-bottom: 1px solid var(--border-color) 
    background: var(--bg-color-soft)
    box-shadow: 0px 2px var(--size-xs) 1px var(--shadow-color)
</style>