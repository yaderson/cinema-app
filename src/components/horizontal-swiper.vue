<template>
  <div style="padding: 10px">
    <strong>Populars</strong>
    <carousel class="swiper" :per-page="3" :paginationEnabled="false">
        <slide v-for="movie in movies[0]" :key="movie.id">
            <a :href="'/details/'+movie.id">
            <div v-if="!loadMore" class="movie" v-bind:style=" {backgroundImage: 'url(https://image.tmdb.org/t/p/w500/'+movie.poster_path+')'}">
            </div>
            <div class="flex-child long-and-truncated-with-child-corrected">
              <span>{{movie.title}}</span>
            </div>
            </a>
        </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  const { getPopulars } = require('@/services/index.js');

  export default {
    name: 'hswiper',
    title: 'Change direction',
     components: {
      Carousel,
      Slide
    },
    data() {
      return {
        movies: [],
        loadMore: false,
        page: 0,
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
        this.loadMore = true
        this.page = this.page+1;
        const response = await getPopulars(this.page);
        this.movies.push(response);
        this.loadMore = false
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