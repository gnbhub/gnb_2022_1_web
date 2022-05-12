//모듈 추출
var fs = require('fs');
var http = require('http');


//서버 생성 및 실행
http.createServer(function(request, response){
    
    //쿠키 입력
    var date = new Date();
    date.setDate(date.getDate()+7);
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Set-Cookie':[
            'breakfast = toast;Expires = '+date.toUTCString(),
            'dinner = Chicken'
        ]
    });
    //쿠키 출력
    response.end('<h1>'+request.headers.cookie+'</h1>');
}).listen(24554, function(){
    console.log('Server Running at http://127.0.0.1:24554');
});