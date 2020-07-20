<template>
  <div>
    <i v-for="n in parseInt(this.star,10)" v-bind:key=n>
      <md-icon v-bind:style="{color: '#D4AF37', fontSize: (n+size)+'px !important'}" style="!important">start</md-icon>
    </i>
  </div>
</template>

<script>
export default {
  name: 'star',  
  props: {
    star: Number,
    size: Number
  },
}
</script>

<style scoped>

</style>