import React from 'react'
import StarRatings from 'react-star-ratings';

export const Skill_Item = (props) => {
    return (
        <div className='skill-item'>
            <h1>{props.title}</h1>
            <StarRatings
          rating={props.rating}
          starRatedColor="black"
          numberOfStars={5}
          starEmptyColor="white"
          starDimension="0.8rem"
        starSpacing="0.1rem"
        />
        </div>
    )
}
