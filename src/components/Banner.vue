<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useBannerStore } from '@/store/banner.store';
import Button from '@/components/Button.vue';
import Typography from '@/components/Typography.vue';

interface IBanner {
  id: number;
  title: string;
  description: string;
  create: (id: number, title: string, description: string) => void;
}

class Banner implements IBanner {
  readonly id: number;
  readonly title: string;
  readonly description: string;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  create(): void {
    bannerStore.set(
      { id: this.id, title: this.title, description: this.description }
    );
  }
}

const bannerStore = useBannerStore();
const banner = new Banner(1, 'title', 'description');
</script>

<template>
  <div class="banner p-a-lg rounded-sm block-shadow-xs">
    <div class="banner__title">
      <Typography tag="h5">
        {{ banner.title }}
      </Typography>
    </div>
    <div class="banner__description">
      <Typography tag="p">
        {{ banner.description }}
      </Typography>
    </div>
    <div class="banner__button">
      <Button 
        color="grey-1" 
        bgColor="transparent" 
        icon="close" 
        :padding="false"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
.banner
  position: fixed
  bottom: 20px
  left: 20px
  padding: var(--size-lg)
  background-color: var(--bg-color-soft)
  z-index: 11

  &__button
    position: absolute
    top: var(--size-sm)
    right: var(--size-sm)
</style>