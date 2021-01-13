import React from "react";
import {Button} from 'reactstrap';

import "./button.css";


const emptyFn = (...para) => undefined;

const ButtonComponent = ({
                           elementWrapperStyle = "",
                           elementStyle = "",
                           btnText = "",
                           btnName = "",
                           btnColor = "primary",
                           btnSize = "md",
                           isOutline = false,
                           isFullWidth = false,
                           onClickFn = emptyFn
                         }) => {
  return (
    <div className={elementWrapperStyle}>
      <Button
        className={`${elementStyle} btnBgColor`}
        color={btnColor}
        size={btnSize}
        block={isFullWidth}
        outline={isOutline}
        name={btnName}
        onClick={(event) => onClickFn({name: btnName, eventInfo: event})}
      >
        {btnText}
      </Button>
    </div>
  )
}

export default ButtonComponent;
