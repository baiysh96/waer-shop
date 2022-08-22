import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-hot-toast'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { ButtonTemplate } from '../../mixines'
import { calculateTotal } from '../../redux/slices/cartSlice'
import Layout from '../../components/Layout'
import empty from '../../assets/images/empty-cart.png'

const Container = styled.div`
  margin-bottom: 30px;
`
const Wrapper = styled.div`
  padding: 40px 30px;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const Bottom = styled.div`
  display: flex;
`
const Title = styled.h2``
const TopButton = styled.button`
  ${ButtonTemplate}
`
const Info = styled.div`
  flex: 3;
`
const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  padding: 20px;
  height: 300px;
  margin-left: 30px;
  position: sticky;
  top: 0;
  right: 0;
`
const SummaryTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const SummaryItemTitle = styled.div`
  font-weight: bold;
`
const SummaryItemPrice = styled.div`
  color: rgba(23, 17, 17, 0.68);
`
// const Button = styled.button`
//   ${ButtonTemplate};
//   width: 100%;
//   display: block;
//   margin-top: 30px;
//   margin-bottom: 20px;
// `
const EmptyContainer = styled.div`
  display: flex;
`

function Cart() {
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => toast(`We are in business, ${data.email}`))
    })
  }
  const dispatch = useDispatch()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { cart, totalPrice, totalAmount } = useSelector((s) => s.cart)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  useEffect(() => {
    dispatch(calculateTotal())
  }, [dispatch, totalAmount])
  return (
    <Layout>
      <Container>
        <Wrapper>
          {totalPrice ? (
            <Top>
              <TopButton onClick={handleClick}>Проодолжить покупку</TopButton>
              <Title>В вашей корзине: {+totalAmount} шт</Title>
            </Top>
          ) : (
            <EmptyContainer>
              <img src={empty} alt="" />
              <Title>Ваша корзина пуста</Title>
            </EmptyContainer>
          )}
          <Bottom>
            <Info>
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </Info>
            {totalPrice ? (
              <Summary>
                <SummaryTitle>Order Summary: {cart.price} </SummaryTitle>
                <SummaryItem>
                  <SummaryItemTitle>SubTotal:</SummaryItemTitle>
                  <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemTitle>Shipping:</SummaryItemTitle>
                  <SummaryItemPrice>$25</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemTitle>Discount:</SummaryItemTitle>
                  <SummaryItemPrice>$20</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemTitle>Total: </SummaryItemTitle>
                  <SummaryItemPrice>
                    $ {totalPrice + totalAmount + 20}
                  </SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                  token={onToken}
                  stripeKey="my_PUBLISHABLE_stripekey"
                />
              </Summary>
            ) : null}
          </Bottom>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Cart
