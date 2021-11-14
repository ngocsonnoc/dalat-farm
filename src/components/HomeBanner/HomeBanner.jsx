import  AOS  from 'aos'
import React, { useEffect } from 'react'
import { Border, CardItem, Wrapper } from './hb'

const HomeBanner = ({ data }) => {
    const aosAnimations = [ 'fade-down-right', 'fade-down','fade-down-left']
    
    useEffect(() => {
        AOS.init();
    })

    const renderCardItem = (items) => {
        var result = null
        if (items) {
            result = items.map((item, index) => <CardItem key={index} data-aos={aosAnimations[index]} data-aos-duration='1000'>
                <div className='card-image'> <img src={item.img} alt="..." /></div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </CardItem>)
        }
        return result
    }
    return (
        <Wrapper id='banner_parallax'>
            <div className='banner-content'>
                <h3>Tinh hoa miền đất lạnh</h3>
                <h1>Rau xanh Đà Lạt</h1>
                <p>Chuyên cung cấp nguồn thực phẩm thủy canh sạch, an toàn, xuất xứ hoàn toàn 100% tại Đà Lạt.
                    Hỗ trợ tham quan và đánh giá chất lượng ngay tại vườn.</p>
                <div className='banner-group-items'>
                    {renderCardItem(data)}
                </div>
            </div>


            <Border></Border>
        </Wrapper>
    )
}

export default HomeBanner
