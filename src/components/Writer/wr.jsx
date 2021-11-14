import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
min-height: 80vh;
display: flex;
flex-direction: column;
align-items: center;
`
export const Main = styled.div`
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