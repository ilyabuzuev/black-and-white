<script setup>
defineProps(['img', 'title', 'content', 'likes', 'author', 'date']);
</script>

<template>
  <li class="news">
    <div>
      <img class="news__img" :src="img" alt="">
    </div>
    <div>
      <p class="news__content">
        {{ content }}
      </p>
    </div>
    <div class="news__info">
      <div class="news__likes">
        <button class="news__button button-reset">
          <svg class="news__icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div>{{ likes }}</div>
      </div>
      <div class="news__comments">
        <a href="#">Комментарии</a>
      </div>
      <div class="news__author">
        <h4>{{ author }}</h4>
        <div>{{ date }}</div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 40%;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
}

.news__img {
  max-width: 300px;
}

.news__content {
  max-width: 100%;
  font-size: 18px;
}

.news__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news__likes {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* TODO: Сменить название класса!!! */
.news__likes div {
  font-size: 20px;
}

.news__button {
  width: 24px;
  height: 24px;
}

.news__button path {
  stroke: var(--color-background);
  transition: stroke .2s ease;
}

.news__button:hover path {
  stroke: var(--color-background-mute);
}

.news__icon {
  width: 100%;
  height: 100%;
}

/* TODO: Сменить название класса!!! */
.news__comments a {
  color: var(--color-text);
}

.news__author {
  display: flex;
  gap: 5px;
}

/* TODO: Сменить название класса!!! */
.news__author h4 {
  color: var(--color-heading);
}
</style>