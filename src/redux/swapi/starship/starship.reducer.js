import { handleActions } from 'redux-actions'

import update from 'immutability-helper'

import types from './starship.constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  resource: {},
  data: {},
}

export default handleActions(
  {
    [types.FETCH_STARSHIPS.REQUEST]: (state) => {
      return update(state, {
        isLoading: {
          $set: true,
        },
      })
    },
    [types.FETCH_STARSHIPS.SUCCESS]: (state, { payload: { data } }) => {
      return update(state, {
        isLoaded: {
          $set: true,
        },
        isLoading: {
          $set: false,
        },
        resource: {
          $set: data,
        },
      })
    },
    [types.FETCH_STARSHIPS.FAILED]: (state) => {
      return update(state, {
        isLoading: {
          $set: false,
        },
      })
    },
    [types.GET_STARSHIP.REQUEST]: (state) => {
      return update(state, {
        isLoading: {
          $set: true,
        },
      })
    },
    [types.GET_STARSHIP.SUCCESS]: (state, { payload: { data } }) => {
      return update(state, {
        isLoaded: {
          $set: true,
        },
        isLoading: {
          $set: false,
        },
        data: {
          $set: data,
        },
      })
    },
    [types.GET_STARSHIP.FAILED]: (state) => {
      return update(state, {
        isLoading: {
          $set: false,
        },
      })
    },
  },

  initialState,
)
