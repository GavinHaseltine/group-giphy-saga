import axios from 'axios';
import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function FavoritesView() {
    const history = useHistory()

    const [newFavorite, setNewFavorite] = useState([])
    const [category, setCategory] = useState([])
    const [putCategory, setPutCategory] = useState([])

    const getFavorite = () => {
        axios.get('/api/favorite')
            .then((response) => {
                console.log('response:', response.data)
                setNewFavorite(response.data);

            }).catch((error) => {
                console.log('error with the GET favorite', error)
            })
    }

    const getCategories = () => {
        axios.get('/api/category')
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.log('ERROR with getCategories', error);
            });
    }

    useEffect(() => {
        getFavorite(),
            getCategories()
    }, [])

    const handleBack = () => {

        history.push('/')
    }

    return (
        <>
            <h1>Favorites View</h1>
            <ul>
                {newFavorite.map(favorite =>

                    //the if codition for the drop box goes here 

                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel>SELECT CATEGORY</InputLabel>
                            <Select
                                required
                                type="number"
                                onChange={(event) => setPutCategory(event.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {category.map(category => {
                                    return <MenuItem value={category.name}>{category.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <img key={favorite.id} src={favorite.url}>

                        </img></li>
            <Button  onClick={handleBack} variant="contained">Search Page</Button>
    
            <ul> 
                {newFavorite.map(favorite => 
                //the if codition for the drop box goes here 
                <li key={ favorite.id }> 
                    {favorite.url}
                </li>

                )}
            </ul>


        </>
    )
}

export default FavoritesView