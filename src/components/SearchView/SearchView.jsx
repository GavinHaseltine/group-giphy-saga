import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function SearchView() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()

    const searchReducer = useSelector(store => store.searchReducer);

    console.log("🔴", searchReducer.map((gif) => gif));

    const getGifs = () => {
        dispatch({ type: 'SET_SEARCH', payload: search })
    }

    const likeGif = (gif) => {
        console.log("clicked on heart")
        dispatch({type: 'LIKE_GIF', payload: {gif}}
    )}

    const handleFavorite = () => {

        history.push('/favoritesview')
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
                <button onClick={() => likeGif(gif.images.original.url)}>❤️</button> </div>
            ))} </div>
            <button className="fancyBtn" onClick={handleFavorite}>Favorites</button>
        </div> 
    )
}

export default SearchView;