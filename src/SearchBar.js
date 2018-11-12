import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

  }

  render(){
      return(
        <div id="searchbar">
          <form>
            <input
              name='city'
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              />
            </form>
        </div>
      );
  }

  onInputChange(term){
    this.setState({term});
      // this.props.onSearchTermChange(term);
      console.log(this.state.term);
  }

}
