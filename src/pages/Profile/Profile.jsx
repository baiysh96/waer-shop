import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const Wrapper = styled.div`
  text-align: center;
  margin: 50px 0;
  min-height: 50vh;
`
const Title = styled.h2`
  font-family: Aboreto;
`
function Profile() {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { user } = useSelector((selector) => selector.user)
  return (
    <Layout>
      <Wrapper>
        <Title>{user.email}</Title>
      </Wrapper>
    </Layout>
  )
}

export default Profile
