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
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

const FormBottom = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 20px 0px;
    padding: 10px;
    border: 0.1px solid #B6B6B6;
    border-radius: 20px;
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
    margin-bottom: 10px;

    &:hover {
        background-color: #3FA3D1;
        transform: scale(1.05);
        transition: all 0.5s ease;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    color: #4D80E4;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <FormBottom>
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                    </FormBottom>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
