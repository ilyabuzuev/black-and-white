<script setup>

</script>

<template>
  <section class="home section">
    <div class="home__container container">
      <div class="home__column">
        <img class="home__img-1" src="@/assets/images/hero-2.png" alt="">
      </div>
      <img class="home__img-2" src="@/assets/images/hero.png" alt="">
    </div>
  </section>
</template>

<style scoped>
.home__container {
  display: flex;
  justify-content: center;
  gap: 100px
}

.home__column {
  flex: 0 0 calc(100% / 2 - 40px * 1 / 2);
}

.home__heading {
  font-size: 32px;
  line-height: 1.2;
  color: white;
}

.home__description {
  font-size: 24px;
  line-height: 1.5;
}

.home__img-1,
.home__img-2 {
  transition: filter .3s ease;
}

.home__img-1 {
  transform: rotateX(9deg);
  max-width: 100%;
}

.home__img-2 {
  height: 560px;
  max-width: 100%;
}

.home__img-1:hover,
.home__img-2:hover {
  filter: grayscale(50%);
}
</style>