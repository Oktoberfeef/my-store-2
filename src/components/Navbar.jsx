// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Home, ShoppingCartOutlined } from "@mui/icons-material";
import Block from '../pictures/block.jpg';
import Phone from '../pictures/phone.jpg';
import Login from "../components/Login";

const Container = styled.div`
    height: 60px;
    padding: 10px 300px;
    background-color: #ffffff;
`

const Wrapper = styled.div`
    padding-bottom: 60px;
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
    width: 1100px;
    min-height: 250px; 
    margin: auto;
    background-image: url("src/pictures/block.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
`

const Text1 = styled.div`
    margin-left: 140px;
    font-size: 35px;
    color: whitesmoke;
    text-align: center;
`

const Img1 = styled.div`
    margin-top: 27px;
    margin-left: 270px;
`

const Navbar = () => {
    return (
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
                    <MenuItem><Badge badgeContent={4} color="primary"><ShoppingCartOutlined/></Badge></MenuItem>
                    {/* <Link to="/registration"><MenuItem>Регистрация</MenuItem></Link>
                    <Link to="/login"><MenuItem>Войти</MenuItem></Link>
                    <Link to="/cart"><MenuItem><Badge badgeContent={4} color="primary"><ShoppingCartOutlined/></Badge></MenuItem></Link> */}
                </Right>
            </Wrapper>
            <Bblock>
                <Text1>Аксессуары для <br/>Iphone 13 Pro Max</Text1> 
                <Img1><img src={Phone}/></Img1>
            </Bblock>
        </Container>
    )
}

export default Navbar
