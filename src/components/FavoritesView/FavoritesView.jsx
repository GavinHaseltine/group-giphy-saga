import axios from 'axios';
import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


function FavoritesView() {

    const [newFavorite, setNewFavorite] = useState([])
    const [category, setCategory] = useState([])
    const [putCategory, setPutCategory] = useState('')


    console.log("category.id", category.id)

    const getFavorite = () => {
        axios.get('/api/favorite')
            .then((response) => {
                console.log('response:', response.data)
                setNewFavorite(response.data);

            }).catch((error) => {
                console.log('error with the GET favorite', error)
            })
    }

    const handleBack = () => {
        history.push('/')
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

    const saveCategory = (event) => {
        // console.log("id", event.id)
        axios.put(`/api/favorite/:${putCategory}`)
        .then((response) => {
            // console.log(response)
        })
        .catch((error) => {
            console.log("Error on PUT", error)
        })
    }

    useEffect(() => {
        getFavorite(),
        getCategories()
    }, [])


    return (
        <>
            <h1>Favorites View</h1>
            <ul>
                {newFavorite.map((favorite, index) => (
                    <li key={index}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel>SELECT CATEGORY</InputLabel>
                            <Select
                                onChange={(event) => saveCategory(event.target.value)}
                            >
                                <MenuItem>
                                    <em>None</em>
                                </MenuItem>
                                {category.map((category, index) => (
                                    <MenuItem key={index} value={category.name}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <img src={favorite.url} alt="favorite"></img>
                    </li>
                ))}
            </ul>
            <Button onClick={handleBack} variant="contained">Search Page</Button>
            <ul> 
                {newFavorite.map((favorite, index) => (
                    <li key={index}> 
                        {favorite.url}
                    </li>
                ))}
            </ul>
        </>
    )
                }

export default FavoritesView