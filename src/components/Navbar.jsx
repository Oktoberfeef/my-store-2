// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { Home, ShoppingCartOutlined} from "@mui/icons-material";
import Block from '../pictures/block.jpg';
import Phone from '../pictures/phone.jpg';
import case1 from '../pictures/case1.jpg';
import case2 from '../pictures/case2.jpg';
import case3 from '../pictures/case3.jpg';
import pods1 from '../pictures/pods1.jpg';
import pods2 from '../pictures/pods2.jpg';
import pods3 from '../pictures/pods3.jpg';
import pods4 from '../pictures/pods4.png';
import pods5 from '../pictures/pods5.png';
import pods6 from '../pictures/pods6.png';
import holder1 from '../pictures/holder1.jpg';
import holder2 from '../pictures/holder2.jpg';
import holder3 from '../pictures/holder3.jpg';
import lonio from '../pictures/lonio.jpg';
import Facebook from "../pictures/Facebook.jpg";
import Telegram from "../pictures/telegram.jpg";
import Login from "../components/Login";

const div = styled.div`
`

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
    cursor: pointer;
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

const Bblock1 = styled.div`
    width: 1100px;
    min-height: 250px; 
    margin: auto;
    background-image: url("src/pictures/block.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    margin-bottom: 40px;
`

const Text1 = styled.div`
    margin-left: 140px;
    margin-top: 70px;
    font-size: 35px;
    color: #ffffff;
    text-align: center;
`

const Img1 = styled.div`
    margin-top: 45px;
    margin-left: 270px;
`

const Bblock2 = styled.div`
`

const Cont_img1 = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
`

const Img2 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Img3 = styled.div`
    align-items: center;
    margin-left: 120px;
`

const Img4 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Cont_img2 = styled.div`
    display: flex;
    font-size: 18px;
`

const Text2 = styled.div`
    margin-left: 255px;
    font-weight: 600;
    margin-bottom: 100px;
`

const Text3 = styled.div`
    margin-left: 220px;
    font-weight: 600;
    margin-bottom: 100px;
`

const Text4 = styled.div`
    margin-left: 247px;
    font-weight: 600;
    margin-bottom: 100px;
`

const Cases = styled.h2`
    color: #838383;
    margin-bottom: 40px;
`

const Block3 = styled.div`
`

const Cont_img3 = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
`

const Img5 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Img6 = styled.div`
    align-items: center;
    margin-left: 120px;
`

const Img7 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Cont_img4 = styled.div`
    display: flex;
    font-size: 18px;
`

const Text5 = styled.div`
    margin-left: 105px;
    font-weight: 600;
    margin-bottom: 125px;
`

const Star = styled.div`
    color: gray;
    margin-left: 35px;
    font-weight: 600;
    margin-top: 25px;
`

const Text6 = styled.div`
    margin-left: 100px;
    font-weight: 600;
    margin-bottom: 125px;
`

const Star1 = styled.div`
    color: gray;
    margin-left: 35px;
    font-weight: 600;
    margin-top: 25px;
`

const Text7 = styled.div`
    margin-left: 127px;
    font-weight: 600;
    margin-bottom: 125px;
`

const Star2 = styled.div`
    color: gray;
    margin-left: 35px;
    font-weight: 600;
    margin-top: 25px;
`

const Texxt = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 125px;
`

const Texxt1 = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 125px;
`

const Texxt2 = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 125px;
`

const Pods = styled.h2`
    color: #838383;
    margin-bottom: 40px;
`


const Bbloock4 = styled.div`
`

const Cont_img5 = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
`

const Img8 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Img9 = styled.div`
    align-items: center;
    margin-left: 120px;
`

const Img10 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Cont_img6 = styled.div`
    display: flex;
    font-size: 18px;
`

const Text8 = styled.div`
margin-left: 105px;
font-weight: 600;
margin-bottom: 150px;
`

const Star3 = styled.div`
    color: gray;
    margin-left: 35px;
    font-weight: 600;
    margin-top: 25px;
`

const Text9 = styled.div`
margin-left: 105px;
font-weight: 600;
margin-bottom: 150px;
`

const Text10 = styled.div`
    margin-left: 105px;
    font-weight: 600;
    margin-bottom: 150px;
`

const Texxt3 = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 150px;
`

const Texxt4 = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 150px;
`

const Texxt5 = styled.div`
    margin-left: 100px;
    color: orange;
    font-weight: 600;
    margin-bottom: 150px;
`

const PodsDistant = styled.h2`
    color: #838383;
    margin-bottom: 40px;
`

const Holder = styled.h2`
    color: #838383;
    margin-bottom: 40px;
`

const Bblock5 = styled.div`
`

const Img11 = styled.div`
    margin-left: 1100px;
`

const Cont_img7 = styled.div`
    display: flex;
    font-size: 18px;
    margin-bottom: 30px;
`

const Img12 = styled.div`
    align-items: center;
    margin-left: 140px;
`

const Img13 = styled.div`
    align-items: center;
    margin-left: 80px;
`

const Img14 = styled.div`
    align-items: center;
    margin-left: 80px;
`

const Cont_img8 = styled.div`
    display: flex;
    font-size: 18px;
`

const Text11 = styled.h1`
    font-weight: 600;
    margin-left: 140px;
`

const Text12 = styled.h1`
    flex: 2;
    font-weight: 600;
    margin-left: 500px;
    color: #DF6464;
`

const Text13 = styled.h2`
    font-weight: 600;
    flex: 4;
    color: #DF6464;
`

const Container_2 = styled.div`
    height: 230px;
    background-color: black;
    margin-top: 2500px;
    color: white;
`

const CC = styled.div`
    display: flex;
    align-items: center;
`

const Text14 = styled.h1`
    font-weight: 600;
    margin-left: 100px;
    margin-bottom: 40px;
    cursor: pointer;
`

const Ul = styled.div`
margin-left: 300px;
list-style-type: none;
`

const Li_1 = styled.div`
cursor: pointer;
margin-top: 90px;
margin-bottom: 20px;
`

const Li_2 = styled.div`
cursor: pointer;
margin-bottom: 20px;
`

const Li_3 = styled.div`
cursor: pointer;
`

const Text15 = styled.div`
margin-left: 200px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
`

const Text16 = styled.div`
margin-left: 20px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
`

const Text17 = styled.div`
margin-left: 20px;
    font-weight: 600;
    margin-top:40px;
    cursor: pointer;
`

const Img15 = styled.div`
margin-left: 130px;
margin-bottom: 50px;
cursor: pointer;
`

const Img16 = styled.div`
margin-left: 20px;
margin-bottom: 50px;
cursor: pointer;
`

const End = styled.div`
margin-top: 20px;
margin-left: 1550px;
cursor: pointer;
`

const Navbar = () => {
    return (
        <p>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo>QPICK</Logo>
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
                <Bblock1>
                    <Text1>Аксессуары для <br/>Iphone 13 Pro Max</Text1> 
                    <Img1><img src={Phone}/></Img1>
                </Bblock1>
                <Cases>Чехлы</Cases>
                <Bblock2>
                    <Cont_img1>
                        <Img2><img src={case1}/></Img2>
                        <Img3><img src={case2}/></Img3>
                        <Img4><img src={case3}/></Img4>
                    </Cont_img1>
                    <Cont_img2>
                        <Text2>Стеклянные</Text2>
                        <Text3>Силиконовые</Text3>
                        <Text4>Кожаные</Text4>
                    </Cont_img2>
                </Bblock2>
                <Pods>Наушники</Pods>
                <Block3>
                    <Cont_img3>
                        <Img5><img src={pods1}/></Img5>
                        <Img6><img src={pods2}/></Img6>
                        <Img7><img src={pods3}/></Img7>
                    </Cont_img3>
                    <Cont_img4>
                        <Text5>Apple BYZ S852I <Star>★ 4.7</Star></Text5>
                        <Texxt>707 ₽</Texxt>
                        <Text6>Apple EarPods <Star1>★ 4.5</Star1></Text6>
                        <Texxt1>466 ₽</Texxt1>
                        <Text7>Apple EarPods <Star2>★ 4.5</Star2></Text7>
                        <Texxt2>466 ₽</Texxt2>
                    </Cont_img4>
                </Block3>
                <PodsDistant>Наушники Беспроводные</PodsDistant>
                <Bbloock4>
                    <Cont_img5>
                        <Img8><img src={pods4}/></Img8>
                        <Img9><img src={pods5}/></Img9>
                        <Img10><img src={pods6}/></Img10>
                    </Cont_img5>
                    <Cont_img6>
                        <Text8>Apple AirPods <Star3>★ 4.7</Star3></Text8>
                        <Texxt3>1911 ₽</Texxt3>
                        <Text9>GERLAX GH-04 <Star3>★ 4.7</Star3></Text9>
                        <Texxt4>1309 ₽</Texxt4>
                        <Text10>BOROFONE BO4 <Star3>★ 4.7</Star3></Text10>
                        <Texxt5>1509 ₽</Texxt5>
                    </Cont_img6>
                </Bbloock4>
                <Holder>Автодержатель</Holder>
                <Bblock5>
                    <Img11><img src={lonio}/></Img11>
                    <Cont_img7>
                        <Img12><img src={holder1}/></Img12>
                        <Img13><img src={holder2}/></Img13>
                        <Img14><img src={holder3}/></Img14>
                    </Cont_img7>
                    <Cont_img8>
                        <Text11>BOROFONE BH32</Text11>
                        <Text12>587 ₽</Text12>
                        <Text13>-20%</Text13>
                    </Cont_img8>
                </Bblock5>
            </Container>
            <Container_2>
                <CC>
                    <Text14>QPICK</Text14>
                    <Ul>
                        <Li_1><li>Избранное</li></Li_1>
                        <Li_2><li>Корзина</li></Li_2>
                        <Li_3><li>Контакты</li></Li_3>
                    </Ul>
                    <Text15>Каз</Text15>
                    <Text16>Рус</Text16>
                    <Text17>Eng</Text17>
                    <Img15><img src={Facebook}/></Img15>
                    <Img16><img src={Telegram}/></Img16>
                </CC>
                <End>Copyright © 2024. Все права защищены.</End>
            </Container_2>
        </p>
    )
}

export default Navbar
