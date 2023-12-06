//rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import moviesReducer from '../slices/moviesSlice';
import movieCreditsReducer from '../slices/movieCreditsSlice'
import personReducer from '../slices/personSlice'
import personCreditsReducer from '../slices/personCreditsSlice'
import userReducer from '../slices/userSlice'
import personSearchReducer from '../slices/personSearchSlice'


const rootReducer = combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
  movieCredits: movieCreditsReducer,
  person: personReducer,
  personCredits: personCreditsReducer,
  users: userReducer,
  personSearch: personSearchReducer,
});

export default rootReducer;
