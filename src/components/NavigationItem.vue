<script setup lang="ts">
import { useThemeStore } from '@/store/theme.store';
import { Icon } from '@iconify/vue';
import type { NavigationItem } from '@/models/NavigationItem';
import Typography from '@/components/Typography.vue'

defineProps<NavigationItem>();

const themeStore = useThemeStore();
const emit = defineEmits(['click']);

function navigationItemOnLick() {
  emit('click');
}
</script>
<template>
  <router-link class="navigation__link" :to="href" @click="navigationItemOnLick">
    <div class="flex">
      <Typography 
        class="navigation__label" 
        tag="h3" 
        size="sm" 
        :thick="500" 
        lineHeight="none" 
        :color="themeStore.theme === 'dark' ? 'grey-6' : 'grey-9'"
      >
        {{ label }}
      </Typography>
      <Icon :icon="icon" class="navigation__icon" v-if="icon" color="grey" width="24" />
    </div>
  </router-link>
</template>

<style scoped lang="sass">
.flex
  display: flex
  flex-direction: row-reverse
  align-items: center
  gap: var(--size-sm)

.navigation
  &__link:hover .navigation__label
    color: var(--link-hover-color)

  &__link:hover .navigation__icon
    color: var(--link-hover-color) !important

  &__label
    transition: color var(--transition-duration) var(--transition-animation)

  &__icon
    transition: color var(--transition-duration) var(--transition-animation)
</style>