import {
  GET_LOGS,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from './types';

// export default getLogs = () {

//     return async dispatch =>{
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }

// }

//Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/api/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOGS,
      payload: 'error.response.statusText',
    });
  }
};

//Add new Log
export const addLogs = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/api/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOGS,
      payload: 'error.response.statusText',
    });
  }
};

//Delete log
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_LOGS,
      payload: 'error.response.statusText',
    });
  }
};

//Set Current

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear Current

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Update log on Server

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/api/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOGS,
      payload: 'error.response.statusText',
    });
  }
};

//Search logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/api/logs/${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOGS,
      payload: 'error.response.statusText',
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
