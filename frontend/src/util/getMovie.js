const http = require('https');
 //https://api.themoviedb.org/3/movie/550?api_key=69186e589fea05ca3633aa8ebff8912e
// let getMovie= new Promise((resolve,reject)=>{
//     http.get('https://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a', (resp) => {
//   let data = '';
 
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
 
//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//       console.log(data);
//       resolve(data)
//   });
 
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// })
// export default getMovie;
