import React from 'react'
import styled from 'styled-components'
import Announcement from '../../components/Announcement'
import Catalog from '../../components/Catalog'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import NewsLetter from '../../components/NewsLetter'
import Footer from '../../components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
function Homepage() {
  return (
    <Container>
      <Announcement />
      <Header />
      <Slider />
      <Catalog />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Homepage
