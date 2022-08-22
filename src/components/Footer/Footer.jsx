import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`
const Container = styled.div`
  display: flex;
  background-color: rgba(252, 245, 245, 0.65);
`
const Left = styled.div`
  flex: 1;
  padding: 20px 30px;
`
const Center = styled.div`
  flex: 1;
  padding: 30px;
`
const Right = styled.div`
  flex: 1;
  padding: 30px;
`
const Logo = styled.h1`
  margin-bottom: 10px;
`
const Image = styled.img`
  width: 150px;
  height: 60px;
`

const Description = styled.div`
  margin-bottom: 20px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(110, 77, 77, 0.6);
  display: flex;
  font-size: 30px;
  color: white;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: cadetblue;
    color: wheat;
  }
`
const Title = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
const ListItem = styled.li`
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  transition: 0.5s;

  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
  transition: 0.5s;

  :hover {
    color: rgba(23, 20, 20, 0.5);
  }
`
function Footer() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Logo>
            <Link to="/">
              <Image src={logo} />
            </Link>
          </Logo>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
            aperiam dolorem doloribus, eum eveniet exercitationem hic laborum
            magni neque non nulla numquam officiis quam, quas quidem repellat
            reprehenderit sint suscipit totam. A delectus deserunt eius,
            eligendi minima provident quas.
          </Description>
          <SocialContainer>
            <SocialIcon>
              <i className="bx bxl-facebook" />
            </SocialIcon>
            <SocialIcon>
              <i className="bx bxl-instagram" />
            </SocialIcon>
            <SocialIcon>
              <i className="bx bxl-twitter" />
            </SocialIcon>
            <SocialIcon>
              <i className="bx bxl-telegram" />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Support</Title>
          <List>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Статус заказа по номеру</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Центр поддержки Lamoda</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Как оформить заказ</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Как выбрать размер</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="">Условия доставки</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Мои заказы</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Возврат</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Публичная оферта</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Программа лояльности</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Часто задаваемые вопросы</Link>
            </ListItem>
            <ListItem>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/">Исследования</Link>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/">Площад Киевского Вокзала д.2</Link>{' '}
          </ContactItem>
          <ContactItem>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/">+7(800)-555-55-55</Link>
          </ContactItem>
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Footer
