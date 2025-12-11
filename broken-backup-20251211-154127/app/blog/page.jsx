import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";

import Wrapper from "../components/wrapper";
import AddBlog from "../components/add-blog";

export default function Blog(){
    return(
        <Wrapper>
            <div className="container-fluid relative px-3">
                <div className="layout-specing">
                    <div className="md:flex justify-between items-center">
                        <div>
                            <h5 className="text-lg font-semibold">Blogs</h5>

                            <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                                <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-primary dark:hover:text-white"><Link href="/">WhyNotBroker</Link></li>
                                <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                                <li className="inline-block capitalize text-[16px] font-medium text-primary dark:text-white" aria-current="page">Blogs</li>
                            </ul>
                        </div>
                        <AddBlog/>
                    </div>

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                        {blogData.map((item,index) =>{
                            return(
                                <div className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-700 transition-all duration-500" key={index}>
                                    <div className="relative overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="" alt=""/>
                                        <div className="absolute end-4 top-4">
                                            <span className="bg-primary text-white text-[14px] px-2.5 py-1 font-medium !rounded-full h-5">{item.tag}</span>
                                        </div>
                                    </div>
            
                                    <div className="relative p-6">
                                        <div className="">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-slate-400 text-sm"><i className="mdi mdi-calendar-month align-middle text-base text-slate-900 dark:text-white me-2"></i>{item.date}</span>
                                                <span className="text-slate-400 text-sm ms-3"><i className="mdi mdi-clock-outline align-middle text-base text-slate-900 dark:text-white me-2"></i>{item.time}</span>
                                            </div>
            
                                            <Link href={`/blog-detail/${item.id}`} className="title text-xl font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>
                                            
                                            <div className="mt-3">
                                                <Link href={`/blog-detail/${item.id}`} className="btn btn-link hover:text-primary after:bg-primary duration-500 ease-in-out">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <nav>
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                            <i className="mdi mdi-chevron-left text-[20px]"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-white bg-primary shadow-xs shadow-gray-200 dark:shadow-gray-700">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                            <i className="mdi mdi-chevron-right text-[20px]"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
