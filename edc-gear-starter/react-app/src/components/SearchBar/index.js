import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllSearch } from "../../store/search"
import "./Search.css"

function SearchBar() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const history = useHistory()
    
    useEffect(()=> {
        
    }, [search])
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    let searchRes ; 
    const handleSearch = async (e) => {
        e.preventDefault();
        
        const searchQuery = search
        
        if (searchQuery === " " || searchQuery === "" ) {
        //     //return no result found 
            setSearch("")
         }
        
         if(searchQuery) {
            // get all results including users and hash tags
            // users will be de displayed first 
            if(searchQuery === "#") {
                history.push(`/search-results/get-all-tags`)
                setSearch("")

            } else if(searchQuery[0] === "#") {
                searchRes = await dispatch(getAllSearch(searchQuery.split("#")[1]))
                if (searchRes) {
                    history.push(`/search-results/${searchQuery.split("#")[1]}`) 
                    setSearch("")
                } else {
                    history.push(`/search-results/404-no-res-found`)
                    setSearch("")
                }
            } else {
                searchRes = await dispatch(getAllSearch(searchQuery))
                if(searchRes) {
                    history.push(`/search-results/${searchQuery}`)
                    setSearch("")
                } else {
                    history.push(`/search-results/404-no-res-found`)
                    setSearch("")
                }
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
                            placeholder=" Search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;