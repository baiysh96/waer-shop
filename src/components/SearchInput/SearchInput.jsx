import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin-left: 20px;
  position: relative;
`
const Input = styled.input`
  border: antiquewhite;
  padding: 10px 10px 10px 30px;
  box-shadow: 0 1px 3px 0 #bbbbbb;
  border-radius: 4px;
  cursor: pointer;
`
const SearchIcon = styled.span`
  position: absolute;
  left: 5px;
  top: 8px;
  font-size: 20px;
  color: rgba(153, 153, 153, 0.87);
  cursor: pointer;
`
const DeleteIcon = styled.span`
  position: absolute;
  right: 5px;
  top: 8px;
  font-size: 20px;
  color: rgba(153, 153, 153, 0.87);
  cursor: pointer;
`
function SearchInput() {
  return (
    <SearchContainer>
      <Input placeholder="Search....." />
      <SearchIcon>
        <i className="bx bx-search" />
      </SearchIcon>
      <DeleteIcon>
        <i className="bx bx-x" />
      </DeleteIcon>
    </SearchContainer>
  )
}

export default SearchInput
