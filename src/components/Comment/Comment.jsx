import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, CardComment, Wrapper } from './cm'
import {StarRating} from '../'

const NextArrow = (props) => {
    const { onClick } = props;
    return (<ArrowRight onClick={onClick} />)

}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (<ArrowLeft onClick={onClick} />)

}
const Comment = ({ data }) => {
const [num, setNum] = useState(3)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
      autoplaySpeed: 3000,
        slidesToShow: num,
        slidesToScroll: num>1?num-1:num,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    useEffect(() => {
        const setSlideToWindow =()=>{
            if(window.innerWidth<376){
                setNum(1)
            }else if( window.innerWidth>=376&&window.innerWidth<900){
                setNum(2)
            }
            else{
                setNum(3)
            }
        }
        window.addEventListener('resize',setSlideToWindow)
        return () => {
            window.removeEventListener('resize',setSlideToWindow)
        }
    }, [num])
    const renderCardComment = (data) => {
        var result = null
        if (data) {
            result = data.map((item, index) =>
                <CardComment key={index}>
                    <div className='avt'>
                        <img src={item.avt.default} alt="avt" />
                    </div>
                    <div className='content'>
                        <span className='name'>{item.name}</span>
                        <p className='email'>{item.email}</p>
                        <p className='comment'>{item.comment}</p>
                        <div className='rating'><StarRating point={item.rate} color='#f7c400'/></div>
                        <div className='date'><span>{item.createAt}</span></div>
                    </div>
                </CardComment>)
        }
        return result
    }
    return (
        <Wrapper>
            <Slider {...settings}>
                {renderCardComment(data)}
            </Slider>
        </Wrapper>
    )
}

export default Comment
