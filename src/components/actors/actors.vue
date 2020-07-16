<template>
  <div>
    <strong>Cast</strong>
    <swiper class="swiper" ref="swiper" :options="swiperOption">
      
        <swiper-slide v-for="movie in movies[0]" :key="movie.id">
       
            
            <div v-if="loa" class="movie" v-bind:style=" {backgroundImage: 'url(https://image.tmdb.org/t/p/w500/'+movie.profile_path+')'}">

            </div>
            <div class="flex-child long-and-truncated-with-child-corrected">
              <span>{{movie.name}}</span>
            </div>
            
        
            
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css';
  const { getActors } = require('@/services/index.js');

  export default {
    name: 'actors',
    title: 'Change direction',
    components: {
      Swiper,
      SwiperSlide
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
  background-size: 100%;
}

.long-and-truncated-with-child-corrected {
  
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
a {
  text-decoration: none;
  color: black;
}


</style>