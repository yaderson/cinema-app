<template>

  <div>

    <md-toolbar class="nav-bar">
      
      
      <h1 class="md-title">Cinema App</h1>
      
      <div class="md-toolbar-section-end">
        
        <md-button class="md-icon-button" v-on:click="showModal = !showModal">
          <router-link to="/search"><md-icon style="color: white">search</md-icon></router-link>
        </md-button>
      </div>
    </md-toolbar>
    <cardSwiperVue>
      
    </cardSwiperVue>
    
    <hswiper style="margin-top: 100px"> </hswiper>

  </div>
  
</template>
<script>
import cardSwiperVue from '@/components/card-swiper.vue';
import hswiper from '@/components/horizontal-swiper.vue';
  export default {
    name: 'Home',
    data () {
      return {
        showModal: false,
      }
    },
    components: {
      cardSwiperVue,
      hswiper
    }
  }
</script>

<style scoped>
.md-content {
  padding: 16px;
}
.nav-bar {
  background: var(--primary-color);
}

.nav-bar { 
  
  color: white;
}

.bm-menu {
  height: 100%;
  left: 0;
  overflow-x: hidden;
  margin-top: 56px;
  position: fixed;
  top: 0;
  transition: .5s;
  width: 100%;
  z-index: 1000;
}
router-link {
  text-decoration: none;
  color: transparent;
}

</style>