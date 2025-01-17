//personThunks.ts
import { Dispatch } from "redux";
import {
  fetchPersonStart,
  fetchPersonSuccess,
  fetchPersonFailure,
} from "../slices/personSlice";

import {
  fetchPersonCreditsStart,
  fetchPersonCreditsSuccess,
  fetchPersonCreditsFailure,
} from "../slices/personCreditsSlice";
import {
  fetchPersonSearchFailure,
  fetchPersonSearchStart,
  fetchPersonSearchSuccess,
} from "../slices/personSearchSlice";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const fetchPerson = (personId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPersonStart());

    try {
      const response = await fetch(`${serverUrl}/person/${personId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch person");
      }

      const data = await response.json();
      console.log(data);
      dispatch(fetchPersonSuccess(data));
    } catch (error) {
      dispatch(fetchPersonFailure("Network error. Please try again"));
    }
  };
};

export const fetchPersonCredits = (personId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPersonCreditsStart());

    try {
      const response = await fetch(
        `${serverUrl}/person/credits/movie/${personId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch person");
      }

      const data = await response.json();
      console.log(data);
      dispatch(
        fetchPersonCreditsSuccess({
          cast: data.castRoles,
          crew: data.crewRoles,
        })
      );
    } catch (error) {
      dispatch(fetchPersonCreditsFailure("Network error. Please try again"));
    }
  };
};

export const fetchPersonSearchResults = (searchText: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPersonSearchStart());

    try {
      const response = await fetch(`${serverUrl}/person/search/${searchText}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      console.log(data);
      dispatch(fetchPersonSearchSuccess(data));
    } catch (error) {
      dispatch(fetchPersonSearchFailure("Network error. Please try again"));
    }
  };
};
