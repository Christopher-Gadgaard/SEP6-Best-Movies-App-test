//movieThunks.ts
import { Dispatch } from "redux";
import {
  fetchMovieFailure,
  fetchMovieStart,
  fetchMovieSuccess,
  clearMovie,
} from "../slices/movieSlice";

import {
  fetchNowPlayingMoviesFailure,
  fetchNowPlayingMoviesStart,
  fetchNowPlayingMoviesSuccess,
} from "../slices/moviesSlice";
import {
  fetchCreditsFailure,
  fetchCreditsStart,
  fetchCreditsSuccess,
} from "../slices/movieCreditsSlice";

const serverUrl = "https://localhost:32772/api";

export const fetchMovie = (movieId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMovieStart());

    try {
      const response = await fetch(`${serverUrl}/movies/${movieId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie.");
      }

      const data = await response.json();
      console.log(data);
      dispatch(fetchMovieSuccess(data));
    } catch (error) {
      dispatch(fetchMovieFailure("Network error. Please try again"));
    }
  };
};

export const fetchNowPlayingMovies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchNowPlayingMoviesStart());

    try {
      const response = await fetch(`${serverUrl}/movies/nowplaying`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie.");
      }

      const data = await response.json();
      console.log(data);
      dispatch(fetchNowPlayingMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchNowPlayingMoviesFailure("Network error. Please try again"));
    }
  };
};

export const fetchMovieCredits = (movieId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCreditsStart());

    try {
      const response = await fetch(`${serverUrl}/movies/credits/${movieId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie.");
      }
      const data = await response.json();
      console.log(data);
      dispatch(
        fetchCreditsSuccess({ cast: data.castMembers, crew: data.crewMembers })
      );
    } catch (error) {
      dispatch(fetchCreditsFailure("Network error. Please try again"));
    }
  };
};
