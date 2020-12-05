
import React from 'react';
import Loader from 'react-loader-spinner';
import '../styles/SearchTable.css';


const SearchBar = (props)=>{
    if(props.loading){
        return (
            <div className="loader">
                <Loader
                    type="Grid"
                    color="#6e01b6"
                    height={50}
                    width={50}
                />
                <p>Loading Company Data</p>
            </div>
        );
    }
    if(!!props.data ===false){
        return <div className="search-table-not-found">
            Your company data is unavailable... Maybe your company's stocks are in loss.
        </div>
    }
    return (
        <div id="searchTable">
                <div className="row">
                    <div className="col heading date">Date</div>
                    <div className="col heading value">Predicted Value</div>
                </div>
                {
                    Object.keys(props.data).map((date)=>{
                        return (
                            <div className="row" key={date}>
                                <div className="col date">{date}</div>
                                <div className="col value">{props.data[date]}</div>
                            </div>
                        );
                    })
                }
        </div>
    );
}

export default SearchBar;