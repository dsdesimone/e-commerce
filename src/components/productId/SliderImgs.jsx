import React, { useState } from 'react'
import './styles/SliderImgs.css'

const SliderImgs = ({ product }) => {

  const [numberImg, setnumberImg] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`
  }

  const handlePrev = () => {
    if(numberImg - 1 < 0){
      setnumberImg(2)
    } else {
      setnumberImg(numberImg -1)
    }
  }

  const handleNext = () => {
    if(numberImg + 1 > 2){
      setnumberImg(0)
    } else {
      setnumberImg(numberImg + 1)
    }
  }

  return (
    <div className='slider'>
      <div onClick={handlePrev} className='slider__arrowhead slider-left'><i class="fa-solid fa-chevron-left"></i></div>
      <div style={objStyle} className='slider__interior'>
        {
          product?.images.map(imgInfo => (
            <div className='slider__img-container'>
              <img
                className='slider__img' 
                key={imgInfo.id} 
                src={imgInfo.url} 
                alt="" 
              />
            </div>
          ))
        }
      </div>
      <div onClick={handleNext} className='slider__arrowhead slider-right'><i class="fa-solid fa-chevron-right"></i></div>
        
    </div>
  )
}

export default SliderImgs