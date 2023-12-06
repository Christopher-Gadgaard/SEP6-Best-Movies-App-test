//rootReducer.ts

import commentsReducer from "../slices/commentSlice";
import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../slices/movieSlice';
import moviesReducer from '../slices/moviesSlice';
import movieCreditsReducer from '../slices/movieCreditsSlice'
import personReducer from '../slices/personSlice'
import personCreditsReducer from '../slices/personCreditsSlice'
import userReducer from '../slices/userSlice'

const rootReducer = combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
  movieCredits: movieCreditsReducer,
  comments: commentsReducer,
  person: personReducer,
  personCredits: personCreditsReducer,
  users: userReducer,

});

export default rootReducer;
