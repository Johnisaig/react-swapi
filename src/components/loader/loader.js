import { useState } from 'react'
import { css } from '@emotion/react'
import BounceLoader from 'react-spinners/BounceLoader'
import AccentureLogoLight from 'assets/img/accenture-logo-light.webp'

import './loader.scss'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function Loader() {
  const [color] = useState('#a200ff')
  return (
    <div className="loader-container">
      <div>
        <img
          src={AccentureLogoLight}
          className="accenture"
          alt="accenture-brand"
        />
        <BounceLoader color={color} loading={true} css={override} size={150} />
      </div>
    </div>
  )
}
