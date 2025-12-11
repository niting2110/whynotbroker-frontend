import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'
import { blogList } from '../data/data'


export default function BlogOne() {
  return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {blogList.slice(0,3).map((item,index)=>{
                return(
                    <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500" key={index}>
                        <div className="relative overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="" alt=""/>
                            <div className="absolute end-4 top-4">
                                <span className="bg-primary text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.type}</span>
                            </div>
                        </div>

                        <div className="relative p-6">
                            <div className="">
                                <div className="flex justify-between mb-4">
                                    <span className="text-slate-400 text-sm inline-flex"><FiCalendar className="uil-calendar-alt text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                    <span className="text-slate-400 text-sm inline-flex ms-3"><FiClock className="uil-clock text-slate-900 dark:text-white me-2"/>5 min read</span>
                                </div>

                                <Link href="/blog-detail" className="title text-xl font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>
                                
                                <div className="mt-3">
                                    <Link href="/blog-detail" className="btn btn-link hover:text-primary after:bg-primary duration-500 ease-in-out">Read More <FiArrowRight className="uil-arrow-right"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
  )
}

