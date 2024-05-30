import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #290075;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    display: flex;
`

const Line = () => {
    return (
        <Container>
            Супер-предложение! Только у нас вы купите товар с 99% скидкой!
        </Container>
    )
}

export default Line