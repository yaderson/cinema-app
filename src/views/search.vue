<template>
  <div class="container">
    <md-toolbar> 
      <md-button class="md-icon-button" v-on:click="goBack()">
        <md-icon>arrow_back</md-icon>
      </md-button>
      <md-field style="flex: 1">
        <md-input v-model="query"></md-input>
      </md-field>
      <md-button v-on:click="clear()" class="md-icon-button">
        <md-icon>clear</md-icon>
      </md-button>
    </md-toolbar>

    <div>
      <h1 v-if="results.length <= 0">Nada</h1>
      <md-list v-else>
        <md-list-item v-for="res in results" :key="res.id" :to="'/details/'+res.id">
          <div v-if="res.poster_path" class="image-icon-movie">
            <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+res.poster_path">
          </div>
          <div v-else class="image-icon-movie">
            <img src="@/assets/no-image.jpg">
          </div>
          <span class="md-list-item-text">{{res.title}}</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
const {search} = require('@/services/index.js');
export default {
  
  data() {
    return {
      query: '',
      results: []
    }
  },
  watch: {
    query: function() {
      this.query ? this.getResults(this.query) : null
    },
    results: function() {
      return this.results;
    }
  },
  methods: {
    async getResults(query) {
      const response = await search(query);
      this.results = response;
      console.log(this.results)
    },
    clear () {
      this.query = ''
      this.results = []
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.search-input {
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  border: 1px solid red;
  flex-direction: row;
}
.search-input input{
  border: none;
  width: 100%;
}

.image-icon-movie {
  width: 40px;
  margin-right: 10px;
}

span {
  text-decoration: none;
  color: black;
}
</style>