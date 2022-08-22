import React, { useState } from 'react'
import styled from 'styled-components'
import { slides } from '../../data'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: 0.4s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  width: 50vw;
  height: 80%;
  object-fit: contain;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 60px;
`
const Description = styled.p`
  font-size: 24px;
  margin: 40px 0;
`
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #00a16b;
  border: none;
  border-radius: 8px;
  color: white;
`

const Arrow = styled.div`
  font-size: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 1;
  left: ${(props) => (props.props === 'left' ? '30px' : 'unset')};
  right: ${(props) => (props.props === 'right' ? '30px' : 'unset')};
  transition: 0.4s;
  cursor: pointer;
  :hover {
    color: aquamarine;
  }
`

function Slider() {
  const [slideIndex, setSLideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSLideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1)
    }
    if (direction === 'right') {
      setSLideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow onClick={() => handleClick('left')} props="left">
        <i className="bx bx-chevron-left" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slides.map((slide) => (
          <Slide bg={slide.bgColor} key={slide.id}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.desc}</Description>
              <Button>Buy now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow onClick={() => handleClick('right')} props="right">
        <i className="bx bx-chevron-right" />
      </Arrow>
    </Container>
  )
}

export default Slider
