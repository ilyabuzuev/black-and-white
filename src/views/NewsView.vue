<script setup>
import { ref } from 'vue';
import SectionInfo from '@/components/SectionInfo.vue';
import News from '@/components/News.vue';

const news = ref([
  {
    id: 0,
    img: 'src/assets/images/hero.png',
    title: "Мы отркылись!",
    content: "Вы так долго этого ждали! И мы тоже! И это наконец совершилось!!! Приностие свои пленочки по адресу: г.Город, ул.Улица, д.Дом, кв.Кварира. Будем рады вас видеть! :)",
    likes: 0,
    author: 'admin',
    date: '16.11.2023'
  }
]);
</script>

<template>
  <section class="news section">
    <div class="news__container container">
      <SectionInfo 
        heading="Новости"
        description="Здесь публикуются новости нашего сервиса"
      />
      <ul class="news__list list-reset">
        <News 
          v-for="post in news"
          :key="post.id"
          :img="post.img"
          :title="post.title"
          :content="post.content"
          :likes="post.likes"
          :author="post.author"
          :date="post.date"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.news__list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>