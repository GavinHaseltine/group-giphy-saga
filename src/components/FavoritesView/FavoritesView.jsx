import axios from 'axios';
import {useState, useEffect} from 'react'


function FavoritesView() {

    const[newFavorite, setNewFavorite] = useState([])

    const getFavorite = () => {
    axios.get('/api/favorite')
        .then((response) => {
            console.log('response:', response.data)
            setNewFavorite(response.data);
            
        }).catch((error) => {
            console.log('error with the GET favorite', error)
        })
    }

    useEffect( () => {
        getFavorite();
    }, [])
   

    return (
        <>
            <h1>Favorites View</h1>
        
            <ul> 
                {newFavorite.map(favorite => 
                //the if codition for the drop box goes here 
                <li key={ favorite.id }> 
                    {favorite.url}
                </li>
                //Drop down goes here 
                )}
            </ul>


        </>
    )
}

export default FavoritesView