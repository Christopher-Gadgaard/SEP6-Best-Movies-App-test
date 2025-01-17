import React from "react";
import { Container, Grid } from "@mui/material";
import MovieDetail from "../../components/movieDetail/movieDetail";
import CommentSection from "../../components/commentSection/commentSection";

const MovieDetailPage: React.FC = () => {
  // Fetch the movie details using the id or retrieve it from your state management
  // ...

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/*    <Carousel /> */}
        </Grid>
        <Grid item xs={12}>
          <MovieDetail />
        </Grid>
        <Grid item xs={12} className="commentSectionContainer">
          <CommentSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetailPage;
