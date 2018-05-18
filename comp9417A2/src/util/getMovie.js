const http = require('http');
 
let getMovie= new Promise((resolve,reject)=>{
    http.get('http://api.douban.com/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
      console.log(data);
      resolve(data)
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
})
export default getMovie;
