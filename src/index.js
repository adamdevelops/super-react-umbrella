import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'

const API_KEY = '992e628de9fb7c2d45c8a82dc61259fc';

class WeatherApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      term: '',
      error: null,
      isLoaded: false,
      items: '',
    };
  }


  render(){

      return(
        <div>
            Weather app
            <ul>
              <li><a href="">Today</a></li>
              <li><a href="">5-day forcast</a></li>
            </ul>

            <SearchBar />


        </div>
      );

  }
}

ReactDOM.render(
  <WeatherApp />,
   document.getElementById('app')
 );
