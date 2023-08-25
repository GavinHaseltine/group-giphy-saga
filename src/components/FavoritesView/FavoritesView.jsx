import axios from 'axios';
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function FavoritesView() {
    const history = useHistory()

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

    const handleBack = () => {

        history.push('/')
    }
   

    return (
        <>
            <h1>Favorites View</h1>
            <Button  onClick={handleBack} variant="contained">Search Page</Button>
    
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