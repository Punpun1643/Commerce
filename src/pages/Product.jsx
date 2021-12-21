import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive";
// import { Button } from '@mui/material';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({padding: "10px", flexDirection: "column"})};
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    border-radius: 10%;

    ${mobile({height: "60vh"})};
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({padding: "10px"})};
`

const Title = styled.h1`
    font-weight: 300;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`

const FilterContainer = styled.div`
    margin-top: 20px;
    width: 60%;
    display: flex;
    justify-content: space-between;

    ${mobile({width: "100%"})};
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`

const FilterHair = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterGender = styled.select`
    margin-left: 10px;
    padding: 5px;

`

const FilterGenderOption = styled.option`
`

const AddContainer = styled.div`
    margin-top: 20px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({width: "100%"})};
`

const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #4D80E4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    font-weight: 1000;
    padding: 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #4D80E4;
    background-color: white;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background-color: #F8F4F4;
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`



const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="/assests/cryptopunkpic.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Wrapped Cryptopunks</Title>
                    <Desc>This Punk was wrapped using Wrappred Punks contract. 
                    Wrapped Punks are ERC721 Tokens, each one backed 1:1 by an original Cryptopunk by Larvalabs. 
                    CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard.
                    </Desc>
                    <Price>3.5 ETH</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Hair Colour</FilterTitle>
                            <FilterHair color="Black"/>
                            <FilterHair color="#28B143"/>
                            <FilterHair color="#E22626"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Gender</FilterTitle>
                            <FilterGender>
                                <FilterGenderOption>Male</FilterGenderOption>
                                <FilterGenderOption>Female</FilterGenderOption>
                            </FilterGender>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product