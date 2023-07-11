import React from 'react';

import Img0 from './uploads/img_0.jpg';
import Img1 from './uploads/img_1.jpg';
import Img2 from './uploads/img_2.jpg';


const Gallery = () => {

    let data = [
        {id:1,
        imgSrc:Img0,},
        {id:2,
        imgSrc:Img1,},
        {id:3,
        imgSrc:Img2,},

    ]

    return (
        <>
        <div className='gallery'>
            {data.map((item,index)=>{
                return(
                    <div className='pics' key = {index}>
                        <img src={item.imgSrc} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Gallery;