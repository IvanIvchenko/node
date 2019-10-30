import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', value: 'city1'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  };

  cityChange(event) {
    this.setState({value: event.target.value});
};

  handleSubmit(event) {

    axios
    .post('/', {
	    	name: this.state.name,
        email: this.state.email,
        value: this.state.value,
    })

    
    
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <br />
          <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" value={this.state.email} onChange={this.handleChange('email')} />
        </label>
        <br />
        <label>
          City: <br />
          <select onChange={this.cityChange.bind(this)} value={this.state.value}>
                  <option value="city1">city1</option>
                  <option value="city2">city2</option>
                  <option value="city3">city3</option>
               </select>
               <p></p>
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}