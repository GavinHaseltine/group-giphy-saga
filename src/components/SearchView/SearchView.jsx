import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";


function SearchView() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const searchReducer = useSelector(store => store.searchReducer);

    console.log("🔴", searchReducer.map((gif) => gif));

    const getGifs = () => {
        dispatch({ type: 'SET_SEARCH', payload: search })
    }

    return (
        <div>
            <header>
                <h1>GIPHY SEARCH</h1>
            </header>
            <input value={search} placeholder='SEARCH' onChange={(event) => setSearch(event.target.value)}></input>
            <button onClick={getGifs}>SEARCH</button>
            <div>    {searchReducer.map((gif, index) => (<div>
                <img key={index} src={gif.images.original.url}/>
                <button>❤️</button> </div>
            ))} </div>
        </div> 
    )
}

export default SearchView;