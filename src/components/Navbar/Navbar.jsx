import { AppBar, Box, Button, Toolbar, } from "@mui/material"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <AppBar position='static' sx={{ backgroundColor: "#000000" }}>
            <Toolbar>
                {/* <Typography variant='h5' component='div' sx={{ flexGrow: 1, color: "red" }}>
                    NextflixClone
                </Typography> */}
                <Box sx={{ flexGrow: 1 }}>
                    <img style={{}}
                        src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="neflix_logo" height="80px" />
                </Box>


                <Button color='inherit' component={Link} to='/'>Home</Button>
                <Button color='inherit' component={Link} to='/movies'>Movies</Button>
                <Button color='inherit' component={Link} to='/tvShows'>TVShows</Button>
                <Button color='inherit' component={Link} to='/trending'>Trending</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar