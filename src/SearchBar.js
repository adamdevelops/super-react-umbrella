import React, { Component } from 'react';

const API_KEY = '992e628de9fb7c2d45c8a82dc61259fc';


export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);

    }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    alert('A city was submitted: ' + this.state.term);
    this.componentDidMount();
    event.preventDefault();
  }


  componentDidMount() {
    // event.preventDefault();
    const city = this.state.term;

    // Only make API call unless search term was saved in the state when form was sumbitted.
    if(city != "")  {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
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
              isLoaded: true,
              error
            });
          }
        )
      }
    }

  render(){
      return(
        <div id="searchbar">
          <form onSubmit={this.handleSubmit}>
            <input name='city' value={this.state.term} placeholder = 'City...' onChange={this.handleChange} />
            <button>Get Weather</button>
            </form>
        </div>
      );
  }

}
