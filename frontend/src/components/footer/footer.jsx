import React, {Fragment} from 'react'

const Footer = () => {
  return (
    <Fragment>
      <div className={'footer'}>
        <div className={'text-center my-3'}>
          <h6>All Rights Reserved Copyright © {new Date().getFullYear()}</h6>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
