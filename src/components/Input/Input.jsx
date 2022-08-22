import React from 'react'
import styled from 'styled-components'

const FormItem = styled.div`
  margin-bottom: 20px;
`
const InputElem = styled.input`
  width: 100%;
  padding: 20px;
`
const Message = styled.div`
  color: red;
  margin-left: 10px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
`
function Input({ formik, id, type, placeholder }) {
  return (
    <FormItem>
      <InputElem
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <Message>{formik.errors[id]}</Message>
      ) : null}
    </FormItem>
  )
}

export default Input
