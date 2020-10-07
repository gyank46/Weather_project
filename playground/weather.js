const request = require('request');
const moment =require('moment');


// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDM37-wPAyYP6un8Zj30znBBQ8BBEwQavU&address=jehanabad%20bihar' ,
//   json: true
// },(error, response, body)=>{
//
//   });
request({
  url: 'https://api.darksky.net/forecast/f67ea4a28217b5aec90d9459c395322d/25.1515827,84.981754',
  json :true
},(error,response,body)=>{
  //console.log(typeof body.currently);
  console.log(JSON.stringify(body.currently.temperature));
  var timestamp= body.currently.time*1000;
  // var date = new Date(timestamp);
  // var todate=new Date(timestamp).getDate();
  // var tomonth=new Date(timestamp).getMonth()+1;
  // var toyear=new Date(timestamp).getFullYear();
  // var original_date=tomonth+'/'+todate+'/'+toyear;
  var time = moment(timestamp).format("h:mm:ss")
  console.log(time);
});
