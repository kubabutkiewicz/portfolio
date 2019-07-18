import styled from 'styled-components';

const Square = styled.div`
    width: ${({width}) => width}vw;
    height: ${({width}) => width}vw;
    border: solid ${({border}) => border}px ${({theme}) => theme.colors.red};
    position: absolute;
    top: ${({top}) => top}%;
    left: ${({left}) => left}%;
    z-index: -1;
    @media screen and (min-width: 768px) {
        width: calc(${({width}) => width}vw - 10vw);
        height: calc(${({width}) => width}vw - 10vw);
    }
    @media screen and (min-width: 1024px){
        width: calc(${({width}) => width}vw - 25vw);
        height: calc(${({width}) => width}vw - 25vw);
    }
    @media screen and (min-width: 1300px){
        width: calc(${({width}) => width}vw /3.5);
        height: calc(${({width}) => width}vw /3.5);
    }
`;
 
export default Square;