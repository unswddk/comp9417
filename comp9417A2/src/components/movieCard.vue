<template>
  <md-card>
     <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{message.original_title}}</div>
          <div class="md-subhead">{{message.pubdate}}</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img :src=imageLink alt="People">
        </md-card-media>
      </md-card-header>
      <md-card-content>                
    Stars: {{message.stars}}<br>
            Wish: {{message.wish}}</md-card-content>
      <md-card-actions md-alignment="left">
        <md-button class="md-primary">Like</md-button>
        <md-button class="md-accent">Dislike</md-button>
      </md-card-actions>
    </md-card>
</template>
<script>// https://api.douban.com/v2/
    export default {
        name:'',
        props:["message","index"],
        data(){
            return {
            }
        },
        created() {
            console.log(this.message)
        },
        computed:{
            imageLink(){
                return this.message.images.small;
            }
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
</style>
