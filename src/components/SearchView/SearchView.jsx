import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";


function SearchView() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const searchReducer = useSelector(store => store.searchReducer);

    const getGifs = () => {
        dispatch({ type: 'SET_SEARCH' })
    }

    return (
        <div>
            <header>
                <h1>GIPHY SEARCH</h1>
            </header>
            <input value={search} placeholder='SEARCH' onChange={(event) => setSearch(event.target.value)}></input>
            <button onClick={getGifs}>SEARCH</button>
            <div>{searchReducer}</div>
        </div>
    )
}

export default SearchView;