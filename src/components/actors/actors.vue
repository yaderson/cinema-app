<template>
  <div>
    <strong>Cast</strong>
    <carousel v-if="loa" :per-page="3" :paginationEnabled="false">
        <slide v-for="movie in movies[0]" :key="movie.id">
            <div v-if="movie.profile_path" class="movie" v-bind:style=" {backgroundImage: 'url(https://image.tmdb.org/t/p/w500/'+movie.profile_path+')'}"></div>
            <div v-else class="movie" v-bind:style=" {backgroundImage: 'url(https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg)'}"></div>
            <div class="flex-child long-and-truncated-with-child-corrected">
              <span>{{movie.name}}</span>
            </div>
        </slide>
    </Carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  const { getActors } = require('@/services/index.js');

  export default {
    name: 'actors',
    title: 'Change direction',
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        movies: [],
        loa: false,
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 2,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
      }
    },
    async mounted () {
      await this.load();
    },
    methods: {
      async load () {
        const response = await getActors(this.$route.params.movieId);
        this.movies.push(response);
        this.loa = true;
      }
    },
    
  }
</script>

<style scoped>
.movie {
  height: 150px;
  width: 100px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-size: cover;
}

.long-and-truncated-with-child-corrected {
  
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
a {
  text-decoration: none;
  color: black;
}


</style>