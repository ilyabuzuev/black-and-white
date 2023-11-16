<script setup>
defineProps(['name', 'description', 'img', 'price']);
</script>

<template>
  <li class="service">
    <div class="service__left">
      <img class="service__img" :src="img" :alt="name">
    </div>
    <div class="service__right">
      <div class="service__content">
        <h3 class="service__name">{{ name }}</h3>
        <p class="service__description">{{ description }}</p>
      </div>
      <div class="service__order">
        <span class="service__price">{{ price }}</span>
        <button class="service__button button-reset">Заказать</button>
      </div>
    </div>
  </li>
</template>

<style scoped>
.service {
  display: flex;
  gap: 40px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color .2s ease;
}

.service:hover {
  background-color: var(--color-background-mute);
}

.service__left {
  width: 200px;
  height: 200px;
}

.service__img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

.service__right {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.service__content {
  width: 60%;
}

.service__name {
  font-size: 30px;
  color: var(--color-heading);
}

.service__description {
  font-size: 18px;
}

.service__order {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.service__price {
  color: var(--color-heading);
  font-size: 20px;
}

.service__button {
  padding: 10px 20px;
  font-size: 16px;
  color: var(--color-text);
  border: 2px solid var(--color-background);
  border-radius: 5px;
  transition: background-color .2s ease;
}

.service__button:hover {
  background-color: var(--color-background);
}
</style>