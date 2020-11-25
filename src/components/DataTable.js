import React from 'react';
import '../styles/DataTable.css';
const Table = (props)=>{
    return (
    <div className="data-table">
        <h2 className="heading">{props.name} : </h2>
        <div className="data">
            {
                (props.name==="Indian Indices")?
                <div className="row head">
                    <div className="col">Index</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%change</div>
                </div>:null
            }
            {
                (props.name==="Global Markets")?
                <div className="row head">
                    <div className="col">Indices</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%change</div>
                </div>:null
            }
            {
                (props.name==="Most Active")?
                <div className="row head">
                    <div className="col">Company</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">Value</div>
                </div>:null
            }
            {   
                (props.name==="Top Gainers")?
                <div className="row head">
                    <div className="col">Company</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%Gain</div>
                </div>:null
            }
            {
                (props.name==="Top Losers")?
                <div className="row head">
                    <div className="col">Company</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%Loss</div>
                </div>:null
            }
            {
                (props.name==="Commodities")?
                <div className="row head">
                    <div className="col">Commodity</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%Chg</div>
                </div>:null
            }
            {
                (props.name==="Currencies")?
                <div className="row head">
                    <div className="col">Currency</div>
                    <div className="col">Price</div>
                    <div className="col">Change</div>
                    <div className="col">%Chg</div>
                </div>:null
            }
            {
                props.dataList.map((data)=>{
                    return <div className="row" key={data.index}>
                        <div className="col">{data.index}</div>
                        <div className="col">{data.price}</div>
                        <div className="col">{data.change}</div>
                        <div className="col">{data.percentageChange}</div>
                    </div>
                })
            }
        </div>
    </div>
    );
}

export default Table;