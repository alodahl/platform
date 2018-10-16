import * as React from 'react';
import Slider from 'react-slick';
import BlogCard from '../blog-card/BlogCard'
import blogList from '../blog-list/BlogList'

export default function MediaSlider() {

    const settings = {
      speed: 200,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      rows: 1,
      multipleItems: true,
      focusOnSelect: true,
      focusOnChange: true,
      variableWidth: true,
      touchMove: true,
      mobileFirst: true,
      touchThreshold: 10,
    };

    return (
      <Slider className="blog-slider" {...settings}>
          {blogList}
      </Slider>
    );

}
