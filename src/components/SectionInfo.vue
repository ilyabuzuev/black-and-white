<script setup>
defineProps(['heading', 'description']);
</script>

<template>
  <div class="services__info">
    <h2 class="services__heading section-heading">{{ heading }}</h2>
    <p class="services__description section-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.services__info {
  margin-bottom: 40px;
  max-width: 50%;
}
</style>