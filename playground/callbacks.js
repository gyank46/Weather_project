var getUser = function(id,name,callback){
  var user ={
    id,
    name
  };
  callback(user);
  // callback=function(user){
  //   console.log(user);
  // };
};

getUser(31,'gyan',(user)=>{
  console.log(user);
});
getUser(32,'sittu',(user)=>{
  console.log(user);
});
