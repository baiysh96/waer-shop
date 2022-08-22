import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CatalogItem from '../CatalogItem'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`

function Catalog() {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { products } = useSelector((s) => s.product)
  return (
    <Container>
      {products.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </Container>
  )
}

export default Catalog
