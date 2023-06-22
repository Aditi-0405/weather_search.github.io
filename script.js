let weather={
    "apikey": "b490df48a68996b984fc435e8e845fbe",
    fetchdetails:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid=b490df48a68996b984fc435e8e845fbe"
        ).then((response)=>response.json())
        .then((data)=>this.displayweather(data)).catch(()=>{
            document.querySelector(".city").innerHTML="CITY NOT FOUND !"
            document.querySelector(".temp").innerHTML="";
            document.querySelector(".descp").innerHTML="";
            document.querySelector(".humid").innerHTML="";
            document.querySelector(".iconn").src="";

        });
        // if(data.Response=='True'){
        //    document.getElementById("cards").innerHTML=``;
        // }

    },
    
    displayweather: function(data){
    //   if(data.Response=='False'){
    //         document.getElementById("info").innerHTML=``;
    //      }
        //  else{
        
        console.log(data);  
        const{name}=data;
        const{temp}=data.main;
        const{humidity}=data.main;
       
        const{icon, description}=data.weather[0];
        console.log(name,temp,description);
    //    if(!city){
    //     document.getElementById("info").innerHTML=``;  
    //    }
    //    else{
        document.querySelector(".city").innerHTML="Weather in "+ name ;
        document.querySelector(".temp").innerHTML=temp+" °C";
        document.querySelector(".descp").innerHTML=description; 
        document.querySelector(".humid").innerHTML="Humidity: "+humidity+ "%";
        document.querySelector(".iconn").src="http://openweathermap.org/img/wn/"+ icon+"@2x.png";
    //    }
        //   }

    },
   
    searchhh: function (){
        if((document.querySelector(".search-bar").value).length==0){
            document.querySelector(".city").innerHTML="Enter A City !"
            document.querySelector(".temp").innerHTML="";
            document.querySelector(".descp").innerHTML="";
            document.querySelector(".humid").innerHTML="";
            document.querySelector(".iconn").src=""; 
        }
        else{
      this.fetchdetails(document.querySelector(".search-bar").value);
        }
    }
};
document.querySelector(".button").addEventListener("click",function(){
       weather.searchhh();     
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.searchhh();
    }
})
weather.fetchdetails("RANCHI");





















// https://api.openweathermap.org/data/2.5/weather?q=denver&appid=b490df48a68996b984fc435e8e845fbe