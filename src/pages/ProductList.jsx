import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from "../responsive";

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`

const Filter = styled.div`
    margin: 20px;

    ${mobile({width: "0px 20px"})};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({margin: "0px"})};
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px;

    ${mobile({margin: "10px 0px"})};
`

const Option = styled.option``


const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Collections</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Collections:</FilterText>
                    <Select>
                        <Option disabled selected>Choose collection</Option>
                        <Option>CryptoPunks</Option>
                        <Option>Bored Ape Yacht</Option>
                        <Option>Meow Cat</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Collections:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Popularity (High to Low)</Option>
                        <Option>Popularity (Low to High)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
