import React, {Fragment, useState} from 'react'
import Swal from 'sweetalert2'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Loader from '../../components/loader/loader'
import './basic-template.css'

const BasicTemplate = (props) => {
  const [loader, setLoader] = useState(false)

  const displayLoader = () => {
    setLoader(true)
  }

  const hideLoader = () => {
    setLoader(false)
  }

  const displayMessage = (message) => {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
    })
  }

  return (
    <Fragment>
      {
        loader ? (
          <Loader/>
        ) : null
      }
      <Header/>
      {
        React.Children.map(props.children, (child) => {
          if (child) {
            return React.cloneElement(child, {
              displayLoader: displayLoader,
              hideLoader: hideLoader,
              displayMessage: (message) => displayMessage(message)
            })
          }
        })
      }
      <Footer/>
    </Fragment>
  )
}

export default BasicTemplate
