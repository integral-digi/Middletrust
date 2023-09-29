"use client"
import React from 'react';
import { Carousel } from 'flowbite-react';

const bannerImg = [
    {img: "stats.svg", description: "Secure your payments with our state of the art escrow"},
    {img: "stats.svg", description: "Close your deals with confidence"},
];

const Banner = () => {
    return (
        <div className="h-full bg-indigo-500 mx-auto justify-center">
                {bannerImg.map((item, index)=>(
                    <div className='my-auto  mx-auto justify-center'>
                        <Carousel withIndicators>
                            <Carousel.Slide key={index}>
                                <img src={item.img} alt='stat' className='w-96 h-auto' />
                                <p className='w-96 text-center text-white text-2xl font-secondary leading-7'>
                                    {item.description}
                                </p>
                            </Carousel.Slide>
                        </Carousel>
                    </div>
                ))}
        </div>
    );
};

export default Banner;