import styled from 'styled-components';
import bg from '../../assets/img/hd-4.jpg'
import border from '../../assets/img/border.png'
export const Wrapper = styled.div`
min-height: 100vh;
width: 100%;
background: url(${bg});
background-size: cover;
background-attachment: fixed;
display: flex;
align-items: center;
justify-content: center;
.banner-content{
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffff;
h1{
    font-size: 50px;
    line-height: 57px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
h3{
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
}
p{
    color: #FAFAFA !important;
    font-family: Libre Baskerville, serif;
    font-size: 16px;
    line-height: 25px;
    font-weight: 300;
    margin-bottom: 30px;
}
.banner-group-items{
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

}
@media (max-width:1024px){
    
    .banner-group-items{
        width: 95%;
    }
}
}

@media screen and (max-width:376px){
    padding-top: 100px;
   .banner-content{
    h1{
    font-size: 35px;
}
h3{
    max-width: 90%;
}
p{
    max-width: 90%;
    text-align: center;
}
        .banner-group-items{
            flex-direction: column;
        }
   }
    
}
`
export const Border = styled.div`
width: 100%;
height: 48px;
background: url(${border});
background-size: cover;
position: absolute;
bottom: 0;
&::after{
content: '';
position: absolute;
width: 100%;
height: 100%;
background: rgba(255,255,255,.04)
}
`
export const CardItem = styled.div`
width: 361px;
height: 232px;
position: relative;
color: #ffff;
cursor: pointer;
overflow: hidden;
transition: all .6s ease;
.card-image{
width: 100%;
height: 100%;
transition: all .6s ease;
}
h2{
position: absolute;
top: 30%;
text-transform: uppercase;
z-index: 2;
margin-left: 7%;
font-size: 24px;

}
p{
position: absolute;
top: 55%;
z-index: 2;
max-width: 70%;
margin-left: 10%;
}
&::after{
    top: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 1;
}
&:hover{
    .card-image{
        transform: scale(1.2);
    }
}
@media screen and (max-width:376px){
    max-width: 95%;
    margin-top: 15px;
}
`