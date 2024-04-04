
import requests from "../../api/requests";
import HeroSection from "../../components/HeroSection/HeroSection";
import ListMovies from "../../components/ListMovies/ListMovies";

function HomePage() {
    return (
        <div>
            <HeroSection url={requests.fetchHeroMovies} />
            <ListMovies title="Trending" url={requests.fetchNewAndPopular} />
            <ListMovies title="Movies" url={requests.fetchListMovies} />
            <ListMovies title="TV Shows" url={requests.fetchListTVShows} isTv />

        </div>


    );
}

export default HomePage