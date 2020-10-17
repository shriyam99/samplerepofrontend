import React, { Component, useEffect, useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleSubmit(e) {           
    e.preventDefault();
    this.setState({isLoading: true});
    let price = e.target.price;
    let time = e.target.time;
    console.log(e);
    console.log('submit button is clicked');
    axios.get("http://localhost:8081")
      .then((res)=>{
      console.log(res.data.body);
      this.setState({data: res.data.body});
      this.setState({isLoading: false});
    })
    .catch((err)=>{
      console.log(`Something went wrong: ${err}`);
      this.setState({isLoading: false});
    })

   }

  render(){
  return (
    <React.Fragment>
    <Header/>
    <div className="main-app">
        <div className="wrapper">
          <div className="center">
            <h1>Smart Investment</h1>
            <p>&lsquo;&lsquo;One solution to all your investment needs&rsquo;&rsquo;</p>
          </div>
        </div>
        <div className="wrapper">
          <form >
            <h1>Type in your parameters: </h1>
            <input type="text" onChange={this.handleChange} id="price" name="price" required placeholder="Price in rupees"/>
            <input type="text" onChange={this.handleChange} id="time" name="time" required placeholder="Time in days"/>
            {this.state.isLoading===true ? <p>Fetching data...</p> : null}
            {this.state.data!==null ? <div className="dataToShow">{this.state.data}</div> : null}
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
    </div>
    </React.Fragment>
    );
  }
}
export default App;
