import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 70px;
    height: 70px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    position: relative;
    padding: 0.5rem;
    cursor: pointer;
    margin-left: 11.2rem
`;
const Line = styled.span`
    position: relative;
    width: 50%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.darkGrey};
    
    ::after, ::before {
        content: '';
        display: block;
        height: 2px;
        width: 125%;
        background-color: ${({theme}) => theme.colors.darkGrey};
        position: absolute;
        right: 0;
    }
    ::after {
        bottom: 1rem;
    }
    ::before {
        top: 1rem;
        
    }
`;
const Hamburger = () => {
    return ( 
        <Button type="button">
            <Line />
        </Button>
     );
}
 
export default Hamburger;