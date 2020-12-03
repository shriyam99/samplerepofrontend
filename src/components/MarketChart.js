import React from 'react';
import '../styles/MarketChart.css';

const MarketChart = (props)=>{
    return (
        <div className="market-chart">
            <h1>Daily Market Chart</h1>
            <div className="chart-wrapper">
                <iframe src="https://reactivemarkets.github.io/react-financial-charts/iframe.html?id=features-full-screen--daily&viewMode=story" title="finance-chart" frameBorder="0" scrolling="no"/>
            </div>
        </div>
    );
}

export default MarketChart;