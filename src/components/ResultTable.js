
import React from 'react';
import Loader from 'react-loader-spinner';
import '../styles/ResultTable.css';


const ResultTable = (props)=>{
    if(props.loading){
        return (
            <div className="loader">
                <Loader
                    type="Grid"
                    color="#6e01b6"
                    height={50}
                    width={50}
                />
                <p>Loading Result</p>
            </div>
        );
    }
    return (
        <div id="resultTable">
            <div className="date">{props.data.date}</div>
            {
                Object.keys(props.data.data).map((company)=>{
                    return (
                        <div className="row" key={company}>
                            <div className="col company">{company}</div>
                            <div className="col price">{props.data.data[company]}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ResultTable;