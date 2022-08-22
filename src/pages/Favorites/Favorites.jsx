import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import FavoriteItem from '../../components/FavoriteItem'
import { ButtonTemplate } from '../../mixines'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`
const Description = styled.h2`
  margin-left: 30px;
  margin-top: 20px;
`
const Wrapper = styled.div`
  margin: 50px 0;
  min-height: 50vh;
`
const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-left: 30px;
`
const Button = styled.button`
  ${ButtonTemplate};
  margin-left: 40px;
  margin-top: 20px;
`
function Favorites() {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { favorite } = useSelector((s) => s.favorite)
  const navigate = useNavigate()
  return (
    <Layout>
      {favorite.length ? (
        <Description>Your favorite products</Description>
      ) : null}
      <Button type="button" onClick={() => navigate('/')}>
        Back
      </Button>
      <Container>
        {favorite.length ? (
          favorite.map((product) => (
            <FavoriteItem key={product.id} product={product} />
          ))
        ) : (
          <Wrapper>
            <Title>Favorites is empty</Title>
          </Wrapper>
        )}
      </Container>
    </Layout>
  )
}

export default Favorites
