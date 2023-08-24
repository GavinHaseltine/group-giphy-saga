import axios from 'axios';
import {useState} from 'react'

function FavoritesView() {

    const[newFavorite, setNewFavorite] = useState('')

    const getFavorite = () => {
    axios.get('/api/favorite')
        .then((response) => {
            console.log('response:', response.data)
            setNewFavorite(response.data);
        }).catch((error) => {
            console.log('error with the GET favorite', error)
        })
    }
    getFavorite();

    return (
        <>
            <h1>Favorites View</h1>
            <ul> 
                {newFavorite.map(favorite => 
                <li key={ favorite.id }> 
                    {favorite.url}
                </li>
                )}
            </ul>


        </>
    )
}

export default FavoritesView