import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100">
      <section className='starRating flex justify-center items-center mt-10'>
        {
          [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                key={index}
                className={`transition duration-300 ease-in-out ${
                  index <= (hover || rating) ? 'text-yellow-400' : 'text-gray-400'
                } cursor-pointer hover:scale-110`}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                size={50}
              />
            );
          })
        }
      </section>
    </div>
  )
}

export default StarRating
