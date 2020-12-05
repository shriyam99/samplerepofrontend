
import React, {useState} from 'react';
import SearchTable from './SearchTable';
import '../styles/SearchBar.css';
import axios from 'axios';


const SearchBar = (props)=>{
    const [isloading, setLoader] = useState(false);
    const [data, setData] = useState(null);
    const [firstCall, setFirstCall] = useState(false);
    const submitHandler = (e)=>{
        e.preventDefault();
        let company = e.target.company.value;
        setFirstCall(true);
        setLoader(true);
        axios.get(`http://localhost:8081/search/${company}`)
        .then((res)=>{
            setData(res.data);
            setLoader(false);
        })
        .catch((err)=>{
            setLoader(false);
            setFirstCall(false);
        });
    }
    return (
        <div id="searchBar">
            <h1 className="searchbar-heading">Search Company</h1>
            <form onSubmit={submitHandler}>
                <input required id="company-field" name="company" type="text" placeholder="Type in your company name:"/>
                <button id="company-btn">Submit</button>
                {firstCall? <SearchTable
                    loading={isloading}
                    data={data}
                /> :null}
            </form>
        </div>
    );
}

export default SearchBar;