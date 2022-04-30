import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/images/slider/1.jpg'
import slider2 from '../../assets/images/slider/2.jpg';
import slider3 from '../../assets/images/slider/3.jpg';
import slider4 from '../../assets/images/slider/4.jpg';

const Banner = () => {
    return (
        <div className='p-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-1"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Choose Your Favorite Monitor</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-1"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Computer Casing</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-1"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Wireless Mouse</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded-1"
                        src={slider4}
                        alt="Forth slide"
                    />

                    <Carousel.Caption>
                        <h3>Keyboard</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;