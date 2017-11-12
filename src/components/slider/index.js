import React from 'react';
import SlickSlider from 'react-slick';

import Arrow from './arrow';

import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import RightArrowIcon from '../../assets/icons/right-arrow.png';

import './styles.scss';

export default class Slider extends React.Component {
  static defaultProps = {
    settings: {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }],
      nextArrow: <Arrow icon={RightArrowIcon}/>,
      prevArrow: <Arrow icon={LeftArrowIcon}/>,
    }
  }

  render() {
    return (
      <div className="slider">
        <SlickSlider { ...this.props.settings }>
          { this.props.children }
        </SlickSlider>
      </div>
    );
  }
}
