"use client"
import { Carousel } from 'flowbite-react';

const bannerImg = [
    {img: "/images/stats.svg", description: "Secure your payments with our state of the art escrow"},
    {img: "/images/stats.svg", description: "Close your deals with confidence"},
];

const Banner = () => {
    return (
        <div className="h-full bg-indigo-500 justify-center flex items-center mx-auto pt-40"> 
            <Carousel className='w-full' pauseOnHover>
                <img src={bannerImg[0].img} alt='stat' className='w-96 h-auto my-auto mx-auto' />
            </Carousel>
        </div>
    );
};

export default Banner;