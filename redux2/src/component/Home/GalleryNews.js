import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const showGallery = ({gallerydata}) => {
      if(gallerydata){
          return(
              <Slider {...settings}>
                  {gallerydata.map((item) => {
                      return(
                          <Link to="/" className="slider-item">
                              <div className="image"
                              style={{background:`url(/images/galleries/${item.images[0].img})`}}>

                              </div>

                          </Link>
                      )
                  })}

              </Slider>
          )
      }
  }

  const GalleryNews = (props) => {
      return(
          <div className="home-gallery">
              <h2>Image Gallery</h2>
              {showGallery(props)}
          </div>
      )
  }


  export default GalleryNews;