import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #DFF6F0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            Black Friday Sale! Get your NFTs now!
        </Container>
    )
}

export default Announcement
