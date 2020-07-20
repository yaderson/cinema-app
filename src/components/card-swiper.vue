<template>
  <div style="margin-top: 10px">
    <carousel :per-page="1" :paginationEnabled="false">
      <slide v-for="movie in movies" :key="movie.id" class="swiper-slide">
        <card :score="movie.vote_average" :img="movie.poster_path" :id="movie.id"></card>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  import card from './card'
  const { getIncine } = require('@/services/index.js');

  export default {
    name: 'swiper-example-navigation',
    title: 'Navigation',
    components: {
      card,
      Carousel,
      Slide
    },
    data() {
      return {
        movies: [],
  
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
