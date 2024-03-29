var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState: function () {
  return{
    isLoading:false
  }
},
  handleSearch:function (location) {
    var that = this;
    debugger;
    this.setState({isLoading:true})

    openweathermap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading:false
      });
    }, function (errorMessage) {
      that.setState({isLoading:false});
      alert(errorMessage);

    })

  },
  render:function () {
    var {isLoading,temp,location}=this.state;
    function renderMessage() {
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      } else if(temp && location)
      return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
    }

    return(
      <div>
      <h3>This is Weather Component</h3>
      <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
