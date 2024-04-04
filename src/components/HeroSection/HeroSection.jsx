
import { Box, Button, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Axios from '../../api/apiClient';
import { Slide } from 'react-slideshow-image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

HeroSection.propTypes = {
    url: PropTypes.string.isRequired,
};

function HeroSection({ url }) {
    const [heroMovies, setHeroMovies] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailers, setTrailers] = useState([]);


    const handleOpen = (index) => {
        setTrailer(trailers[index][0]?.key)
        setShowTrailer(true)
    }

    const handleClose = () => {
        setShowTrailer(false)
    }
    const fetchData = async () => {
        const res = await Axios.get(url)
        console.log(res.data.results);
        setHeroMovies(res.data.results)
        const trailers = await Promise.all(
            res.data.results.map(async (movie) => {
                const res = await Axios.get(
                    `/movie/${movie.id}/videos?api_key=7e7d480a2f64d74d55ed00b491b707ee`
                )
                return res.data.results
            })
        )
        setTrailers(trailers)
    }
    useEffect(() => {
        fetchData()
    }, [url])


    const properties = {
        prevArrow: <IconButton sx={{ color: '#fff' }}><ArrowBackIosIcon /></IconButton>,
        nextArrow: <IconButton sx={{ color: '#fff' }}><ArrowForwardIosIcon /></IconButton>
    }

    return (

        <>
            <Slide {...properties} style={{ display: 'flex', alignItems: 'center' }}>
                {heroMovies.map((movie, index) => (
                    <Box key={movie.id} sx={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '0% 50%',
                        height: '87vh',
                        position: 'relative'
                    }}>


                        <Box sx={{
                            width: 'inherit',
                            height: 'inherit',
                            background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8071603641456583) 30%, rgba(0,0,0,0) 100%)',
                            position: 'relative'
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: '20%',
                                left: '10%',
                                width: '40%'
                            }}>
                                <Typography variant='h3' sx={{ color: 'white', fontWeight: 'bold', paddingBottom: '25px' }}>{movie.title.toUpperCase()}</Typography>
                                <Typography variant='body1' sx={{ color: 'white', fontSize: '17px', paddingBottom: '25px' }}>{movie.overview.substring(0, 200) + '...'}</Typography>
                                <Button sx={{ color: '#fff', backgroundColor: '#B80000' }} onClick={() => handleOpen(index)} startIcon={<PlayArrowIcon />}>Watch Trailer</Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slide>
            {showTrailer && (
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,

                }}

                >
                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                        onClick={handleClose}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=0&loop=1&playlist=${trailer}`}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            style={{ width: "70%", height: "500px" }}
                        ></iframe>
                    </Box>
                </Box>
            )}
        </>
    );
}

export default HeroSection
