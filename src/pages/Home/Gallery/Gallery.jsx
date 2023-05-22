import React from 'react';
import ImageGallery from 'react-image-gallery';
import gallery1 from '../../../assets/gallery1.jpg'
import gallery2 from '../../../assets/gallery2.jpg'
import gallery3 from '../../../assets/gallery3.jpg'

const Gallery = () => {

    const images = [
        {
            original: gallery1,
            thumbnail: gallery1,
        },
        {
            original: gallery2,
            thumbnail:gallery2,
        },
        {
            original: gallery3,
            thumbnail:gallery3,
        },
    ];
    return(
          <div className='my-10'>
            <ImageGallery items={images} />
          </div>
    )

};

export default Gallery;