import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'

const API_KEY = '992e628de9fb7c2d45c8a82dc61259fc';

class WeatherApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: '',
      weather: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(term) {
    // event.preventDefault();
    const city = term;

    // Only make API call unless search term was saved in the constant city when form was sumbitted.
    if(city)  {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result,
              weather: result.weather[0],
            });
            console.log('Results of API Call');
            console.log(result);
            console.log('Results of State');
            console.log(this.state.items);
            console.log(this.state.weather);


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
    {/* Store Icon in const to be used in image url */}
    const icon = this.state.weather.icon;
    {/* Image URL to use as src to display icon for current weather condition */}
    const url = `http://openweathermap.org/img/w/${icon}.png`;

      return(
        <div>
            Weather app
            <ul>
              <li><a href="">Today</a></li>
              <li><a href="">5-day forcast</a></li>
            </ul>

            <SearchBar onSearchTermChange={this.componentDidMount}/>

              {/* Only display image if state has stored icon value */}
                {this.state.weather.icon &&
                  <img src={url} />
                } <br />
            {this.state.items.name}<br />
            {this.state.weather.description}



        </div>
      );

  }
}

ReactDOM.render(
  <WeatherApp />,
   document.getElementById('app')
 );
