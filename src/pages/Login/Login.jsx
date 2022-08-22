import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ButtonTemplate } from '../../mixines'
import { signInUser } from '../../redux/slices/userSlice'
import Layout from '../../components/Layout'
import Input from '../../components/Input'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`
const Wrapper = styled.div`
  width: 500px;
  background-color: rgba(0, 0, 0, 0.94);
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

function Login() {
  const navigate = useNavigate()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { isSuccess, isError, errorMessage } = useSelector((s) => s.user)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Password is required')
        .required('Required'),
    }),
    onSubmit: (values) => {
      values.passwordConfirmation = delete dispatch(signInUser(values))
    },
  })
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage)
    }
    if (isSuccess) {
      navigate('/')
    }
  }, [isError, isSuccess, errorMessage, navigate])

  return (
    <Layout>
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
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
            <Button type="submit">Sign In</Button>
          </Form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Login
