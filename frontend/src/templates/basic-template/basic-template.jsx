import React, {Fragment} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './basic-template.css'

const BasicTemplate = (props) => {
  return (
    <Fragment>
      <Header/>
      <div>
        {
          React.Children.map(props.children, (child) => {
            if (child)
              return React.cloneElement(props.children)
          })
        }
      </div>
      <Footer/>
    </Fragment>
  )
}

export default BasicTemplate
