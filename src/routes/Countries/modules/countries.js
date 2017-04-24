import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const COUNTRIES_FETCH = 'COUNTRIES_FETCH';

// ------------------------------------
// Actions
// ------------------------------------
// export function increment (value = 1) {
//   return {
//     type    : COUNTER_INCREMENT,
//     payload : value
//   }
// }

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const fetchCountries = () => {
  console.log("INSIDE");
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // TODO: Dispatch loading action
      // TODO: Dispatch failure action
      return axios
        .get('/api/Country/all')
        .then(res => {
          dispatch({
            type    : COUNTRIES_FETCH,
            payload : res.data.results
          })
          resolve()
        })
        .catch(err => reject(err));
    })
  }
}

export const actions = {
  fetchCountries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTRIES_FETCH]: (state, action) => {
    console.log("BINGO", action);
    return action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function countryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
