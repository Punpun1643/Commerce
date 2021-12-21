import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300px;
    margin-bottom: 20px;

    ${mobile({ textAlign: "center"})};
`

const InputContainer = styled.div`
    background-color: white;
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;    
    border: 1px solid lightgray;

    ${mobile({ width: "805"})};
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #46B3E6;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter  
            </Title>
            <Desc>
                Get timely updates from your favourite collections.
            </Desc>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
