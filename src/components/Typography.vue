<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Typography } from '@/models/Typography';

withDefaults(defineProps<Typography>(), {
  size: 'sm',
  thick: 500,
  color: 'black',
  lineHeight: 'xs',
  caps: false,
  bold: false,
  italic: false,
  underlined: false,
  overlined: false,
});
</script>

<template>
  <component
    class="typography"
    :class="[
      { 'text-bold': bold }, 
      { 'text-italic': italic }, 
      { 'text-underlined': underlined }, 
      { 'text-overlined': overlined },
      { 'text-caps': caps },
      `text-${size}`, 
      `text-${color}`,
      `text-${thick}`,
      `text-height-${lineHeight}`,
    ]"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="sass">
.typography

.text

  &-bold
    font-weight: bold

  &-italic
    font-style: italic

  &-underlined
    text-decoration: underline

  &-overlined
    letter-spacing: 0.15rem

  &-caps
    text-transform: uppercase

  &-xs
    font-size: 0.8rem

  &-sm
    font-size: 1rem

  &-md
    font-size: 1.2rem

  &-lg
    font-size: 1.4rem
  
  &-xl
    font-size: 1.8rem

  &-300
    font-weight: 300

  &-300
    font-weight: 300

  &-400
    font-weight: 400

  &-500
    font-weight: 500

  &-600
    font-weight: 600

  &-700
    font-weight: 700

  &-800
    font-weight: 800

  &-height-none
    line-height: 1

  &-height-xs
    line-height: 1.2

  &-height-sm
    line-height: 1.4

  &-height-md
    line-height: 1.6

  &-height-lg
    line-height: 1.8

  &-height-xl
    line-height: 2
</style>