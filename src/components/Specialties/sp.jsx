import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Wrapper = styled.div`
min-height: 90vh;
width: 100%;
padding-top: 30px;
background-color: #f7f7f7;
`
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
@media screen and (max-width:800px){
    flex-direction: column;
    align-items: center;
}
`
export const Products = styled.div`
width: 896px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
    .header{
        margin-bottom: 40px;
        span{
            font-family: 'Libre Baskerville', serif;
            font-size: 14px;
            line-height: 25px;
            font-weight: 300;
            color: #737373;
            margin-bottom: 10px;
        }
        h2{
            font-weight: 600;
            font-size: 34px;
            line-height: 34px;
            text-transform: uppercase;
            margin-top: 0;
            color: #484848;
        }
    }
.slider{
    max-width: 100%;
}
@media screen and (max-width:800px){
    width: 100%;
    justify-content: center;
    .slider{
        width: 90%;
    }
}
@media screen and (max-width:376px){
    width: 100%;
    justify-content: center;
    .slider{
        width: 80%;
    }
    .header{
        max-width: 90%;
        h2{
            font-size: 25px;
        }
    }
}
`
export const Desc = styled.div`
width: 330px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
h2{
    font-size: 18px;
    text-transform: uppercase;
    max-width: 80%;
    margin-bottom: 10px;
}
img.sign{
    width: 70px;
    height: 50px;
}
p{
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
}
.img-sub{
    margin-top: 30px;
width: 212px;
height: 136px;
}
@media screen and (max-width:376px){
    max-width: 100%;
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
${Products}:hover &{
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
${Products}:hover &{
    right: -30px;
    font-size: 2rem;
}
`
export const ProductCard = styled.div`
width: 274px !important;
height: 325px;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
cursor: pointer;
.image-con{
    width: 274px;
    height: 174px;
    position: relative;
    overflow: hidden;
    .information{
        transition: all .5s ease;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        bottom: -100%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        color: #ffffff;
        .price{
            margin-bottom: 40px;
            font-size: 20px;
        }
        .status{
            font-size: 20px;
            text-transform: uppercase;
        }
    }
}
.desc{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    justify-content: center;
    text-align: center;
    h2{
        font-size: 23px;
    }
    p{
        color: #929292;
        font-family: 'Libre Baskerville', serif;
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        width: 100%;
        text-align: center;

    }
}
&:hover{
    .image-con{
        .information{
            bottom: 0;
        }
    }
}
`