import React from 'react'
import styled from 'styled-components'
import { banner } from '../assets/data/banner'
import { bestProducts } from '../assets/data/bestProducts'
import { comments } from '../assets/data/comments'
import { Comment, HomeBanner, PopularProducts, Specialties, Writer } from '../components'
const Wrapper = styled.div`
max-width: 100%;

`
const HomePage = () => {
    return (
        <Wrapper>
            <HomeBanner data={banner}/>
            <Comment data={comments}/>
            <Specialties data={bestProducts}/>
            <PopularProducts data={bestProducts}/>
            <Writer/>
        </Wrapper>
    )
}

export default HomePage
