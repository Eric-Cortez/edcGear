import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';


function SearchBar() {

    const [search, setSearch] = useState("")

    useEffect(()=> {

    })
    
    const handleSearch = async (e) => {
        e.preventDefault();
    //    logic goes here to - do 
    }

    return (
        <div id="nav-search">
            <form id="search-form" onSubmit={handleSearch}>
                <div id="search-div">
                        <input
                            id="search-input"
                            name='search'
                            type='text'
                            placeholder='Search'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button id="search-btn"><i className="fas fa-search">Search</i></button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;