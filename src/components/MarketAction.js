import '../styles/MarketAction.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import Table from './DataTable';

const MarketAction = (props)=>{
    if(props.loading){
        return (
            <div className="loader">
                <Loader
                    type="Grid"
                    color="#6e01b6"
                    height={50}
                    width={50}
                />
                <p>Loading Market Tables</p>
            </div>
        );
    }
    return (
    <div className="allData">
        <h1 className="data-heading">Market action tables</h1>
        <Table 
            key={0}
            name="Indian Indices"
            dataList={props.data.indianIndicesData}
        />
        <Table 
            key={1}
            name="Global Markets"
            dataList={props.data.globalMarketData}
        />
        <Table 
            key={2}
            name="Most Active"
            dataList={props.data.mostActiveData}
        />
        <Table 
            key={3}
            name="Top Gainers"
            dataList={props.data.topGainersData}
        />
        <Table 
            key={4}
            name="Top Losers"
            dataList={props.data.topLosersData}
        />
        <Table 
            key={5}
            name="Commodities"
            dataList={props.data.commoditiesData}
        />
        <Table 
            key={6}
            name="Currencies"
            dataList={props.data.currenciesData}
        />
    </div>
  );
}

export default MarketAction;