import React, {Fragment} from 'react'
import {FormGroup, Input, Label} from 'reactstrap'
import './text-field.css'

const empty = () => undefined

const TextField = (
  {
    elementWrapperStyle = '',
    labelText = '',
    type = 'text',
    name = '',
    isRequired = false,
    value = '',
    placeholder = '',
    errorText = '',
    helperText = '',
    onChangeFn = empty
  }
) => {
  return (
    <div>
      <Fragment>
        <FormGroup className={`${elementWrapperStyle} ${errorText ? 'text-danger' : ''}`}>
          <div>
            <Label className='mb-1 mt-2'>
              {labelText}
              {
                isRequired ? (
                  <span className='error'>
                    &nbsp;*
                  </span>
                ) : null
              }
            </Label>
          </div>
          <div>
            <Input type={type}
                   className={errorText ? 'is-invalid' : ''}
                   name={name}
                   placeholder={placeholder}
                   value={value}
                   onChange={(event) => {
                     onChangeFn({
                       value: event.target.value,
                       name: name,
                       eventInfo: event
                     })
                   }}/>
            <small>
              {
                errorText ? (
                  <span className='error'>
                    {errorText}
                  </span>
                ) : (
                  <span className='helper'>
                    {helperText}
                  </span>
                )
              }
            </small>
          </div>
        </FormGroup>
      </Fragment>
    </div>
  )
}

export default TextField
