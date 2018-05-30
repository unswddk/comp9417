<template>
<div>
   <div class="md-layout  md-alignment-center">
     <!-- :md-format="formatName" -->
    <md-chips class="md-primary" v-model="searchMovies" md-placeholder="Add Movies..." @md-insert="searchMovie" @md-delete="deleteSerch" >
      <label>Movies</label>
        <div class="md-helper-text">Add movie name to search</div>
    </md-chips>
    
   <movieCard  class="md-layout-item md-large-size-25  md-medium-size-25 md-small-size-100 md-xsmall-size-100" v-for="movie in moviesCopy" :key="movie.id" v-bind:message="movie"></movieCard>
   </div>
   <br>
      <md-card class="page">
    <Page :current="currentPage" :total="totalPage" @on-change="pageChange" simple style="float:right"></Page>
   </md-card>
</div>
</template>
<script>
import movieCard from "./movieCard.vue";
export default {
  name: "mainPage",
  data() {
    return {
      allMovies: {},
      msg: "Welcome to Your Vue.js App",
      movieIds: [],
      moviesNameTime: [],
      currentPage: null,
      totalPage: null,
      moviesCopy: [],
      searchMovies: []
    };
  },
  computed: {
    movies() {
      // return this.$store.state.movies
    }
  },
  created() {
    this.$http
      .get(
        "https://m3eg3ubuzg.execute-api.us-east-1.amazonaws.com/dev/getMovies"
      )
      .then(
        response => {
          if (response) {
            console.log(response.body);
            this.movieIds = Object.keys(response.body);
            // console.log(a.subString(0,response.body[this.movieIds[0]].length-6));
            this.movieIds.forEach(e => {
              let movie = {
                id: e,
                name: response.body[e].substring(
                  0,
                  response.body[e].length - 7
                ),
                time: response.body[e].substring(
                  response.body[e].length - 5,
                  response.body[e].length - 1
                )
              };
              this.moviesNameTime.push(movie);
            });
            this.moviesNameTime = this.moviesNameTime.reverse();
            this.currentPage = 1;
            this.totalPage = this.moviesNameTime.length;
            this.moviesCopy = this.moviesNameTime.slice(0, 9);
          }
        },
        response => {
          console.log(response);
        }
      );
  },
  components: {
    movieCard
    // TinyPagination
  },
  methods: {
    pageChange(page) {
      console.log(page);
      this.moviesCopy = [];
      this.moviesNameTime.slice((page - 1) * 9, 9 * page).forEach(e => {
        this.moviesCopy.push(e);
      });
      console.log(this.moviesCopy);
    },
    searchMovie(text, index) {
      console.log(this.searchMovies);
      console.log(text);
      let a = this.moviesNameTime.filter(e =>{
        // this.searchMovies.includes(e.title)
          let reg = new RegExp(text.toLowerCase());
          if (e.name.toLowerCase().match(reg)) {
            return e;
          }
        });
        console.log("=========");
        console.log(a.length);
        if(a.length<=9){
              this.moviesCopy=[]
              a.forEach(element => {
                this.moviesCopy.push(element);
              });
            }else{
              this.moviesCopy = a.slice((this.currentPage - 1) * 12, this.currentPage * 12);
            }
    },
    deleteSerch(text, index) {
      console.log(index);
      if(this.searchMovies.length ===0){
        this.moviesCopy = this.moviesNameTime.slice((this.currentPage - 1) * 12, this.currentPage * 12);
      }else{
        let word= this.searchMovies[index-1].toLowerCase()
           let a =this.moviesNameTime.filter(e=>{
          var reg = new RegExp(word);
           if(e.name.toLowerCase().match(reg)){
             return e;
    }
        } 
        );
        if(a.length<=12){
              this.moviesCopy=[]
              a.forEach(element => {
                this.moviesCopy.push(element);
              });
            }else{
              this.moviesCopy = a.slice((this.currentPage - 1) * 12, this.currentPage * 12);
            }
      }
    }
  }
};
</script>
<style scoped>
.md-chips {
  margin: 40px 12%;
}
.page {
  margin-bottom: 40px;
}
</style>
