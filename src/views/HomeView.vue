<script setup lang="ts">
import { useScreenStore } from '@/store/screen.store';
import { useThemeStore } from '@/store/theme.store';
import Typography from '@/components/Typography.vue';

const screenStore = useScreenStore();
const themeStore = useThemeStore();

window.addEventListener('resize', () => {
  screenStore.set(window.innerWidth);
});
</script>

<template>
  <section class="home">
    <div class="home__content">
      <div class="home__img">
        <img src="@/assets/images/home/hero.jpg" alt="Image">
      </div>
      <div class="home__heading">
        <Typography 
          tag="h1" 
          :color="themeStore.theme === 'dark' ? 'grey-3' : 'grey-9'"
          :size="`${screenStore.width > 768 ? 'xl' : 'lg'}`" 
          :thick="700" 
          caps 
          overlined
          lineHeight="none"
        >
          Black & White
        </Typography>
      </div>
      <div class="home__description">
        <Typography 
          tag="h2" 
          :color="themeStore.theme === 'dark' ? 'grey-5' : 'grey-7'"
          :size="`${screenStore.width > 768 ? 'md' : 'sm'}`" 
          :thick="400" 
          lineHeight="md"
        >
          На первый взгляд может показаться,
          что в нашем сервисе работают далеко
          не профессионалы, но это абсолютно не так!
          Ведь вам действительно не показалось,
          в нашем сервисе работают одни идиоты! Но
          у вас нет выбора, поэтому всегда будем рады
          вашему визиту! :) (и нет, мы не про презервативы)
      </Typography>
    </div>
  </div>
    <div class="home__content">
      <div class="home__heading">
        <Typography 
          tag="h1" 
          :color="themeStore.theme === 'dark' ? 'grey-3' : 'grey-9'" 
          :size="`${screenStore.width > 768 ? 'xl' : 'lg'}`" 
          :thick="700" 
          caps 
          overlined
          lineHeight="none"
        >
          Black & White
        </Typography>
      </div>
      <div class="home__description">
        <Typography 
          tag="h2" 
          :color="themeStore.theme === 'dark' ? 'grey-5' : 'grey-7'" 
          :size="`${screenStore.width > 768 ? 'md' : 'sm'}`" 
          :thick="400" 
          lineHeight="md"
        >
          Всем привет! Мы любим фотографировать
          на пленку! Но мы такие не одни, нас ооооочень
          много. Однако, на данный момент в нашем 
          городе нет сервисов по проявке ч/б пленки,
          и мы решили это исправить! :) 
        </Typography>
      </div>
      <div class="home__img">
        <img src="@/assets/images/home/hero-2.jpg" alt="Image">
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/_variables.sass'

.home
  display: grid
  grid-template-columns: auto auto
  gap: var(--size-xl)
  
  &__content
    display: flex
    flex-direction: column
    gap: var(--size-xl)

  &__img img
    display: block
    max-width: 100%
    filter: grayscale(1)

@media (max-width: $screen-size-s)
  .home
    
    grid-template-columns: auto
    gap: calc(var(--size-xl) * 3)

    &__content
      gap: var(--size-md)

      &:first-child .home__img
        order: 1
</style>