<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store';
import { useSidebarStore } from '@/store/sidebar.store';
import { useScreenStore } from '@/store/screen.store';
import { useThemeStore } from '@/store/theme.store';
import { useRouter } from 'vue-router'; 
import { account } from '@/utils/appwrite';
import NavigationItem from '@/components/NavigationItem.vue';
import Button from '@/components/Button.vue';
import Typography from '@/components/Typography.vue'
import { formatUserName } from '@/utils/formatUserName';

const sidebarStore = useSidebarStore();
const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const screenStore = useScreenStore();
const themeStore = useThemeStore();
const router = useRouter();

async function logout() {
  isLoadingStore.set(true);

  await account.deleteSession('current');

  authStore.clear();

  await router.push('/');

  isLoadingStore.set(false);
  sidebarStore.set(false);
}

window.addEventListener('resize', () => {
  screenStore.set(window.innerWidth);
});
</script>

<template>
  <aside 
    v-if="sidebarStore.isOpened && screenStore.width <= 768" 
    class="sidebar" 
    :class="{'sidebar-opened': sidebarStore.isOpened}"
  >
    <div class="p-a-xl">
      <Button 
        icon="close" 
        color="grey-1"
        :label="null" 
        @click="sidebarStore.set(false)"
      />
    </div>
    <div class="sidebar__wrapper p-a-xl">
      <div v-if="authStore.isAuth" class="user__info">
        <div class="avatar">
          <Typography 
            tag="h3" 
            size="sm" 
            thick="500" 
            lineHeight="none" 
            color="grey-1" 
            caps
          >
            {{ formatUserName(authStore.user.email) }}
          </Typography>
        </div>
        <div>
          <Typography 
            tag="h3" 
            size="sm" 
            thick="500" 
            lineHeight="none" 
            :color="themeStore.theme === 'dark' ? 'grey-4' : 'grey-11'" 
          >
            {{ authStore.user.email }}
          </Typography>
        </div>
      </div>
      <ul class="sidebar__list list-reset">
        <li v-if="authStore.isAuth" class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Профиль" href="profile" icon="ic:outline-account-circle" />
        </li>
        <li class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Услуги" href="services" icon="ic:outline-add-a-photo" />
        </li>
        <li class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Магазин" href="shop" icon="ic:outline-shopping-bag" />
        </li>
        <li class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Новости" href="news" icon="ion:newspaper-outline" />
        </li>
        <li class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Контакты" href="contacts" icon="ion:call-outline" />
        </li>
        <li v-if="authStore.isAuth" class="sidebar__item">
          <NavigationItem @click="sidebarStore.set(false)" label="Настройки" href="settings" icon="ion:settings-outline" />
        </li>
        <li class="sidebar__item">
          <Button v-if="authStore.isAuth" @click="logout" label="Выйти" outlined />
          <NavigationItem v-else @click="sidebarStore.set(false)" label="Войти" href="login" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="sass">
.sidebar
  position: fixed
  top: 0
  right: 0
  bottom: 0
  transform: translateX(300px)
  display: flex
  transition: transform .5s ease
  z-index: 11

  &__wrapper
    display: flex
    flex-direction: column
    gap: var(--size-xl)
    min-width: 200px
    background: var(--bg-color)

  &__list
    display: flex
    align-items: start
    justify-content: center
    flex-direction: column
    gap: 16px
    
  &-opened
    transform: translateX(0px)


.user__info
  display: flex
  align-items: center
  gap: var(--size-sm)

.avatar
  display: flex
  justify-content: center
  align-items: center
  width: 36px
  height: 36px
  background-color: var(--color-grey-6)
  border-radius: 100%
</style>