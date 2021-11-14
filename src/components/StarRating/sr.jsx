import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
color: ${({color})=>color?color:'#fffff'};
cursor: pointer;
`
export const Star = styled(BsStarFill)`

`
export const HalfStar = styled(BsStarHalf)`

`