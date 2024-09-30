<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useThemeStore } from "@/store/theme.store";
import Typography from '@/components/Typography.vue';

const themeStore = useThemeStore();
</script>

<template>
  <div class="logo">
    <Typography 
      tag="h2" 
      size="md" 
      :thick="400" 
      lineHeight="none" 
      :color="themeStore.theme === 'dark' ? 'grey-3' : 'grey-9'"
      overlined 
      caps
    >
      Black
    </Typography>
    <Typography 
      tag="h2" 
      size="md" 
      :thick="400" 
      lineHeight="none" 
      :color="themeStore.theme === 'dark' ? 'grey-3' : 'grey-9'"
      overlined 
      caps
    >
      &
    </Typography>
    <Typography 
      tag="h2" 
      size="md" 
      :thick="400" 
      lineHeight="none" 
      color="grey-6" 
      overlined 
      caps
    >
      White
    </Typography>
  </div>
</template>

<style scoped lang="sass">
.logo
  display: flex
</style>
