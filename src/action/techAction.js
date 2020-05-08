import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from '../action/types';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/api/techs');
    const data = await res.json();
    console.log(data);

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

//Add Tech to Server

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/api/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log('Data.....', data);

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

//Delete Tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusTex,
    });
  }
};

//Set Laoding to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
