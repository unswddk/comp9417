<template>
  <md-card>
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
           <img :src=imageLink alt="People">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">{{title}}</span>
            <span class="md-subhead">{{release_date}}</span>
          </md-card-header>
          <!-- <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions> -->
        </md-card-area>
      </md-card-media-cover>
    </md-card>
</template>
<script>
    export default{
        name:"reconmmenderCard",
        props:["message"],
        data(){
            return{             
                overview:'',
                popularity:null,
                poster_path:'',
                release_date:'',
                vote_average:null,
                imageLink:'',
                backdrop_path:'',
                show:false,
                recommenderMovies:[],
                title:''

            }
        },
        created(){
        let time =  this.message.substring(this.message.length - 5,this.message.length - 1);
        let name = this.message.substring(0,this.message.length-7);
        this.$http.get("https://api.themoviedb.org/3/search/movie?api_key=69186e589fea05ca3633aa8ebff8912e&language=en-US&query="+name+"&page=1&include_adult=false&year="+time+"").then(
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
        }
    }
</script>
<style lang="scss" scoped>

</style>
