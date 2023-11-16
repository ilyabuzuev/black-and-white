<script setup>
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/black-and-white/">
        <img class="header__logo" alt="Black & White" src="@/assets/logo.svg"/>
      </router-link>
      <nav class="header__nav nav">
        <ul class="nav__list list-reset">
          <li class="nav__item">
            <router-link class="nav__link" to="/black-and-white/services">Услуги</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/black-and-white/shop">Магазин</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/black-and-white/contacts">Контакты</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/black-and-white/news">Новости</router-link>
          </li>
        </ul>
      </nav>
      <div class="header__login login">
        <a class="login__link" href="#">Войти</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Header */
.header {
  height: 80px;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header__logo {
  height: 60px;
}

.nav__list {
  display: flex;
  gap: 100px;
}

.nav__link,
.login__link {
  font-size: 20px;
  color: var(--color-text);
}
</style>