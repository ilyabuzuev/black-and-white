<script setup>
defineProps(['name', 'price', 'img', 'rating', 'inStock']);
</script>

<template>
  <li class="product">
    <div class="product__left">
      <img class="product__img" :src="img" alt="">
    </div>
    <div class="product__center">
      <a class="product__name" href="#">{{ name }}</a>
      <div class="product__statistics">
        <div v-if="inStock > 0" class="product__instock">
          В наличии: <span class="product__count">{{ inStock }}</span>
        </div>
        <div v-else class="product__instock">
          Нет в наличии
        </div>
      </div>
    </div>
    <div class="product__right">
      <div class="product__price">{{ price }}</div>
      <div v-if="inStock > 0">
        <button class="product__button button-reset">
          Добавить
        </button>
      </div>
      <div v-else>
        <button class="product__button button-reset">
          Уведомить
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>
.product {
  display: flex;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  transition: box-shadow .2s ease;
}

.product:hover {
  box-shadow: 3px 3px 7px 3px #0e0e0e;
}

.product__left {
  margin-right: 20px;
}

.product__img {
  display: block;
  border-radius: 5px;
}

.product__center {
  margin-right: auto;
}

.product__name {
  display: block;
  width: 100%;
  height: 150px;
  font-size: 20px;
  color: var(--color-text);
  transition: color .2s ease;
}

.product__name:hover {
  color: var(--color-heading);
}

.product__instock {
  font-size: 18px;
}

.product__count {
  font-size: 18px;
  color: var(--color-heading);
}

.product__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.product__price {
  font-size: 20px;
  font-weight: 500;
}

.product__button {
  padding: 10px 20px;
  font-size: 16px;
  color: var(--color-text);
  border: 2px solid var(--color-background);
  border-radius: 5px;
  transition: background-color .2s ease;
}

.product__button:hover {
  background-color: var(--color-background);
}
</style>