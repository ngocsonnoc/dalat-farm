import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsHandbag, BsSearch, BsMenuApp } from 'react-icons/bs'
import Badge from '@mui/material/Badge';




export const NavbarWrapper = styled.div`
width: 100%;
max-width: 100%;
height: 80px;
background: transparent;
display: flex;
flex-direction: row;
justify-content: space-between;
position: fixed;
top: 0;
z-index: 50;
transition: all .3s ease-out;
&.scroll{
    background: var(--bg-dark);
}
&.active{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 450px;
}
`
export const NavLogo = styled.div`
max-height: 80px;
width: 80px;
margin-left: 5%;
transition: all .3s ease-in-out;
@media screen and (max-width:900px){
    width: 100%;
    img{
        width: 80px;
    }
}
`
export const NavItems = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 500px;
.selected{
    color: red;
}
@media screen and (max-width:900px){
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    ${NavbarWrapper}.active &{
        display: flex;
       
    }
}
`
export const NavRight = styled.div`
display: flex;
width: 200px;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: #ffffff;
.navbar-right-item{
    cursor: pointer;
    .search-wrapper{
        display: none;
        position: absolute;
        bottom: -60px;
        width: 650px;
        height: 45px;
        border: 2px solid black;
        left: 30%;
        input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding-left: 30px;
            font-size: 16px;
            line-height: 20px;
        }
    }
    .search-wrapper.active{
        display: block;
    }
}
@media screen and (max-width:900px){
    display: none;
    width: 0;
    position: relative;
    width: 100%;
    .navbar-right-item{
        margin: 10px 0 10px 0;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        width: 100%;
        .search-wrapper{
            position: inherit;
            display: block;
            bottom: 0;
            left: 0;
            width: 70%;
            margin-right: 20px;
        }
    }
    
    ${NavbarWrapper}.active &{
        display: flex;
        flex-direction: column-reverse;
    }
}
`

export const NavItem = styled(NavLink)`
color: #ffffff;
font-size: 23px;
margin: 10px 0 10px 0;

`
export const Search = styled.div`


`
export const SearchIcon = styled(BsSearch)`
font-size: 25px;

`

export const Cart = styled(Badge)`
font-size: 25px;
`
export const BagIcon = styled(BsHandbag)`
font-size: 25px;
`
export const MenuIcon = styled(BsMenuApp)`
color: #ffff;
font-size: 25px;
position: fixed;
top: 25px;
right: 40px;
display: none;
cursor: pointer;
@media screen and (max-width:900px){
    display: block;
}
`