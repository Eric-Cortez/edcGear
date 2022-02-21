import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getAllSearch } from "../../store/search"

function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=> {
        
    }, [search])
    
   


    let searchRes ; 
    const handleSearch = async (e) => {
        e.preventDefault();
        
        const searchQuery = search
        
        if(searchQuery === "") {
        //     //return no result found 
            console.log("404 page")
         }
        
         if(searchQuery) {
            // get all results including users and hash tags
            // users will be de displayed first 
            if(searchQuery[0] === "#") {
                console.log( "split",typeof searchQuery.split("#")[1])
                searchRes = await dispatch(getAllSearch(searchQuery.split("#")[1]))
                console.log("res",   searchRes)
                history.push(`/search-results/${searchQuery.split("#")[1]}`) 
            } else {

                searchRes = await dispatch(getAllSearch(searchQuery))
                history.push(`/search-results/${searchQuery}`)
            }
        } 
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