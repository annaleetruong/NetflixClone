import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


Movie.propTypes = {
    movie: PropTypes.object.isRequired,
}

function Movie({ movie, isTv }) {
    return (
        <Card
            sx={{ backgroundColor: "#000", color: "#fff", display: "block", px: 2 }}
            component={Link}
            to={`/${isTv ? 'tv' : 'movie'}/${movie.id}`}>
            <CardMedia
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                sx={{ objectFit: 'cover', height: '200px' }}
            />
            <CardContent  >
                <Typography
                    variant='body2'
                    sx={{ fontSize: '13px', textAlign: 'center' }}
                >
                    {movie.title ? movie.title.toUpperCase() : movie.name.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Movie