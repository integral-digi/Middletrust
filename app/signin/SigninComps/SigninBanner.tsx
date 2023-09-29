"use client"
import { Carousel } from 'flowbite-react';

const bannerImg = [
    {img: "stats.svg", description: "Secure your payments with our state of the art escrow"},
    {img: "stats.svg", description: "Close your deals with confidence"},
];

const Banner = () => {
    return (
        <div className="h-full bg-indigo-500 justify-center flex items-center mx-auto pt-40"> 
            <Carousel className='w-full' pauseOnHover>
                <img src={bannerImg[0].img} alt='stat' className='w-96 h-auto my-auto mx-auto' />
                {/* <img src={bannerImg[1].img} alt='stat' className='w-full h-auto relative' /> */}
                {/* <div>
                    <img src={bannerImg[0].img} alt='stat' className='w-auto h-96 relative' />
                    <p className='w-96 text-center text-white text-2xl font-secondary leading-7'>
                        {bannerImg[0].description}
                    </p>
                </div>
                <div>
                    <img src={bannerImg[1].img} alt='stat' className='w-auto h-96 relative' />
                    <p className='w-96 text-center text-white text-2xl font-secondary leading-7'>
                        {bannerImg[1].description}
                    </p>
                </div> */}
            </Carousel>
        </div>
    );
};

export default Banner;