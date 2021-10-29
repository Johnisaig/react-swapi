import starshipApi from 'api/starships.api'

import types from './starship.constants'
import getResponseError from 'helpers/get-response-error'

export const fetchStarShips = (params) => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCH_STARSHIPS.REQUEST,
    })

    const response = await starshipApi.fetchStarShip(params)

    dispatch({
      type: types.FETCH_STARSHIPS.SUCCESS,
      payload: { data: response.data },
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: types.FETCH_STARSHIPS.FAILED,
      notification: {
        type: 'error',
        text: getResponseError(err),
      },
    })
  }
}

export const getStarShip = (url) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_STARSHIP.REQUEST,
    })

    const response = await starshipApi.getStarShip(url)

    console.log('response', response)
    dispatch({
      type: types.GET_STARSHIP.SUCCESS,
      payload: { data: response.data },
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: types.GET_STARSHIP.FAILED,
      notification: {
        type: 'error',
        text: getResponseError(err),
      },
    })
  }
}
