import { useSelector } from 'react-redux'

import get from 'lodash/get'

// eslint-disable-next-line import/no-anonymous-default-export
export default (select, defaults) => {
  return useSelector((state) => get(state, `swapi.${select}`, defaults))
}
