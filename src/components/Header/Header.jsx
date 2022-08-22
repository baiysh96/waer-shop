import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import { logout } from '../../redux/slices/userSlice'
import SearchInput from '../SearchInput'

const Container = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
`

const Left = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  text-transform: none;
`
const Image = styled.img`
  width: 150px;
  height: 60px;
`
const Menu = styled.div`
  display: flex;
`
const MenuItem = styled.button`
  font-size: 18px;
  border: none;
  margin-left: 15px;
  font-family: Aboreto;
  padding: 0;
  cursor: pointer;
  background: none;
  font-weight: bold;
  transition: 0.4s;

  :hover {
    color: darkolivegreen;
  }
`
const SuccessContent = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h4``
const CartIcon = styled.div`
  position: relative;
  font-size: 26px;
`

const UserIcon = styled.div`
  font-size: 28px;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.4s;
  color: gray;
  :hover {
    color: dimgrey;
  }
`
const Badge = styled.div`
  position: absolute;
  top: -10px;
  color: navajowhite;
  right: -10px;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background-color: indianred;
`

function Header() {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { totalAmount } = useSelector((s) => s.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const { isSuccess, user } = useSelector((s) => s.user)
  return (
    <Container>
      <Left>
        <Logo>
          <Link to="/">
            <Image src={logo} alt="img" />
          </Link>
        </Logo>
        <SearchInput />
      </Left>
      <Menu>
        {isSuccess ? (
          <SuccessContent>
            <Title>
              Добро пожаловать,{user.email}
              <span style={{ fontSize: '14px', color: 'deeppink' }}>
                {user.id}
              </span>
            </Title>
            <UserIcon onClick={() => navigate('/profile')}>
              <i className="bx bx-user"></i>
            </UserIcon>
            <UserIcon onClick={() => navigate('/favorites')}>
              <i className="bx bx-heart"></i>
            </UserIcon>
            <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
          </SuccessContent>
        ) : (
          <>
            <MenuItem onClick={() => navigate('/register')}>Register</MenuItem>
            <MenuItem onClick={() => navigate('/login')}>Sign In</MenuItem>
          </>
        )}
        <MenuItem>
          <CartIcon onClick={() => navigate('/cart')}>
            <Badge>{+totalAmount}</Badge>
            <i className="bx bx-cart"></i>
          </CartIcon>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Header
