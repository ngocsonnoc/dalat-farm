import React, { useEffect, useState } from 'react'

import logo from '../../assets/img/logo.jpg'

import { BagIcon, MenuIcon, NavbarWrapper, NavItem, NavItems, NavLogo, NavRight, Search, SearchIcon } from './nav.elm'
import { Badge } from '@mui/material'


const Navbar = ({ data, cartItems }) => {
    const [active, setActive] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const renderNavLinkItems = (data) => {
        var result = null
        if (data) {
            result = data.map((item, index) => <NavItem to={item.to} activeClassName="selected" exact={item.exact} key={index}>
                {item.label}
            </NavItem>)
        }
        return result
    }
    const handleSearchOpen = () => {
        var s = document.getElementById('search-navbar')
        if (s.classList.contains('active')) {
            s.classList.remove('active')
        } else {
            s.classList.toggle('active')
        }
    }
    const handleActiveMobileNav = () => {
        setIsMobile(!isMobile)
        var wrap = document.getElementById('navbar-wrapper')
        if(wrap.classList.contains('active')){
            wrap.classList.remove('active')
        }
        else{
            wrap.classList.toggle('active')
        }
    }
    useEffect(() => {
        const activeBgNav = () => {
            setActive(!active)
            if (window.pageYOffset > 80) {
                setActive(true)
            }
            else {
                setActive(false)
            }
        }
        window.addEventListener('scroll', activeBgNav)
        return () => {
            window.removeEventListener('scroll', activeBgNav)
        };
    }, [active])
    return (
        <NavbarWrapper className={active ? 'scroll' : ''}  id='navbar-wrapper'>
            <NavLogo>
                <img src={logo} alt="logo" />
            </NavLogo>
            <MenuIcon onClick={handleActiveMobileNav} />
            <NavItems>
                {renderNavLinkItems(data)}
            </NavItems>
            <NavRight>
                <div className='navbar-right-item'>
                    <Search>
                        <SearchIcon onClick={handleSearchOpen} />
                    </Search>
                    <div className='search-wrapper' id='search-navbar'>
                        <input type="text" placeholder='search here...' />
                    </div>
                </div>
                <div className='navbar-right-item'>
                    <Badge badgeContent={cartItems.length ? cartItems.length : ''} color='primary'>
                        <BagIcon />
                    </Badge>
                </div>
                <div className='navbar-right-item'></div>
            </NavRight>
        </NavbarWrapper>
    )
}

export default Navbar
