<script setup>
import { ref } from 'vue';
import Service from '@/components/Service.vue';
import SectionInfo from '../components/SectionInfo.vue';

const services = ref([
  {
    id: 0,
    name: 'Проявка ч/б пленки',
    description: 'Если вас зовут Максим, и вы отдали пленку на проявку именно нам, то у нас для вас плохие новости...',
    img: '/black-and-white/assets/images/service-1.png',
    price: '999 999 ₽',
  },
  {
    id: 1,
    name: 'Печать фотографии',
    description: 'За всю историю нашего сервиса нами была напечатана всего одна единственаня фотография, однако не стоит спешить с выводами, ведь, несмотря на это, у нас огромный опыт!',
    img: '/black-and-white/assets/images/service-2.png',
    price: '10 000 000 ₽',
  }
]);
</script>

<template>
  <section class="services section">
    <div class="services__container container">
      <SectionInfo 
        heading="Услуги"
        description="Сервис Black & White предоставялет огромный список различных услуг. Их вы можете наблюдать ниже."
      />
      <ul class="services__list list-reset">
        <Service 
          v-for="service in services"
          :key="service.id"
          :name="service.name"
          :description="service.description"
          :img="service.img"
          :price="service.price"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services__list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
}
</style>