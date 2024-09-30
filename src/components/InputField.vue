<script setup lang="ts">
import type { InputField } from '@/models/InputField.ts';

import Typography from '@/components/Typography.vue';

withDefaults(defineProps<InputField>(), {
  type: 'text',
  outlined: false
});

const model = defineModel();

const randomInputId = generateRandomId();

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomId(): string {
  const symbols: string = '0123456789abcdef';

  let randomId = '';

  for (let i = 0; i < symbols.length; i++) {
    if (i == 4 || i == 8 || i == 12) {
      randomId += '-';
    }

    randomId += symbols[getRandomInt(0, 16)];
  }

  return randomId;
}
</script>

<template>
  <div class="input-field">
    <div v-if="label">
      <label 
        class="input-field__label" 
        :for="randomInputId"
      >
        <Typography tag="h4" size="md">
          {{ label }}
        </Typography>
      </label>
    </div>
    <div>
      <input 
        class="input-field__input input-reset"
        :placeholder="placeholder"
        :id="randomInputId" 
        :type="type" 
        v-model="model"
      >
    </div>
  </div>
</template>

<style scoped lang="sass">
.input-field
  display: flex
  flex-direction: column
  gap: 2px

  &__label
    font-weight: 600
    color: var(--input-label-color)

  &__input
    width: 100%
    padding: 8px
    font-size: 1.2rem
    color: var(--input-text-color)
    background-color: var(--input-bg-color)
    border-radius: var(--border-radius-xs)
</style>