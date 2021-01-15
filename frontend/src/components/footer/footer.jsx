import React, {Fragment} from 'react'
import './footer.css'

const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
        <div className='text-center my-3'>
          <h6 className='mt-4'>
            IT18149654 - Application Frameworks Makeup Examination
          </h6>
          <h6 className='mt-4 mb-4'>
            All Rights Reserved Copyright ©&nbsp;{new Date().getFullYear()}
          </h6>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
