// create a request and request variable stores an ml http request

var request=new XMLHttpRequest();   

         // open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true); 

        // send the request
request.send(); 

        // Event Listener and load the response once its ready
request.onload=function()                                     


{
    var countryData=JSON.parse(this.response);
    console.log(countryData)
    
                 // This one is another method for printing country name //
   /*for(let i in countryData)
   {
       console.log(countryData[i].name);
   }*/
   for(i=0;i<countryData.length;i++)
   {
    
       console.log(countryData[i].flag);
   }
    };
