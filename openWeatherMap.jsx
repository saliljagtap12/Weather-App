var axios= require('axios');

const Open_Weather_Map_Url='http://api.openweathermap.org/data/2.5/weather?appid=3e6184d3b5a7e11052c1124d03ce6236&units=metric'


module.exports={
  getTemp: function (location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${Open_Weather_Map_Url}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function (res) {
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message)
        }else{
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error(res.data.message);
      });

  }
}
