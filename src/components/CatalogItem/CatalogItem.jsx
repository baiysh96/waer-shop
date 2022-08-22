import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToFavorite } from '../../redux/slices/favoritesSlice'

const Container = styled.div`
  padding: 0 15px;
  width: 25%;
  height: 350px;
  margin-bottom: 30px;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
`
const Box = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  height: 100%;
  padding: 15px;
  position: relative;

  :hover ${Info} {
    opacity: 1;
    visibility: visible;
  }
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  margin: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  &:hover {
    background-color: rgba(14, 168, 116, 0.6);
    transform: scale(1 0.5);
  }
`

// eslint-disable-next-line react/prop-types
function CatalogItem({ product = {} }) {
  useNavigate()
  const dispatch = useDispatch()
  return (
    <Container>
      <Box>
        <Image src={product.img} />
        <Info>
          <Icon onClick={() => dispatch(addToCart(product))}>
            <i className="bx bxs-cart-add"></i>
          </Icon>
          <Icon>
            <i className="bx bx-search" />
          </Icon>
          <Icon onClick={() => dispatch(addToFavorite(product))}>
            <i className="bx bx-heart" />
          </Icon>
        </Info>
      </Box>
    </Container>
  )
}

export default CatalogItem
