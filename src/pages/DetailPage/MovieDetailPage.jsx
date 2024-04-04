import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../api/apiClient";

const apiKey = "7e7d480a2f64d74d55ed00b491b707ee"
function MovieDetailPage() {
    const { type, movieId } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [trailer, setTrailer] = useState()
    const [showTrailer, setShowTrailer] = useState(false)

    const handleShowTrailer = () => {
        if (showTrailer) {
            setShowTrailer(false)
        } else {
            setShowTrailer(true)
        }
    }

    useEffect(() => {
        const fetchData = async (movieId) => {
            const res = await Axios.get(
                `/${type}/${movieId}?api_key=${apiKey}${type === 'movie' ? '&append_to_response=videos' : ''}`
            )
            console.log(res);
            setMovieDetail(res.data)
            console.log(res.data.videos.results[0].key);
            setTrailer(res.data.videos.results[0].key)
        }
        fetchData(movieId)
    }, [])
    return (
        <Box sx={{
            position: 'relative',
            height: "calc(100vh - 86.233px)",
        }}>

            <Box
                sx={{
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: '0 50%',
                    filter: 'blur(3px)'
                }} >
            </Box>
            <Box sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Box
                        sx={{
                            width: '20%',
                        }}>
                        <img src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`} style={{ width: '250px' }} />
                    </Box>
                    <Box
                        sx={{
                            width: '50%'
                        }}
                    >
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', padding: '0 0 3% 0' }}>
                            {movieDetail.title ? movieDetail.title : movieDetail.name} ({movieDetail.original_title ? movieDetail.original_title : movieDetail.original_name})
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '21px' }}>Overview</Typography>
                        <Typography variant='body1' sx={{ color: 'white', fontSize: '17px', padding: '0 0 3% 0' }}>{movieDetail.overview}</Typography>
                        {trailer && <Button sx={{ color: 'rgb(240, 240, 240)', backgroundColor: '#B80000' }} onClick={handleShowTrailer} startIcon={<PlayArrowIcon />}>Watch Trailer</Button>}

                    </Box>
                </Box>
            </Box>
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
                        onClick={handleShowTrailer}
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
        </Box>

    )
}

export default MovieDetailPage