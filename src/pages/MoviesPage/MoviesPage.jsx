import { useEffect, useState } from 'react'
import requests from '../../api/requests'
import Axios from '../../api/apiClient'
import { Grid } from '@mui/material'
import Movie from '../../components/Movie/Movie'

const url = requests.fetchListMovies

function MoviesPage() {
    const [listMovies, setListMovies] = useState([])
    const fetchData = async () => {
        const res = await Axios.get(url)
        console.log(res.data.results);
        setListMovies(res.data.results)
    }
    useEffect(() => {
        fetchData()
    }, [url])

    return (
        <Grid container>
            {listMovies.map(movie => (
                <Grid xs={3} item key={movie.id}>
                    <Movie movie={movie} key={movie.id} />
                </Grid>
            ))}
        </Grid>
    )
}

export default MoviesPage