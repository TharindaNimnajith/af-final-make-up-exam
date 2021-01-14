import React, {Component, Fragment} from 'react'
import Swal from 'sweetalert2'
import Loader from '../../components/loader/loader'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './basic-template.css'

class BasicTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loader: false
    }
  }

  displayLoader = () => {
    this.setState({
      loader: true
    })
  }

  hideLoader = () => {
    this.setState({
      loader: false
    })
  }

  displayMessage = (message) => {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    })
  }

  render() {
    return (
      <Fragment>
        {
          (this.state.loader === true) ? (
            <Loader/>
          ) : null
        }
        <Header/>
        {
          React.Children.map(this.props.children, (child) => {
            if (child) {
              return React.cloneElement(child, {
                displayLoader: this.displayLoader,
                hideLoader: this.hideLoader,
                displayMessage: (message) => this.displayMessage(message)
              })
            }
          })
        }
        <Footer/>
      </Fragment>
    )
  }
}

export default BasicTemplate
