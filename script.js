var request=new XMLHttpRequest();
request.open("GET",https://restcountries.com/v3.1/all);
request.send();
request.onload=function(){
    var result=jason.parse(request.response);
    console.log(result);
}