import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { StarRating } from '..'
import { CardProduct, Footer, Main, Title, Wrapper } from './pp'

const PopularProducts = ({ data }) => {
    const [items, setItems] = useState(6)
    const renderCardProducts = (data) => {

        var result = <CircularProgress />
        var temp = []
        if (data) {
            for (var i = 0; i < items; i++) {
                temp.push(data[i])
            }
            result = temp.map((item, index) =>
                <CardProduct key={index}>
                    <div className='card-image'>
                        <img src={item.img} alt="img" />
                        <div className='card-desc'><span>{item.desc}</span></div>
                    </div>
                    <div className='card-footer'>
                        <h2>{item.name}</h2>
                        <span className='price'>{item.price}</span>
                        <div className='rating'><StarRating point={item.rate} color='#ea4913' /></div>
                        <button>Đặt Mua</button>
                    </div>
                </CardProduct>)

        }
        return result
    }
    const handleSeeMore =()=>{
        if(items<data.length){
            setItems(data.length)
        }
        else{
            setItems(6)
        }
    }
    return (
        <Wrapper>
            <Title>
                <h1>Sản phẩm bán chạy trong mùa</h1>
            </Title>
            <Main>
                {renderCardProducts(data)}
            </Main>
            <Footer>
                <button onClick={handleSeeMore}>{data&&items===data.length?'Ẩn bớt':'Xem Thêm'}</button>
            </Footer>
        </Wrapper>
    )
}

export default PopularProducts
