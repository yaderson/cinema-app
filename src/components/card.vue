<template>
  <div class="card">
    <a :href="'/details/'+id">
      <div class="body">
        <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+img" height="100" alt="">
      </div>
      <div class="bottom">
        <div class="content">
          <div>
            <span>{{score}}</span>
          </div>
          <div>
            <star v-bind:star="score" :size="5"> </star>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import star from './star/star.vue';
export default {
  name: 'card',
  components: {
    star
  },
  props: {
    img: String,
    score: Number,
    id: null
  },
  data() {
    return {
      p: 4
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  width: 30vh;
  background-color:#121212;
}
.card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.bottom {
  color: white;
  border-top: 4px solid green !important;
  height: 8vh;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>>