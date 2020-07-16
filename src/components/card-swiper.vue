<template>
  <swiper class="swiper" :options="swiperOption" style="margin-top: 20px">
    <swiper-slide v-for="movie in movies" :key="movie.id">
      <card :score="movie.vote_average" :img="movie.poster_path" :id="movie.id"></card>
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css';
  import card from './card'
  const { getIncine } = require('@/services/index.js');

  export default {
    name: 'swiper-example-navigation',
    title: 'Navigation',
    components: {
      Swiper,
      SwiperSlide,
      card
    },
    data() {
      return {
        movies: [],
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },

    async mounted () {
      const data = await getIncine();
      this.movies = data;
    }
  }
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
