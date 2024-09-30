<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Button } from '@/models/Button';

const props = withDefaults(defineProps<Button>(), {
  label: null,
  color: 'primary',
  bgColor: 'primary',
  size: 'sm',
  disabled: false,
  outlined: false,
  padding: true,
});

const emit = defineEmits(['click']);

function clickOnButton() {
  emit('click');
}

const [
  label, 
  color,
  bgColor,
  size, 
  disabled, 
  outlined,
  padding,
  icon
] = [props.label, props.color, props.bgColor, props.size, props.disabled, props.outlined, props.padding, props.icon];

const buttonClasses = [
  `button-${size}`,
  `text-${color}`,
  `${outlined ? `button-outlined` : `button-no-outlined background-${bgColor}`}`,
  `${padding == false ? 'button-no-padding' : ''}`,
];

const iconSizes = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '32px',
};
</script>

<template>
  <button 
    class="button"
    :class="buttonClasses"
    @click="clickOnButton"
    :disabled="disabled"
  >
    <div 
      v-if="label !== null" 
      class="button__label"
    >
      {{ label }}
    </div>
    <div v-if="icon" class="button__icon">
      <Icon :icon="`ic:${icon}`" :height="iconSizes[size]" :width="iconSizes[size]" />
    </div>
  </button>
</template>

<style scoped lang="sass">
.button
  display: flex
  align-items: center
  gap: 4px
  position: relative
  border: none
  cursor: pointer
  border-radius: 4px
  overflow: hidden
  transition: background-color var(--transition-duration) var(--transition-animation)

  &-outlined
    background: none
    border-style: solid
    border-width: 1px

  &:disabled
    opacity: 0.5
    cursor: not-allowed

  &-xs
    font-size: 12px
    padding: 4px 6px

  &-sm
    font-size: 16px
    padding: 6px 8px

  &-md
    font-size: 18px
    padding: 6px 10px

  &-lg
    font-size: 20px
    padding: 8px 12px

  &-xl
    font-size: 22px
    padding: 10px 14px

  &-no-padding
    padding: 0

  &__label
    line-height: 1
    transition: color var(--transition-duration) var(--transition-animation)

  &__icon
    display: flex

.button.button-outlined:hover
  background-color: currentColor

.button.button-no-outlined:hover
  opacity: 0.7

.button.button-outlined:hover .button__label
  color: var(--color-white)
</style>