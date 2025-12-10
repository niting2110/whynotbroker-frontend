'use client'
import React from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic'

import { FiHexagon } from 'react-icons/fi'

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

let images = ['/images/property/1.jpg', '/images/property/2.jpg', '/images/property/3.jpg']

const settings = {
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    nav: false,
    speed: 800,
    gutter: 0,
};

let data = [
    {
        icon:'mdi mdi-cards-heart',
        title:'Comfortable',
        desc:`If the distribution of letters and 'words' is random, the reader will not be distracted from making.`
    },
    {
        icon:'mdi mdi-shield-sun',
        title:'Extra Security',
        desc:`If the distribution of letters and 'words' is random, the reader will not be distracted from making.`
    },
    {
        icon:'mdi mdi-star',
        title:'Luxury',
        desc:`If the distribution of letters and 'words' is random, the reader will not be distracted from making.`
    },
    {
        icon:'mdi mdi-currency-usd',
        title:'Best Price',
        desc:`If the distribution of letters and 'words' is random, the reader will not be distracted from making.`
    },
]

export default function AboutThree() {
  return (
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
            <div className="lg:col-span-4">
                <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {data.slice(0,2).map((item,index)=>( 
                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="size-32 fill-primary/5 mx-auto"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className={item.icon}></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="#" className="text-xl hover:text-primary font-medium">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-4">
                <div className="rounded-full shadow-lg dark:shadow-gray-800 relative overflow-hidden border-8 border-white dark:border-slate-900">
                    <div className="grid grid-cols-1 relative">
                        <div className="tiny-single">
                            <TinySlider settings={settings} >
                                {images.map((item,index)=>( 
                                    <div className="tiny-slide" key={index}>
                                        <img src={item} className="object-cover w-full lg:h-[600px] md:h-96 h-[500px]" alt=""/>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4">
                <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {data.slice(2,4).map((item,index)=>( 
                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="size-32 fill-primary/5 mx-auto"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className={item.icon}></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="#" className="text-xl hover:text-primary font-medium">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
