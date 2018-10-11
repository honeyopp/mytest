const http=require('http');
const fs=require('fs');
const mysql=requirer('mysql');
const io=require('socket.io');

//数据库
let db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'dede'});
//1. http服务器
 let httpServer=http.createServer（(req,res)=>{
   fs.readFile(`www${req.url}`,(err,data)=>{
     if (err){
       res.writeHeader(404);
       res.write('Not Found');
     }else{res.write();}
     res.end();
   })
 });
 httpServer.listen(8080);

 1.
 if (!/^\w{6,32}$/.test(user)) {
   res.write(JSON.Stringify({code:1,msg:"用户名不符合规范"}))

 }
 else if（JSON.Stringify(!/^.{6,32}$/.test(pass))){
   res.write({code:1,msg:'密码不符合规范'});
 }
 else{
   2. 检验用户名是否重复。
    db.query(`select * from user_table where username='${user}'`,(err,data)=>{
      if (err){
        res.write(JSON.Stringify({code:1,msg:'此用户名已经存在'}))；

        res.end();
      }
      else {
         db.query(`insert into user_table(username,password,online) values('${user}','${pass}',0)`,err=>{
           res.end();
         });
      }
    })
 }
