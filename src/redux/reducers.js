import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import swapiReducer from './swapi'

const rootConfig = {
  key: 'root',
  storage,
  blacklist: [],
}

const swapiConfig = {
  key: 'swapi',
  storage,
  blacklist: [],
}

export const rootReducer = combineReducers({
  swapi: persistReducer(swapiConfig, combineReducers(swapiReducer)),
})

export default persistReducer(rootConfig, rootReducer)
