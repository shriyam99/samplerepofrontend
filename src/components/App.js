import React, { Component, useEffect, useState } from 'react';
import '../styles/App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import TopNews from './TopNews';
import MarketAction from './MarketAction';
import MarketChart from './MarketChart';
// import testData from '../testData.json';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: null,
      stockData: null,
      isStockLoading: true,
      newsData: null,
      isNewsLoading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get("http://localhost:8081/getstockData")
      .then((res)=>{
      this.setState({stockData: res.data});
      this.setState({isStockLoading: false});
    })
    .catch((err)=>{
      console.log(`Something went wrong: ${err}`);
      this.setState({isStockLoading: false});
    });

    axios.get("http://localhost:8081/getNews")
      .then((res)=>{
      this.setState({newsData: res.data.news});
      this.setState({isNewsLoading: false});
    })
    .catch((err)=>{
      console.log(`Something went wrong: ${err}`);
      this.setState({isNewsLoading: false});
    });
  }

   handleSubmit(e) {
    e.preventDefault();
    this.setState({isLoading: true});
    let price = e.target.price.value;
    let time = e.target.time.value;
    axios.get(`http://localhost:5000/${time}/${price}`).then((res)=>{
      console.log(res.data);
      // this.setState({data: res.data});
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
          <form onSubmit={this.handleSubmit}>
            <h1>Type in your parameters: </h1>
            <input type="text" id="price" name="price" required placeholder="Price in rupees"/>
            <input type="text" id="time" name="time" required placeholder="Time in days"/>
            {this.state.isLoading===true ? <p>Fetching data...</p> : null}
            {this.state.data!==null ? <div className="dataToShow">{this.state.data}</div> : null}
            <button id="submit">Submit</button>
          </form>
        </div>
    </div>
    <MarketChart />
    <MarketAction 
      loading={this.state.isStockLoading}
      data={this.state.stockData}
    />
    <TopNews 
      loading={this.state.isNewsLoading}
      data={this.state.newsData}
    />
    
    </React.Fragment>
    );
  }
}
export default App;
