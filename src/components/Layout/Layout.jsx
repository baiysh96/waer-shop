import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import Announcement from '../Announcement'

const Container = styled.div`
  margin-bottom: 30px;
`
function Layout({ children }) {
  return (
    <>
      <Announcement />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
