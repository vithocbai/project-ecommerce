import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import './styles.css'

function SliderScroll({ data }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />
    }
    console.log(data[0])
    return (
        <Slider {...settings}>
            {data.map((images, index) => {
                return <img key={index} src={images} alt="" />
            })}
        </Slider>
    )
}

export default SliderScroll
