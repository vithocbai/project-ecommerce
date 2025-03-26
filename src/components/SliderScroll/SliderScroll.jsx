import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import './styles.css'
import ProductItem from '@components/ProductItem/ProductItem'

function SliderScroll({ data, isProductItem = false, slideToShowProduct = 1 }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideToShowProduct,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />
    }
    return (
        <Slider {...settings}>
            {data.map((item, index) =>
                isProductItem ? (
                    <ProductItem
                        key={index}
                        src={item.images}
                        title={item.name}
                        price={item.price}
                        details={item}
                        isHomePage={false}
                        setShow={true}
                    />
                ) : (
                    <img key={index} src={item} alt="" className="thumb" />
                )
            )}
        </Slider>
    )
}

export default SliderScroll
