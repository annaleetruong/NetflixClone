import { useEffect, useState } from "react"
import Axios from "../../api/apiClient"
import requests from "../../api/requests"
import { Grid } from "@mui/material"
import Movie from "../../components/Movie/Movie"

const url = requests.fetchNewAndPopular

function TrendingPage() {
    const [listTrending, setListTrending] = useState([])
    const fetchData = async () => {
        const res = await Axios.get(url)
        console.log(res.data.results)
        setListTrending(res.data.results)

    }
    useEffect(() => {
        fetchData()
    }, [url])
    return (
        <Grid container>
            {listTrending.map(trending => (
                <Grid xs={3} item key={trending.id}>
                    <Movie movie={trending} key={trending.id} />
                </Grid>
            ))}
        </Grid>
    )
}

export default TrendingPage