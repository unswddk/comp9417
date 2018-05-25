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
          <div>
           <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-primary">overview</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content >
          <md-card-content>
                  {{overview}}
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
</template>
<script>// https://api.douban.com/v2/
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
              show:false,
              title:''
            }
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
        // imageLink(){
        //     console.log(this.message.images.medium)
        //     return this.message.images.medium;},
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
</style>
