import React from 'react'
import { Card } from 'reactstrap'
import DogImage from './DogImage'
import LikeButton from './LikeButton'

const ImageContainer = ({setcurrentIndex, item, index, toggle}) => {
        

    return (
        <div key={item} className='singleImage'>
        <Card>
            <DogImage cI={setcurrentIndex} imgSrc={item} currentIndex={index} toggle={toggle}/>
            <LikeButton item={item} />
        </Card>
    </div>
    )
}

export default ImageContainer
