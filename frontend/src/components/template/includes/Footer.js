import React, {Component, Fragment} from "react";


class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={"footer"}>
          <div className={"text-center my-3"}>
            <h6>Online Book Store All Rights Reserved Copyright © {new Date().getFullYear()}</h6>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
