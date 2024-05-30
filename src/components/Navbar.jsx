import React from "react"
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Container = styled.div`
    height: 60px;
    background-color: #ffffff;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    text-align: center;
    align-items: center;
`

const Center = styled.div`
    flex:1;
    text-align: center;
`

const Right = styled.div`
    flex:1;
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
    width: fit-content;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>QPICK</Logo>
            </Left>
            <Center><SearchContainer><SearchIcon style={{color: "gray", fontSize:16}}/><Input></Input></SearchContainer></Center>
            <Right>
                <MenuItem>Регистрация</MenuItem>
                <MenuItem>Войти</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar