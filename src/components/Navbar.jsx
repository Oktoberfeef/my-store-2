// import { BrowserRouter as Router, 
//     Switch, 
//     Route, 
//     Link } from 'react-router-dom';
import React from "react"
import styled from "styled-components"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Home, ShoppingCartOutlined } from '@mui/icons-material';
import Block from '../pictures/block.jpg'

const Container = styled.div`
    height: 60px;
    background-color: #ffffff;
`
const Wrapper = styled.div`
    padding: 10px 150px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    text-align: left;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    flex:1;
    text-align: center;
    align-items: left;
`

const Right = styled.div`
    flex:3;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    display: flex;
    padding: 5px;
    width: 200px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: none;
    color: black;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`

const a = styled.div`
    text-decoration: none;
    color: black;
`

const Bblock = styled.div`
    width: 1110px; 
    margin: auto;
`

const Navbar = () => {
  return (
    // <Router>
        <Container>
            <Wrapper>
                <Left>
                    <Logo><a href="http://localhost:5174/">QPICK</a></Logo>
                </Left>
                <Center>
                    <SmartphoneIcon style={{padding: 5}}/>
                    <SearchContainer><SearchIcon style={{color: "gray", fontSize:16}}/><Input placeholder = "Введите модель телефона"></Input></SearchContainer>
                </Center>
                <Right>
                    <MenuItem>Регистрация</MenuItem>
                    <MenuItem>Войти</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    {/* <Link to="/registration"><MenuItem>Регистрация</MenuItem></Link>
                    <Link to="/login"><MenuItem>Войти</MenuItem></Link>
                    <Link to="/cart"><MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem></Link> */}
                </Right>
            </Wrapper>
            <Bblock>
                <img src={Block} alt=''/>
            </Bblock>
        </Container>
        // {/* <Switch>
        //     <Route path='/login'><Login /></Route>
        //     <Route path='/registration'><Registration /></Route>
        //     <Route path='/cart'><Cart /></Route>
        // </Switch> */}
        // <Switch>
        // <Route path='/login' element={<Login/>}/>
        // <Route path='/registration' element={<Registration/>}/>
        // <Route path='/cart' element={<Cart/>}/>
        // </Switch>
    // </Router>
  )
}

export default Navbar