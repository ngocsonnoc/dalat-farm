import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
height: 350px;
padding-left: 13%;
padding-right: 13%;
padding-top: 40px;
z-index: 1;
position: relative;
overflow-x: auto;
`
export const CardComment = styled.div`
width: 338px;
height: 244px;
margin-bottom: 5px;
margin-top: 3px;
position: relative;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
.avt{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 3px;
}
.content{
    width: 100%;
    margin-top: 10px;
    margin-left: 25px;

    span.name{
        margin-left: 50px;
        font-weight: 600;
    }
    p.email{
        margin-left: 50px;
        font-size: 14px;
        font-style: italic;
    }
    p.comment{
        margin-top: 14px;
        max-height: 90px;
        max-width: 80%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
                display: none;
            }
    }
    .date{
        width: 100%;
        position: absolute;
        bottom: 50px;
        left: 0;
        padding: 10px;
        text-align: right;
    }
    .rating{
        width: 60%;
        position: absolute;
        bottom: 30px;
        left: 20% ;
    }
}
`

export const ArrowLeft = styled(BsFillArrowLeftCircleFill)`
position: absolute;
top: 40%;
left: -100px;
z-index: 30;
color: #737373;
font-size: 0rem;
cursor: pointer;
transition: all .3s ease-in-out;
${Wrapper}:hover &{
    left: -30px;
    font-size: 2rem;
}
`
export const ArrowRight = styled(BsFillArrowRightCircleFill)`
position: absolute;
top: 40%;
right: -100px;
z-index: 3;
color: #737373;
font-size: 0rem;
cursor: pointer;
transition: all .3s ease-in-out;
${Wrapper}:hover &{
    right: -30px;
    font-size: 2rem;
}
`