<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store';
import { useSidebarStore } from '@/store/sidebar.store';
import { useThemeStore } from "@/store/theme.store";
import { useRouter } from 'vue-router';
import { account } from '@/utils/appwrite';
import NavigationItem from '@/components/NavigationItem.vue';
import Button from '@/components/Button.vue';
import Typography from '@/components/Typography.vue';
import { formatUserName } from '@/utils/formatUserName';

const sidebarStore = useSidebarStore();
const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const themeStore = useThemeStore();
const router = useRouter();
const screenWidth = ref<number>(window.innerWidth);
const isUserMenuOpen = ref<boolean>(false);

function pageWidthChangeHandler(): void {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
}

function showSidebar(): void {
  sidebarStore.set(true);
}

function toggleUserMenu() {
  isUserMenuOpen.value = !isUserMenuOpen.value;
}
async function logout() {
  isLoadingStore.set(true);

  await account.deleteSession('current');

  authStore.clear();

  await router.push('/');

  isLoadingStore.set(false);
}

pageWidthChangeHandler();
</script>

<template>
  <nav class="navigation">
    <div v-if="screenWidth > 768">
      <ul class="navigation__list list-reset">
        <li class="navigation__item">
          <NavigationItem label="Услуги" href="services" />
        </li>
        <li class="navigation__item">
          <NavigationItem label="Магазин" href="shop" />
        </li>
        <li class="navigation__item">
          <NavigationItem label="Новости" href="news" />
        </li>
        <li class="navigation__item">
          <NavigationItem label="Контакты" href="contacts" />
        </li>
        <li class="navigation__item">
          <div v-if="!authStore.isAuth">
            <NavigationItem label="Войти" href="login" />
          </div>
          <div v-else>
            <div v-if="screenWidth > 600">
              <div v-if="authStore.isAuth" class="header__user user">
                <div class="user__name">
                  <Typography tag="h2" color="grey-1" lineHeight="none" caps>{{ formatUserName(authStore.userEmail) }}</Typography>
                </div>
                <div class="user__button">
                  <Button 
                    :label="null" 
                    size="lg"
                    color="grey-8"
                    bgColor="transparent" 
                    :padding="false" 
                    icon="round-keyboard-arrow-down"
                    @click="toggleUserMenu"
                  />
                </div>
                <div v-if="isUserMenuOpen" class="user__menu">
                  <ul class="list-reset">
                    <li>
                      <Typography 
                        tag="h3"
                        size="sm" 
                        thick="400"
                        lineHeight="none" 
                        :color="themeStore.theme === 'dark' ? 'grey-5' : 'grey-9'"
                      >
                        {{ authStore.user.email }}
                      </Typography>
                    </li>
                    <li>
                      <NavigationItem label="Настройки" href="settings" icon="ion:settings-outline" />
                    </li>
                    <li>
                      <NavigationItem label="Профиль" href="profile" icon="ic:outline-account-circle" />
                    </li>
                    <li>
                      <Button 
                        bgColor="transparent" 
                        label="Выйти" 
                        :padding="false" 
                        @click="logout" 
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="screenWidth <= 768" class="flex justify-end">
      <Button 
        icon="round-menu" 
        :label="null"
        color="grey-7"
        bgColor="transparent"
        :padding="false"
        size="xl"
        @click="showSidebar"
      />
    </div>
  </nav>
</template>

<style scoped lang="sass">
@import '@/assets/styles/_variables.sass'

.navigation
  width: 660px

  &__list
    display: flex
    justify-content: space-between
    align-items: center
    

@media (max-width: $screen-size-xl)
  .navigation
    width: 520px

@media (max-width: $screen-size-lg)
  .navigation
    width: 480px

@media (max-width: $screen-size-md)
  .navigation
    width: 440px

@media (max-width: $screen-size-sm)
  .navigation
    width: 100%

.user
  position: relative
  display: flex
  align-items: center
  gap: 4px

  &__name
    display: flex
    justify-content: center
    align-items: center
    width: 36px
    height: 36px
    background-color: var(--color-grey-6)
    border-radius: 100%

  &__menu
    position: absolute
    top: 40px
    right: 0
    gap: var(--size-sm)
    padding: var(--size-xl)
    border-radius: var(--border-radius-sm)
    box-shadow: 0px 3px var(--size-md) 1px var(--shadow-color)
    background: var(--bg-color-soft)
    z-index: 1

    & ul
      display: flex
      flex-direction: column
      align-items: start
      gap: var(--size-lg)

    & ul li a h3
      transition: color var(--transition-duration) var(--transition-animation)

    & ul li a h3:hover
      color: var(--link-hover-color) 
</style>