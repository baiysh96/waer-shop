import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  background-color: #10d26e;
  background-image: linear-gradient(45deg, #10d26e 0%, #464632 100%);
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
  color: white;
  font-weight: 500;
`

function Announcement() {
  return <Container>Получите скидку 20% при заказе от 100$</Container>
}

export default Announcement
