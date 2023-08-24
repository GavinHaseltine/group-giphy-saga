import axios from 'axios';

function FavoritesView() {

    const getFavorite = () => {
    axios.get('/api/favorite')
        .then((response) => {
            console.log('response:', response)
        }).catch((error) => {
            console.log('error with the GET favorite', error)
        })
    }

    return (
        <>
            <h1>Favorites View</h1>
            


        </>
    )
}

export default FavoritesView