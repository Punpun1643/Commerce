import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${'' /* ${mobile({ height: "50vh"})} */}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #1C1068;
    margin-bottom: 20px;
    font-weight: 2000;
    background-color: #fff7f7;
    opacity: 0.8;
    border-radius: 10px;
    padding: 10px;
`
const Button = styled.button`
    border-color: #1C1068;
    padding: 10px;
    background-color: white;
    opacity: 0.8;
    color: #1C1068;
    cursor: pointer;
    border-radius: 20px;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
