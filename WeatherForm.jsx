var React = require('react');

var WeatherForm = React.createClass({
  onSubmitForm:function (e) {
    e.preventDefault();

    var location= this.refs.location.value;
    if(location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }


  },
  render:function () {
    return(
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref="location"></input>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
