<script setup>
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/">
        <img class="header__logo" alt="Black & White" src="@/assets/logo.svg"/>
      </router-link>
      <nav class="header__nav nav">
        <ul class="nav__list list-reset">
          <li class="nav__item">
            <router-link class="nav__link" to="/services">Услуги</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/shop">Магазин</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/news">Новости</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/contacts">Контакты</router-link>
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

.nav__link {
  display: block;
  transition: color .2s ease;
}

.nav__item:hover .nav__link {
  color: var(--color-heading);
}
</style>