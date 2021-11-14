import React from 'react'
import { HalfStar, Star, Wrapper } from './sr'

const StarRating = ({ point ,color}) => {
    var result = null
    const renderStarPoint = (point) => {
        if (point > 0 && point < 1) {
            result = <HalfStar />
        } else if (point >= 1 && point < 1.5) {
            result = <><Star /><HalfStar /></>
        } else if (point >= 1.5 && point < 2) {
            result = <><Star /><HalfStar /></>
        } else if (point >= 2 && point < 2.5) {
            result = <><Star /><Star /></>
        } else if (point >= 2.5 && point < 3) {
            result = <><Star /><Star /><HalfStar /></>
        } else if (point >= 3 && point < 3.5) {
            result = <><Star /><Star /><Star /></>
        } else if (point >= 3.5 && point < 4) {
            result = <><Star /><Star /><Star /><HalfStar /></>
        } else if (point >= 4 && point < 4.5) {
            result = <><Star /><Star /><Star /><Star /></>
        }
        else if (point >= 4.5 && point < 5) {
            result = <><Star /><Star /><Star /><Star /><HalfStar /></>
        }
        else if (point >= 5) {
            result = <><Star /><Star /><Star /><Star /><Star /></>
        }
        return result
    }

    return (
        <Wrapper color={color}>
            {renderStarPoint(point)}
        </Wrapper>
    )
}

export default StarRating
