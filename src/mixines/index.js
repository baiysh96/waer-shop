import { css } from 'styled-components'

export const ButtonTemplate = () => css`
  cursor: pointer;
  margin-right: 30px;
  padding: 10px 20px;
  background-color: #0f8c61;
  color: #fff;
  border-radius: 4px;
  border: none;
  transition: 0.5s;

  :hover {
    background-color: #66a691;
    color: white;
  }
`
