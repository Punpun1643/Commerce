import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/assests/Register Background.png");
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 4px 24px 60px rgba(109, 141, 173, 0.65);

    ${mobile({width: "75%"})};
`

const Title = styled.h1`
    font-size: 24px;
    color: #1C1068;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: 0.1px solid #B6B6B6;
    border-radius: 20px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    color: #A0A0A0;
    font-weight: 350;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    background-color: #46B3E6;
    color: white;
    font-weight: 1000;  
    box-shadow: 0px 16px 40px rgba(0,0,0, 0.15);
    cursor: pointer;

    &:hover {
        background-color: #3FA3D1;
        transform: scale(1.05);
        transition: all 0.5s ease;
    }
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in 
                        accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
