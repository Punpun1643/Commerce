import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile} from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: #1C1068;

    ${mobile({ flexDirection: "column", alignItems: "center"})};
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column; 
    padding: 20px;
`

const Logo = styled.h1`
    color: white;
`

const Desc = styled.p`
    margin: 20px 0px;
    color: white;
`

const SocialContainer = styled.div`
    display: flex;

`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: white;

    ${mobile({ display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    color: white;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    height: 15%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Cömmerce</Logo>
                <Desc>A site for anyone to buy and sell non-fungible tokens (NFTs).</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight: "10px"}}/>Ridge View Residential College
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight: "10px"}}/>+65 1234 5678
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style={{marginRight: "10px"}}/>commerce@global.dev
                </ContactItem>
                <Payment src="/assests/payment methods.png"/>
            </Right>
        </Container>
    )
}

export default Footer
