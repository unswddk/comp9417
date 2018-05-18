<template>
   <div class="md-layout md-gutter md-alignment-center">
   <movieCard  class="md-layout-item md-large-size-25  md-medium-size-25 md-small-size-50 md-xsmall-size-100" v-for="(movie,index) in movies" :key="movie.index" v-bind:message="movie"></movieCard>
   </div>
</template>
<script>
import movieCard from './movieCard.vue'
export default {
  name: 'mainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed:{
    movies(){
      return this.$store.state.movies;
    }
  },
  components:{
    movieCard
  },
}
</script>
<style scoped>

</style>
