import React, { useState } from 'react';
import './Gallery.css';



import Img1 from '../uploads/img_1.jpg';
import Img2 from '../uploads/img_2.jpg';
import Img3 from '../uploads/img_3.jpg';
import Img4 from '../uploads/img_4.jpg';
import Img5 from '../uploads/img_5.jpg';
import Img6 from '../uploads/img_6.jpg';


const Gallery = () => {

    // let data = [
    //     {
    //         id: 1,
    //         imgSrc: Img1,
    //     },
    //     {
    //         id: 2,
    //         imgSrc: Img2,
    //     },
    //     {
    //         id: 3,
    //         imgSrc: Img3,
    //     },
    //     {
    //         id: 4,
    //         imgSrc: Img4,
    //     },
    //     {
    //         id: 5,
    //         imgSrc: Img5,
    //     },
    //     {
    //         id: 6,
    //         imgSrc: Img6,
    //     },

    // ]
    // console.log(data)

    const templates = require.context('../uploads', true, /\.(jpg|jpeg)$/);

    let data = templates.keys().map((elem, index) => ({
        id: index + 1,
        imgSrc: `src/uploads${elem.substring(1)}`,
    }));

    console.log(data);





    // const [model, setModel] = useState(false);
    // const [tempingSrc, setTempImgSrc] = useState('');
    // const getIMg = (imgSrc) => {
        // setTempImgSrc(imgSrc);
        // setModel(true);
    // }

    return (
        <>

            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%', }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;