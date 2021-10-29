import Noty from 'noty'

import 'noty/src/noty.scss'

import './noty.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  Noty.overrideDefaults({
    theme: 'sunset',
    closeWith: ['click', 'button'],
    timeout: 2000,
  })
}
