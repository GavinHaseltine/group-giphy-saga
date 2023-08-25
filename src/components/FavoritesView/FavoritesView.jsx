import axios from 'axios';
import { useState, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


function FavoritesView() {

    const [newFavorite, setNewFavorite] = useState([])
    const [category, setCategory] = useState([])
    const [putCategory, setPutCategory] = useState('')
    const history = useHistory()


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

    const saveCategory = (value, value2) => {
         console.log("id", value2)
        axios.put(`/api/favorite/:${event}`)
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
            <Button onClick={handleBack} variant="contained">Search Page</Button>
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
                                    <MenuItem key={index} value={category.id} value2={category.name}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <img src={favorite.url} alt="favorite"></img>
                    </li>
                ))}
            </ul>
        </>
    )
                }

export default FavoritesView