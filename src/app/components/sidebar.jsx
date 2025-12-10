'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from 'next/navigation'


import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Sidebar(){
    let [ manu, setmanu ] = useState('');
    let [ submanu, setSubManu ] = useState('');
 
    let current = usePathname();

    useEffect(()=>{
        setSubManu(current);
        setmanu(current)
    },[current])
    
    return(
        <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link href="/"><Image src='/images/logo-light.png' width={98} height={24} alt=""/></Link>
                </div>
                <SimpleBar style={{height: "calc(100% - 70px)"}}>
                    <ul className="sidebar-menu border-t border-white/10">
                        <li className={`${manu === "/" || ""? 'active' : ''} ms-0`}>
                            <Link href="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</Link>
                        </li>

                        <li className={`${manu === "/explore-property" ? 'active' : ''} ms-0`}>
                            <Link href="/explore-property"><i className="mdi mdi-home-city me-2"></i>Explore Properties</Link>
                        </li>

                        <li className={`${manu === "/favorite-property" ? 'active' : ''} ms-0`}>
                            <Link href="/favorite-property"><i className="mdi mdi-home-heart me-2"></i>Favorite Properties</Link>
                        </li>

                        <li className={`${manu === "/add-property" ? 'active' : ''} ms-0`}>
                            <Link href="/add-property"><i className="mdi mdi-home-plus me-2"></i>Add Properties</Link>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/chat", "/email", '/calendar'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>{setSubManu(submanu === '/app-item' ? '' : '/app-item')}}><i className="mdi mdi-apps me-2"></i>Apps <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 leading-5 rounded ms-1">New</span></Link>
                            <div className={`sidebar-submenu ${["/chat", "/email","/calendar", '/app-item'].includes(submanu) ? 'block' : '' }`}>
                                <ul>
                                    <li className={`${manu === "/chat" ? 'active' : ''} ms-0`}><Link href="/chat">Chat</Link></li>
                                    <li className={`${manu === "/email" ? 'active' : ''} ms-0`}><Link href="/email">Email</Link></li>
                                    <li className={`${manu === "/calendar" ? 'active' : ''} ms-0`}><Link href="/calendar">Calendar</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/profile", "/profile-setting", '/user-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>{setSubManu(submanu === '/user-item' ? '' : '/user-item')}}><i className="mdi mdi-account-edit me-2"></i>User Profile</Link>
                            <div className={`sidebar-submenu ${["/profile", "/profile-setting", '/user-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/profile" ? 'active' : ''} ms-0`}><Link href="/profile">Profile</Link></li>
                                    <li className={`${manu === "/profile-setting" ? 'active' : ''} ms-0`}><Link href="/profile-setting">Profile Settings</Link></li>
                                </ul>
                            </div>  
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/blog", "/blog-detail"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>{setSubManu(submanu === '/blog-item' ? '' : '/blog-item')}}><i className="mdi mdi-post-outline me-2"></i>Blog</Link>
                            <div className={`sidebar-submenu ${["/blog", "/blog-detail", '/blog-item'].includes(submanu) ? 'block' : '' }`}>
                                <ul>
                                    <li className={`${manu === "/blog" ? 'active' : '' } ms-0`}><Link href="/blog">Blogs</Link></li>
                                    <li className={`${manu === "/blog-detail" ? 'active' : ''} ms-0`}><Link href="/blog-detail">Blog Detail</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/invoice-list", "/invoice"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>{setSubManu(submanu === '/invoice-item' ? '' : '/invoice-item')}}><i className="mdi mdi-file-document-outline me-2"></i>Invoice <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 leading-5 rounded ms-1">New</span></Link>
                            <div className={`sidebar-submenu ${[ "/invoice-list","/invoice" ,'/invoice-item'].includes(submanu) ? 'block' : '' }`}>
                                <ul>
                                    <li className={`${manu === "/invoice-list" ? 'active' : ''} ms-0`}><Link href="/invoice-list">Invoice List</Link></li>
                                    <li className={`${manu === "/invoice" ? 'active' : ''} ms-0`}><Link href="/invoice">Invoice Preview</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={() =>setSubManu(submanu === "/page-item" ? "" : "/page-item")}> <i className="mdi mdi-file-document-outline me-2"></i>Pages</Link>
                            <div className={`sidebar-submenu ${["/starter", "/faqs", "/pricing", "/review","/privacy", "/terms", "/page-item"].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/starter" ? 'active' : ''} ms-0`}><Link href="/starter">Starter</Link></li>
                                    <li className={`${manu === "/faqs" ? 'active' : ''} ms-0`}><Link href="/faqs">FAQs</Link></li>
                                    <li className={`${manu === "/pricing" ? 'active' : ''} ms-0`}><Link href="/pricing">Pricing</Link></li>
                                    <li className={`${manu === "/review" ? 'active' : ''} ms-0`}><Link href="/review">Review</Link></li>
                                    <li className={`${manu === "/privacy" ? 'active' : ''} ms-0`}><Link href="/privacy">Privacy Policy</Link></li>
                                    <li className={`${manu === "/terms" ? 'active' : ''} ms-0`}><Link href="/terms">Term & Condition</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>{setSubManu(submanu === "/auth-item" ? '' : "/auth-item")}}><i className="mdi mdi-login me-2"></i>Authentication</Link>
                            <div className={`sidebar-submenu ${["/login", "/signup", "/signup-success", "/reset-password", "/lock-screen", "/auth-item"].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/login" ? 'active' : ''} ms-0`}><Link href="/login">Login</Link></li>
                                    <li className={`${manu === "/signup" ? 'active' : ''} ms-0`}><Link href="/signup">Signup</Link></li>
                                    <li className={`${manu === "/signup-success" ? 'active' : ''} ms-0`}><Link href="/signup-success">Signup Success</Link></li>
                                    <li className={`${manu === "/reset-password" ? 'active' : ''} ms-0`}><Link href="/reset-password">Reset Password</Link></li>
                                    <li className={`${manu === "/lock-screen" ? 'active' : ''} ms-0`}><Link href="/lock-screen">Lockscreen</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/comingsoon", "/maintenance", "/error", "/thankyou"].includes(manu) ? 'active' : ''}`}>
                            <Link href="#" onClick={()=>{setSubManu(submanu === "/misce-item" ? '' : '/misce-item')}}><i className="mdi mdi-layers me-2"></i>Miscellaneous</Link>
                            <div className={`sidebar-submenu ${["/comingsoon", "/maintenance", "/error", "/thankyou", '/misce-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/comingsoon" ? 'active' : ''} ms-0`}><Link href="/comingsoon">Comingsoon</Link></li>
                                    <li className={`${manu === "/maintenance" ? 'active' : ''} ms-0`}><Link href="/maintenance">Maintenance</Link></li>
                                    <li className={`${manu === "/error" ? 'active' : ''} ms-0`}><Link href="/error">Error</Link></li>
                                    <li className={`${manu === "/thankyou" ? 'active' : ''} ms-0`}><Link href="/thankyou">Thank You</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-slate-800 text-center">
                            <span className="relative z-10">
                                <span className="text-xl font-medium h5 text-white">Upgrade to Pro</span>

                                <span className="text-slate-400 mt-3 mb-5 block">Get one month free and subscribe to pro</span>

                                <Link href="https://1.envato.market/hously-react" target="_blank" className="py-2 px-5 !block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-gray-500/5 hover:bg-gray-500 border-gray-500/10 hover:border-gray-500 text-white rounded-md">Subscribe</Link>
                            </span>
                
                            <span className="mdi mdi-home-city-outline text-[160px] absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center opacity-[0.02] text-white z-0"></span>
                        </li>
                    </ul>
                </SimpleBar>
            </div>
        </nav>
    )
}