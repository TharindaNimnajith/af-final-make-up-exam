import React, {Component, Fragment} from 'react'
import axios from 'axios'
import get from 'lodash.get'
import {dateToString} from '../../helpers/common.helpers'
import BasicTemplate from '../../templates/basic-template/basic-template'
import ButtonComponent from '../../components/button/button'
import './book.css'

const Book = (props) => {
  return (
    <BasicTemplate>
      <BookBody {...props} />
    </BasicTemplate>
  )
}

class BookBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    this.getBookDetails()
  }

  getBookDetails = () => {
    let {
      displayLoader,
      hideLoader,
      match
    } = this.props

    displayLoader()

    axios.get(`${bookAPI}/${match.params.id}`).then((result) => {
      this.setState({
        book: result.data.data
      }, () => hideLoader())
    }).catch((error) => {
      hideLoader()
    })
  }

  downloadFn = (id) => {
    window.open(`${fileGetAPI}/${id}`)
    setTimeout(() => this.props.displayMessage('Downloaded Successfully'), 1000)
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'row'}>
          {
            (Object.keys(this.state.book).length > 0) ? (
              <Fragment>
                <div className={'col-md-3 mt-5'}>
                  <img src={`${fileGetAPI}/${get(this.state, 'book.image', '')}`}
                       alt='...'
                       className='img-thumbnail image'
                       style={{width: '100%'}}/>
                  <ButtonComponent elementStyle={'download-btn'}
                                   btnText={'DOWNLOAD'}
                                   isFullWidth={true}
                                   onClickFn={() => this.downloadFn(get(this.state, 'book.file', ''))}/>
                </div>
                <div className={'col-md-9 mt-5'}>
                  <div style={{marginLeft: '50px'}}>
                    <h1 style={{fontWeight: '700'}}>
                      {
                        get(this.state, 'book.name', '')
                      }
                    </h1>
                    <dl className={'row mt-4'}>
                      <dt className={'col-sm-3'}>
                        Author
                      </dt>
                      <dd className={'col-sm-9'}>
                        {
                          get(this.state, 'book.author', '')
                        }
                      </dd>
                      <dt className={'col-sm-3'}>
                        Category
                      </dt>
                      <dd className={'col-sm-9'}>
                        {
                          get(this.state, 'book.category.name', '')
                        }
                      </dd>
                      <dt className={'col-sm-3'}>
                        Published Date
                      </dt>
                      <dd className={'col-sm-9'}>
                        {
                          dateToString(get(this.state, 'book.published_date', ''))
                        }
                      </dd>
                      <dt className={'col-sm-3'}>
                        Description
                      </dt>
                      <dd className={'col-sm-9'}>
                        {
                          get(this.state, 'book.description', '')
                        }
                      </dd>
                    </dl>
                  </div>
                </div>
              </Fragment>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default Book
