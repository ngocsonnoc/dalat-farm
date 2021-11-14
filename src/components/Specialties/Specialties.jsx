
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Container, Desc, Wrapper, Products, ProductCard } from './sp'

const NextArrow = (props) => {
    const { onClick } = props;
    return (<ArrowRight onClick={onClick} />)

}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (<ArrowLeft onClick={onClick} />)

}
const Specialties = ({ data }) => {
    const [num, setNum] = useState(3)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: num,
        slidesToScroll: num > 1 ? num - 1 : num,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    useEffect(() => {
        const setSlideToWindow = () => {
            if (window.innerWidth < 376) {
                setNum(1)
            } else if (window.innerWidth >= 376 && window.innerWidth < 900) {
                setNum(2)
            }
            else {
                setNum(3)
            }
        }
        window.addEventListener('resize', setSlideToWindow)
        return () => {
            window.removeEventListener('resize', setSlideToWindow)
        }
    }, [num])
    const renderBestProducts = (data) => {
        var result = null
        if (data) {
            result = data.map((item, index) => <ProductCard key={index}>
                <div className='image-con'>
                    <img src={item.img} alt="..." />
                    <div className='information'>
                        <span className='price'>Giá bán: {item.price}</span>
                        <span className='status'>{item.status === 1 ? 'Sẵn hàng' : 'Liên hệ'}</span>
                    </div>
                </div>
                <div className='desc'>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                </div>
            </ProductCard>)
        }
        return result
    }
    return (
        <Wrapper>
            <Container>
                <Products>
                    <div className='header'>
                        <span>Sản phẩm nổi bật</span>
                        <h2>Đặc sản trong mùa</h2>
                    </div>
                    <div className='slider'>
                        <Slider {...settings}>
                            {renderBestProducts(data)}
                        </Slider>
                    </div>
                </Products>
                <Desc>
                    <h2>Thực phẩm sạch đảm bảo sức khỏe cho các con.</h2>
                    <p>
                        Chúng tôi cam kết 100% sản phẩm đều xuất xứ từ Đà Lạt,
                        luôn đảm bảo vệ sinh an toàn thực phẩm, canh tác bằng các hình thức an toàn, sạch. 
                        Về giá thành thì luôn đảm bảo vì nông sản được xuất tại vườn không qua trung gian.
                        Chúng tôi sẵn sàng đền bù nếu trường hợp phát hiện hàng kém chất lượng, sai nguồn gốc xuất xứ.
                    </p>
                    <img src="http://templates.framework-y.com/gourmet/images/sign-gray.png" alt="sign" className='sign'/>
                    <div className='img-sub'><img src="http://templates.framework-y.com/gourmet/images/baby.jpg" alt="" /></div>
                </Desc>

            </Container>
        </Wrapper>
    )
}

export default Specialties
