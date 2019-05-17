import React, { Component } from 'react';

const API_KEY = '992e628de9fb7c2d45c8a82dc61259fc';

export default class WeatherAPI extends Component{
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: '',

    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(term) {
    // event.preventDefault();
    const city = "New York";

    // Only make API call unless search term was saved in the constant city when form was sumbitted.
    if(city)  {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {

            for(var i = 0; i < result.list.length; i+=8){
              console.log(i);
              console.log(result.list[i]);
            };


            this.setState({
              isLoaded: true,
              items: result.list,
            });
            console.log(result.list.length);

            console.log('Results of API Call');
            console.log(result);
            console.log('Results of State');
            console.log(this.state.items);

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: false,
              error
            });


          }
        )
      }
    }



  render(){
    return(

      <h1>Forecast</h1>

    );
  }

}
