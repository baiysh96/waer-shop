import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`
const Description = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 24px;
`
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`
const Input = styled.input`
  flex: 5;
  border: none;
  padding: 20px;
`
const Button = styled.button`
  flex: 2;
  font-size: 18px;
  border: none;
  color: #fff;
  background-color: #13e09a;
  cursor: pointer;
  transition: 0.4s;

  //:hover {
  //  color: #0d1010;
  //  background-color: #000000;
  //
  //}
`
function NewsLetter() {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Скидка 10% за подписку на наши новости</Description>
      <InputContainer>
        <Input placeholder="Your E-mail" />
        <Button>Send</Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
