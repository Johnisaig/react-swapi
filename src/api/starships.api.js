import axios from 'axios'

import getConfig from 'config'

const config = getConfig()

const fetchStarShip = (params) => {
  return axios.get(config.SWAPI_API + '/api/starships', { params })
}

const getStarShip = (url) => {
  return axios.get(url)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchStarShip,
  getStarShip,
}
