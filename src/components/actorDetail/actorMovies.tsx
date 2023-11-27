import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Movie } from "../../model/movie";
import dayjs from "dayjs";
import MovieRating from "../movieDetail/movieRating";
import { useNavigate } from "react-router-dom";

interface ActorMovieProps {
  movies: Movie[];
}

const ActorMovies: React.FC<ActorMovieProps> = ({ movies }) => {
  const navigate = useNavigate();
  const handleMovieClick = (movieId: number) => {
    // Navigate to the movie details page
    navigate(`/movie/${movieId}`);
  };
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Card>
            <div
              className="cardContent"
              onClick={() => handleMovieClick(movie.id)}
            >
              <div className="moviePosterContainer">
                <img
                  className="moviePoster"
                  height="140"
                  src={movie.posterPath}
                  alt={movie.title}
                />{" "}
              </div>
              <CardContent>
                <div className="cardContent">
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title +
                      ", " +
                      dayjs(movie.releaseDate).format("YYYY")}
                  </Typography>

                  <div className="rating">
                    <Typography variant="body2">
                      Rating: {movie.voteAverage} ({movie.voteCount} votes)
                    </Typography>
                    <MovieRating rating={movie.voteAverage} />
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorMovies;
