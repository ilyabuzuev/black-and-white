<script setup>
import { ref } from 'vue';
import SectionInfo from '@/components/SectionInfo.vue';
import Product from '@/components/Product.vue';
import Filters from '@/components/Filters.vue';

const products = ref([
  { 
    id: 1,
    name: 'Фотоплёнка ч/б 35mm Ilford HP5 Plus 400/36',
    price: '13 100 ₽',
    img: 'src/assets/images/products/product-4.png',
    rating: 5.00,
    inStock: 1,
  },
  { 
    id: 2,
    name: 'Фотоплёнка ч/б 35mm Ilford HP4 Plus 125/36',
    price: '13 400 ₽',
    img: 'src/assets/images/products/product-5.png',
    rating: 5.00,
    inStock: 0,
  },
  { 
    id: 3,
    name: 'Фотоплёнка ч/б 35mm Ilford XP2 Super 400/24',
    price: '13 500 ₽',
    img: 'src/assets/images/products/product-6.png',
    rating: 5.00,
    inStock: 3,
  },
  { 
    id: 4,
    name: 'Фотоплёнка цветная 35mm Kodak Color Plus 200/36',
    price: '13 600 ₽',
    img: 'src/assets/images/products/product-1.png',
    rating: 5.00,
    inStock: 4,
  },
  { 
    id: 5,
    name: 'Фотоплёнка цветная 35mm Kodak Gold 200/36',
    price: '13 700 ₽',
    img: 'src/assets/images/products/product-2.png',
    rating: 5.00,
    inStock: 0,
  },
  { 
    id: 6,
    name: 'Фотоплёнка цветная 35mm Kodak Ultramax 400/36',
    price: '13 900 ₽',
    img: 'src/assets/images/products/product-3.png',
    rating: 5.00,
    inStock: 12,
  },
]);
</script>

<template>
  <section class="shop section">
    <div class="shop__container container">
      <SectionInfo 
        heading="Магазин"
        description="В магазине вы можете купить всё необходимое..."
      />
      <div class="shop__content">
        <Filters />
        <ul class="products__list list-reset">
          <Product 
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :img="product.img"
            :rating="product.rating"
            :inStock="product.inStock"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shop__content {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 300px 1fr;
  column-gap: 20px;
}
.products__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>