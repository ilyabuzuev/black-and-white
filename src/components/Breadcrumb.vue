<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

onMounted(() => {
  const breadcrumb = ref(route);

  console.log(route.path);

  watch(route, (oldRoute, newRoute) => {
    breadcrumb.value = route;
    console.log(route.matched);
  });
})
</script>

<template>
  <nav>
    <ul class="breadcrumb__list list-reset">
      <li>
        <router-link to="/">Home</router-link> 
      </li>
      /
      <li>
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
.breadcrumb__list
  display: flex
  gap: 4px
</style>