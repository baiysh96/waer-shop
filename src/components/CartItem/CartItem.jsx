import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  removeFromCart,
} from '../../redux/slices/cartSlice'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  margin-bottom: 20px;
  padding: 30px;
  height: 300px;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const PriceDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.p`
  font-size: 24px;
  margin: 0 10px;
`
const Counter = styled.div`
  cursor: pointer;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: rgb(102, 166, 145);
`

const ProductPrice = styled.div`
  font-size: 30px;
`
const DeleteBtn = styled.button`
  padding: 4px;
  background-color: indianred;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: orangered;
    color: black;
  }
`

// eslint-disable-next-line react/prop-types
function CartItem({ product = {} }) {
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Container>
      <Image src={product.img} />
      <Details>
        <ProductName>
          {' '}
          <b>Product</b>: {product.title}
        </ProductName>
        <ProductId>
          <b>Id</b>: {product.id}
        </ProductId>
        <DeleteBtn onClick={() => removeItem(product.id)}>Удалить</DeleteBtn>
      </Details>
      <PriceDetails>
        <ProductAmountContainer>
          <Counter onClick={() => dispatch(decrement(product.id))}>
            <i className="bx bx-minus" />
          </Counter>
          <ProductAmount>{product.amount}</ProductAmount>
          <Counter onClick={() => dispatch(increment(product.id))}>
            <i className="bx bx-plus" />
          </Counter>
        </ProductAmountContainer>
        <ProductPrice>
          $ {(product.price * product.amount).toFixed(2)}
        </ProductPrice>
      </PriceDetails>
    </Container>
  )
}

export default CartItem
