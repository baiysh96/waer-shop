import React, { useEffect } from 'react'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ButtonTemplate } from '../../mixines'
import { signupUser } from '../../redux/slices/userSlice'
import Input from '../../components/Input'
import Layout from '../../components/Layout/Layout'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`
const Wrapper = styled.div`
  width: 500px;
  background: linear-gradient(
    to right,
    rgba(107, 61, 16, 0.94),
    rgba(255, 0, 0, 1)
  );
  padding: 30px 20px;
`
const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`
const Form = styled.form``

const Button = styled.button`
  ${ButtonTemplate};
  width: 100%;
  padding: 20px;
`

function Register() {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { isSuccess, isError, errorMessage } = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Password is required')
        .required('Required'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      values.passwordConfirmation = delete dispatch(signupUser(values))
      values = null
    },
  })
  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
    if (isError) {
      toast.error(errorMessage)
    }
  }, [isSuccess, isError, navigate, errorMessage])

  return (
    <Layout>
      <Container>
        <Wrapper>
          <Title>Create an account</Title>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              formik={formik}
              id="email"
              type="email"
              placeholder="Your E-mail"
            />
            <Input
              formik={formik}
              id="password"
              type="password"
              placeholder="Password"
            />
            <Input
              formik={formik}
              id="passwordConfirmation"
              type="password"
              placeholder="Confirm Password"
            />
            <Button type="submit">Register</Button>
          </Form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Register
