<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useThemeStore } from '@/store/theme.store';
import Typography from '@/components/Typography.vue';

const themeStore = useThemeStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__container container-lg">
      <Typography 
        :color="themeStore.theme === 'dark' ? 'grey-7' : 'grey-8'"
        tag="p"
        overlined
      >
        ©BLACK&WHITE
      </Typography>
    </div>
  </footer>
</template>

<style scoped lang="sass">
.footer
  height: 80px
  background-color: var(--bg-color-darker)

  &__container
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%

  &-mobile
    background: var(--bg-color-soft)
    box-shadow: 0px 2px var(--size-xs) 1px var(--shadow-color)
</style>