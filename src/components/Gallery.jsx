import React, { useState } from 'react';
import './Gallery.css';





const Gallery = () => {


    function importAll(r) {
        // console.log("inside importAll")`
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const data = importAll(require.context('../uploads', true, /\.(jpg|jpeg)$/));
    console.log(data);


    return (
        <>


            <div className='gallery'>
                {Object.entries(data).map(([key, value], index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={value} style={{ width: '100%', }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery;