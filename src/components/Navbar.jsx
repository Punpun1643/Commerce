import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    background-color: #1C1068;

    ${mobile({ height: "50px"})};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ padding: "10px 0px"})};
  
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    background-color: #1C1068;
    outline: none;
    color: white;
    ${mobile({ width: "50px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px"})};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center", flex: "2"})};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({ fontSize: "12px", marginLeft: "10px"})};
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language style={{color: "white"}}>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search..."/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo style={{color: "white"}}>Cömmerce.</Logo>
                </Center>
                <Right>
                    <MenuItem style={{color: "white"}}>REGISTER</MenuItem>
                    <MenuItem style={{color: "white"}}>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon style={{color: "white"}}/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
