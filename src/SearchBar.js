import React, { Component } from 'react'


export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  handleSubmit(event) {
    alert('A city was submitted: ' + this.state.term);
    this.props.onSearchTermChange(this.state.term);
    event.preventDefault();
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
