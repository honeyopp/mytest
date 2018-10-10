# websocket聊天室.直播。
 -. webSocket 数据交互
    1. 性能高
    2. 双向--数据实时性，
    3. HTML5 ,IE9+支持。
    4. socket.io（跨域）
    5. 直播涉及到视频采集的问题。
 -. sokcet.io:
    1. 兼 容
    2. 可以传输二进制，而http只能传输文本。图片视频是相当于转换为base64 然后进行传输。
 ```javascript
const http=require('http');
let server=http.CreateServer
server.listen(9900);
console.log("successful");

version 2:有人请求，默认有回调函数。
  let server=http.CreateServer(function(request,response){
    console.log(`:请求的地址：${request.url}`);
    console.log(`:请求的方法：${request.method}`);
    response.write('sas');
    response.end();
  });
version 3: 客户端请求要什么，给它什么。
    // 加入 if else 可以判断。
version 4: fs 解决verson 3  if else 太多的请求，不可能用if else的问题。//

const fs =require('fs');
fs.readFile('1.txt',(err,data)=>{
  if (err) {
    console.log('sdf');
  } else {
    console.log("成功");
  }
// buffer最大限制。2g

});

version 5: 综合3和4版本的最终实现//
const http=require('http');
const fs=require("fs");
let  server=http.CreateServer(function(req,res){
    fs.readFile(`adxa${req.url}`,(err,data)=>{
      if (err) {
        // res.writeHeader("404");
        // res.write('Not Found');
         // 返回404页面
          fs.readFile("404.html");
      }else{res.write(data);}
    });
  res.end();
});
server.listen(8080);
   res.write();
   // resful rtesjad
   res.send();
```
# webSocket
```javascript
1. 工具+中间层的东西。   
2. http+ fs 模块。
let server=http.CreateServer((req.res)=>{
  req.url/method/host
  res.write/end

});


webSocket 能兼容到IE6. webSocket 天然跨域 file：///   可以到---->http://localhost:8080
  cnpm init


   chatroOm，聊天室，视频点播。
   聊天室：
     1. 用户注册，登陆。
     2. 发言->其他人，。
     3. 离线，不想听别人的发言，
空间型数据库， 地图的坐标，位置，就存在这种数据库里面。 GIS



性能。 redis memcacahed bigtable hypertable
       redis不支持应用hive支持
 zhe shi 

```
