import styled from 'styled-components';

const Square = styled.div`
    width: ${({width}) => width}vw;
    height: ${({height}) => height}vh;
    border: solid ${({border}) => border}px ${({theme}) => theme.colors.red};
    position: absolute;
    top: ${({top}) => top}px;
    left: ${({left}) => left}px;
    z-index: -1;
`;
 
export default Square;