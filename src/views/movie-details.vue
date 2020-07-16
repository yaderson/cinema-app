<template>
  <div class="page-container" v-if="load">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary" v-bind:style=" {backgroundImage: 'url(https://image.tmdb.org/t/p/w500/'+movie.backdrop_path+')'}">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" v-on:click="goBack">
              <md-icon>arrow_back</md-icon>
            </md-button>
          </div>

          
        </div>

        <div class="md-toolbar-row md-toolbar-offset" style="width: 40%; color: white">
          <h3>{{movie.title}}</h3>
        </div>
      </md-app-toolbar>


      <md-app-content>
        <div class="details-content">
          <div class="movie-inf">
            <div class="adsad">
              <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" width="100">

            </div>
            <div class="poster-inf" style="">
              <h2>{{movie.title}}</h2>
              <span>{{movie.original_title}}</span>
              <h6>Relese Date: {{movie.release_date}}</h6>
              <div style="display: flex">
                <div style="margin-right: 10px">{{movie.vote_average}}</div><star v-bind:star="movie.vote_average" :size="10"> </star>
              </div>
            </div>
          </div>
          <div class="movie-over-view">
            <p>
              {{movie.overview}}
            </p>
          </div>
        </div>
        <actors> </actors>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
const {details} = require('@/services/index.js');
import star from '@/components/star/star.vue';
import actors from '@/components/actors/actors.vue';

export default {
  components: {
    star,
    actors
  },
  data() {
    return {
      movie: Object,
      actors: [],
      load: false,
      tooltipActive: false
    }
  },
  async mounted() {
    const id = this.$route.params.movieId;
    const response = await details(id);
    this.movie = response
    this.load = true
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
  }
  .adsad {
    align-items: center;
    display: flex;

  }
  .adsad img{
    border-radius: 10px;
  }
  .poster-inf {
    margin-left: 20px;
    padding: 10px;
    width: 80%;
  }
  .poster-inf h2 {
    margin-bottom: 5px;
  }
  .poster-inf h6 {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .movie-inf {
    padding-left: 20px;
    width: 100%;
    display: flex;
  }
  .movie-over-view {
    background-color: transparent;
    margin: 0;
    padding: 0;
  }
  .poster-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    border-radius: 10px;
    min-height: 150px;
    min-width: 100px;
    max-height: 150px;
    max-width: 100px;
  }
  /* .details-content {
    
  } */
  .md-app-toolbar {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .md-icon-button {
    color: white;
  }
  .md-app {
    max-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-app-toolbar {
    height: 196px;
  }
  .page-container {
    width: 100%;
  }

</style>