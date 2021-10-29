import createActionType from 'helpers/create-action-type'

export const FETCH_STARSHIPS = createActionType('FETCH_STARSHIPS', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

export const GET_STARSHIP = createActionType('GET_STARSHIP', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  FETCH_STARSHIPS,
  GET_STARSHIP,
}
