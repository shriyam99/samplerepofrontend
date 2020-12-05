import React, { Component } from 'react';
import '../styles/App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import TopNews from './TopNews';
import MarketAction from './MarketAction';
import MarketChart from './MarketChart';
import ResultTable from './ResultTable';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCall: false,
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
    this.setState({firstCall: true, isLoading: true});
    let price = e.target.price.value;
    let time = e.target.time.value;
    axios.get(`http://localhost:5000/${time}/${price}`).then((res)=>{
      console.log(res.data);
      if(res.data==="data_fetched"){
        axios.post("http://localhost:8081", {
          time
        })
        .then((res)=>{
          this.setState({data: res.data, isLoading: false});
          console.log(res.data);
        })
        .catch((err)=>{
          this.setState({isLoading: false});
          console.log(err);
        });
      }
    })
    .catch((err)=>{
      console.log(`Something went wrong: ${err}`);
      this.setState({isLoading: false});
    })

    //just to receive data from json...
    // axios.post("http://localhost:8081", {
    //   time
    // })
    // .then((res)=>{
    //   console.log(res.data);
    //   this.setState({data: res.data, isLoading: false});
    // })
    // .catch((err)=>{
    //   this.setState({firstCall: false, isLoading: false});
    //   console.log(err);
    // });
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
            {this.state.firstCall ?
            <ResultTable 
              data={this.state.data} 
              loading={this.state.isLoading}
            />: null}
            <button id="submit">Submit</button>
          </form>
        </div>
    </div>
    <SearchBar />
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
