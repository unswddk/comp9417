<template>
   <md-card >
      <md-card-media >
       <img :src=imageLink alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">{{release_date}}</div>
      </md-card-header>
      <md-card-expand>
        <md-card-actions md-alignment="space-between">
           <md-button class="md-primary" @click="recommender">
              <!-- <md-icon >favorite</md-icon> -->
              more movies like this
            </md-button>

          <md-card-expand-trigger>
            <md-button class="md-primary">overview</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content >
          <md-card-content>
                  {{overview}}
          </md-card-content>
        </md-card-expand-content>
        </md-card-actions>
      </md-card-expand>
    <md-snackbar class="md-scrollbar" :md-active.sync="showRecommender" md-position="center" md-duration="40000">    
           <recommenderCard  v-for="item in recommenderMovies" :key="item.index" v-bind:message="item"></recommenderCard>
      <md-button class="md-fab md-plain md-mini closeBtn"  @click="showRecommender=false">
        <md-icon>close</md-icon>
      </md-button>
    </md-snackbar>
    </md-card>
</template>
<script>// https://api.douban.com/v2/
import recommenderCard from "./recommender.vue"
export default {
        name:'',
        props:["message"],
        data(){
            return {
              overview:'',
              popularity:null,
              poster_path:'',
              release_date:'',
              vote_average:null,
              imageLink:'',
              backdrop_path:'',
              showRecommender:false,
              show:false,
              recommenderMovies:[],
              title:''
            }
        },
        components:{
          recommenderCard
        },
        created() {
          this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=69186e589fea05ca3633aa8ebff8912e&language=en-US&query="+this.message.name+"&page=1&include_adult=false&year="+this.message.time+"").then(
            response=>{
              console.log(response.body.results[0]);
              let data =response.body.results[0];
              this.overview = data.overview;
              this.title = data.title;
              this.popularity =data.popularity
              this.poster_path=data.poster_path;
              this.release_date =data.release_date;
              this.vote_average = data.vote_average;
              this.backdrop_path = data.backdrop_path
              this.imageLink = "https://image.tmdb.org/t/p/w500/" +this.poster_path
            },response=>{
            }
          )
        },
        computed:{
        },
        methods:{
          recommender(){
          this.$http.get("https://m3eg3ubuzg.execute-api.us-east-1.amazonaws.com/dev/recommender/"+this.message.id).then(
            response=>{
              let data = response.data;
              console.log(data);
              this.recommenderMovies = data;
              this.showRecommender=!this.showRecommender;
              })
          }
        }
    }
</script>
<style lang="scss" scoped>
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-card-content{
    height: 238px;
    overflow:hidden;
    text-overflow: ellipsis; 
  }
  .md-snackbar{
    // width: 1400px;
    // height: 300px;
    max-width:1200px;
    max-height:230px;
    overflow:auto;
  }
  .closeBtn{
    position: fixed;
    // right: 0;
    bottom: 202px;
    right: 100px;
  }
</style>
