import { useEffect, useState } from "react";
import Slider from "react-slick";
import Axios from "../../api/apiClient";
import Movie from "../Movie/Movie";
import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";

ListMovies.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isTv: PropTypes.bool
}
function ListMovies({ title, url, isTv }) {
    const [listMovies, setListMovies] = useState([])
    const fetchData = async () => {
        const res = await Axios.get(url)
        console.log(res.data.results)
        setListMovies(res.data.results)
    }
    useEffect(() => {
        fetchData()
    }, [url])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };

    return (
        <Box sx={{ padding: '1% 2% 0% 2%' }}>
            <Typography
                variant="h5"
                sx={{ color: "#fff" }}
            >{title}</Typography>
            <Slider {...settings}>
                {listMovies.map((movie) => (
                    <Movie movie={movie} key={movie.id} isTv={isTv} />
                ))}
            </Slider>
        </Box>

    )
}

export default ListMovies