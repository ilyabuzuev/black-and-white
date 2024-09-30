<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store';
import { useScreenStore } from '@/store/screen.store';
import { useSidebarStore } from '@/store/sidebar.store';
import { useThemeStore } from '@/store/theme.store';
import { account } from '@/utils/appwrite';
import { Icon } from '@iconify/vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const sidebarStore = useSidebarStore();
const screenStore = useScreenStore();
const themeStore = useThemeStore();
const route = useRoute();

const rtr = ref(); 

window.addEventListener('resize', () => {
  screenStore.set(window.innerWidth);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (event.matches) {
    themeStore.set('dark');
  } else {
    themeStore.set('light');
  }
});

onMounted(async function() {
  try {
    const user = await account.get();

    if (user) {
      authStore.set(user);
    }
  } catch (error) {
    isLoadingStore.set(false);
  } finally {
    isLoadingStore.set(false);
  }

  watch(route, (oldRoute, newRoute) => {
    rtr.value = route.matched;
    // console.log(route.name);
  })
});
</script>

<template>
  <div v-if="isLoadingStore.isLoading" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <Icon class="loader" :icon="`bx:loader-circle`" :height="100" :width="100" color="grey" />
  </div>
  <div v-else class="app__wrapper">
    <Header />
    <Main>
      <Breadcrumb />
      <Sidebar />
      <RouterView />
    </Main>
    <Footer />
  </div>
  <div v-if="sidebarStore.isOpened && screenStore.width <= 768" class="overlay"></div>
</template>

<style scoped lang="sass">
.app__wrapper
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: auto 1fr auto
  gap: var(--size-xl) 
  min-height: 100vh

.overlay
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: var(--color-black)
  opacity: .7
  z-index: 10
</style>
