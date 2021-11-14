import styled from 'styled-components';
export const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background: url('https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-size: cover;
background-attachment: fixed;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 30px;
`
export const Main = styled.div`
margin-top: 30px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 90%;
justify-content: center;
align-items: center;
min-height: 80vh;
`
export const Title = styled.div`
width: 100%;
height: 60px;
padding-left: 100px;
text-align: left;
text-transform: uppercase;
color: #ffff;
background: #008080;
h1{
    font-size: 35px;
    margin-top: 10px;
    cursor: pointer;
}
@media screen and (max-width:700px){
    padding-left: 20px;
    h1{
        font-size: 20px;
        margin-top: 20px;
    }
}
`
export const CardProduct = styled.div`
width: 360px;
height: 459px;
margin: 10px 15px 10px 5px;
position: relative;
background: #f7f7f7;
cursor: pointer;
border-radius: 10px;
.card-image{
    width: 95%;
    margin: auto;
    height: 314px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    img{
        height: 98%;
        margin-top: 2%;
    }
    .card-desc{
        position: absolute;
        bottom: -100%;
        transition: all .5s ease;
    }
    &:hover .card-desc{
        bottom: 0;
        width: 100%;
        height: 100%;
        color: #ffff;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,.3);
        span{
            width: 80%;
            text-align: center;
            line-height: 23px;
            letter-spacing: .8px;
        }
    }
}
.card-footer{
    width: 100%;
    height:145px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 25px;
        margin-bottom: 10px;
    }
    span{
        font-size: 18px;
        margin-bottom: 10px;
    }
    .rating{
        margin-bottom: 10px;
    }
    button{
        width: 80px;
        height: 30px;
        border-color: #f7c400;
        border-radius: 7px;
        background: transparent;
        cursor: pointer;
        font-weight: 300;
        transition: all .1s ease-in;
        &:hover{
            background: #2644e6;
            color: #ffff;
        }
    }
}
&:hover{
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    transform: scale(1.05);
}
`
export const Footer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
button{
    width: 200px;
    height: 30px;
    border: 4px solid transparent;
    outline: none;
    background: #f7c400;
    cursor: pointer;
    color: #ffff;
    border-radius: 10px;
    font-size: 16px;
    transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;

}
&:hover{
    button{
        background-color: #1C84FF;
    }
    
}
`