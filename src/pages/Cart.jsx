import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive";

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({padding: "10px"})};
`

const Title = styled.h1`
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    border-color: ${props => props.type === "filled" ? "none" : "#46B3E6"};
    color: #46B3E6;
    background-color: ${props => props.type === "filled" ? "#46B3E6" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`

const TopTexts = styled.div`
    ${mobile({display: "none"})};
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({flexDirection: "column"})};
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;

    ${mobile({flexDirection: "column"})};
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductTokenStandard = styled.span``

const ProductBlockchain = styled.span``

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({margin: "5px 15px"})};
`

const ProductPrice = styled.div`
    font-size: 30px;

    ${mobile({marginBottom: "20px"})};
`

const Hr = styled.hr`
    background-color: #EEE;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "3000"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 20px;
    background-color: #4D80E4;
    border: none;
    color: white;
    border-radius: 20px;
    font-size: 16px;

    &:hover {
        background-color: #4674CE;
        transform: scale(1.05);
        transition: all 0.5s ease;
    }
`

export const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="/assests/popularproduct5.png"/>
                                <Details>
                                    <ProductName><b>Product: </b>WRAPPED CRYPTOPUNKS</ProductName>
                                    <ProductId><b>Token ID: </b>4756</ProductId>
                                    <ProductColor color="#28B143"/>
                                    <ProductTokenStandard><b>Token Standard: </b>ERC-721</ProductTokenStandard>
                                    <ProductBlockchain><b>Blockchain: </b>Ethereum</ProductBlockchain>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>200 ETH</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="/assests/popularproduct5.png"/>
                                <Details>
                                    <ProductName><b>Product: </b>WRAPPED CRYPTOPUNKS</ProductName>
                                    <ProductId><b>Token ID: </b>4756</ProductId>
                                    <ProductColor color="#28B143"/>
                                    <ProductTokenStandard><b>Token Standard: </b>ERC-721</ProductTokenStandard>
                                    <ProductBlockchain><b>Blockchain: </b>Ethereum</ProductBlockchain>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>200 ETH</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                       
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>400 ETH</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Transaction Fees</SummaryItemText>
                            <SummaryItemPrice>0.35 ETH</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>0.05 ETH</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>400.30 ETH</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;