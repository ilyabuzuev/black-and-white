<script setup lang="ts">
import { onMounted } from "vue";
import { useServicesStore } from '@/store/services.store';
import { useScreenStore } from '@/store/screen.store';
import { useThemeStore } from "@/store/theme.store";
import { Icon } from "@iconify/vue";
import Typography from "@/components/Typography.vue";
import Button from "@/components/Button.vue";

const servicesStore = useServicesStore();
const screenStore = useScreenStore();
const themeStore = useThemeStore();

onMounted(() => {
  servicesStore.getServices();
});

window.addEventListener('resize', () => {
  screenStore.set(window.innerWidth);
});
</script>

<template>
  <div v-if="servicesStore.loader === true" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <Icon class="loader" :icon="`bx:loader-circle`" :height="100" :width="100" color="grey" />
  </div>
  <section v-else class="services">
    <div class="services__information">
      <Typography 
        tag="h1" 
        :color="themeStore.theme === 'dark' ? 'grey-1' : 'grey-9'" 
        :size="screenStore.width > 768 ? 'xl' : 'lg'" 
        :thick="700"
        caps 
        overlined
        lineHeight="none"
      >
        Услуги
      </Typography>
      <Typography 
        tag="h2" 
        :color="themeStore.theme === 'dark' ? 'grey-5' : 'grey-7'"
        :size="`${screenStore.width > 768 ? 'md' : 'sm'}`" 
        :thick="400" 
        lineHeight="md"
      >
        Сервис Black & White предоставялет огромный список 
        различных услуг. Их вы можете наблюдать ниже.
      </Typography>
    </div>
    <div>
      <ul class="services__list list-reset">
        <li 
          v-for="service in servicesStore.services" 
          class="services__item service p-a-md rounded-sm block-shadow-sm" 
          :key="service.$id"
        >
          <div class="service__image">
            <img :src="service.img_url" :alt="service.title">
          </div>
          <div class="service__content">
            <div class="service__information">
              <Typography class="service__title" tag="h3" :size="screenStore.width > 520 ? 'xl' : 'md'">{{ service.title }}</Typography>
              <Typography v-if="screenStore.width > 768" class="service__description" tag="p" size="md">{{ service.description }}</Typography>
            </div>
            <div class="service__buy">
              <Typography class="service__price" tag="h5" :size="screenStore.width > 520 ? 'md' : 'sm'">{{ service.price }} Р</Typography>
              <div>
                <Button 
                  v-if="screenStore.width > 768"
                  label="Заказать"
                  bgColor="grey-7"
                  color="grey-1"
                />
                <Button 
                  v-if="screenStore.width < 768"
                  icon="round-add-shopping-cart"
                  bgColor="grey-7"
                  color="grey-1"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/_variables'

.services
  display: flex
  flex-direction: column
  gap: var(--size-xl)

  &__information
    display: flex
    flex-direction: column
    gap: var(--size-md)
    max-width: 60%

  &__list
    display: flex
    flex-direction: column
    gap: var(--size-xl)

.service
  display: flex
  gap: var(--size-xl)
  padding: var(--size-md)
  background: var(--bg-color-soft)

  &__content
    display: flex
    justify-content: space-between

  &__information
    width: 80%
  
  &__title
    margin-bottom: var(--size-sm)
    color: var(--text-heading-color)

  &__description
    line-height: 1.5 
    color: var(--text-description-color)

  &__buy
    display: flex
    align-items: end
    flex-direction: column
    gap: var(--size-sm)

  &__price
    color: var(--text-heading-color)

@media (max-width: $screen-size-sm)

  .services
    &__information
      max-width: 100%
  .service
    gap: var(--size-sm)

    &__image
      width: 120px
      height: 120px

    &__image img
      height: 100%

    &__content
      flex-direction: column
      justify-content: start
      align-items: end
      width: 100%

    &__information
      text-align: end
      width: 100%

    &__buy
      flex-direction: row
      align-items: center
      

@media (max-width: $screen-size-s)
  



@media (max-width: $screen-size-xs)

  .services
    

  .service
    display: flex
    gap: var(--size-sm)

    &__image
      width: 80px
      height: 80px
      margin: 0

    &__image img
      height: 100%

    &__information
      max-width: 100%
      margin: 0

    &__title,
    &__price
      font-size: 1rem

    &__description
      font-size: 0.8rem
    
    &__buy
      flex-direction: row
      justify-content: end
      align-items: center

</style>