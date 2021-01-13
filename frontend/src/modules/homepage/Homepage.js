import React, {Component} from "react";
import axios from "axios";

import "./homepage.css";
import UITemplate from "../../components/template/UITemplate";
import {bookAPI, fileGetAPI} from "../../configs/config";
import ButtonComponent from "../../components/button/Button";


const Homepage = (props) => {
  return (
    <UITemplate>
      <HomepageBody {...props} />
    </UITemplate>
  )
}

class HomepageBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails = () => {
    this.props.displayLoader();

    axios.get(bookAPI)
      .then((result) => {

        this.setState({
          books: result.data.data
        }, () => this.props.hideLoader())
      })
      .catch((error) => {
        this.props.hideLoader();
      })
  }

  render() {
    let {history} = this.props;

    return (
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-12 text-center"}>
            <h1 className={"mt-5"} style={{color: "#333547"}}>Download Latest Books From Online Book Store</h1>
            <div className={"d-flex justify-content-center mt-4"}>
              <p style={{maxWidth: "600px", color: "#333547"}}>Welcome to the official eStore website. Here you can
                browse and download latest books in excellent
                quality, all at the smallest file size.</p>
            </div>

            <div className={"d-inline-flex mt-1"}>
              <i className={"fas fa-star mr-2"} style={{color: "#6ac045", fontSize: "20px", marginTop: "3px"}}></i>
              <h5>Popular Downloads</h5>
            </div>

            <hr style={{background: "#333547"}}/>
          </div>
        </div>

        <div className={"row"} style={{marginBottom: "60px"}}>
          {
            this.state.books.map((value, index) => {
              return (
                <div className={"col-md-3 mt-3"} key={index}>
                  <div className={"product text-center"}>
                    <img src={`${fileGetAPI}/${value.image}`} alt="..." className="img-thumbnail image"/>

                    <div className="middle">
                      <ButtonComponent
                        elementStyle={"view-button"}
                        btnText={"View Book"}
                        onClickFn={() => history.push(`/book/${value._id}`)}
                      />
                    </div>

                    <h6 className={"mt-1"}>{value.name}</h6>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Homepage;
