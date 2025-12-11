import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/home-banner'
import { aboutData} from '../data/data'
import { FiArrowRight, FiHexagon} from 'react-icons/fi'
import Link from 'next/link'
import About from '../components/about'
import Categories from '../components/categories'
import Property from '../components/property'
import ClientTwo from '../components/client-two'
import GetInTuch from '../components/get-in-touch'
import Footer from '../components/footer'
import Switcher from '../components/switcher'
import TeamOne from '../components/team-one'
import BlogOne from '../components/blog-one'

export default function Page() {
  return (
    <>
     <Navbar/>
     <HomeBanner/>   

     <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We Do?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    
                    {(aboutData || []).map((item,index)=>{
                    return(
                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="size-32 fill-primary/5 mx-auto"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={item.image} className="size-12" alt=""/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link href="" className="text-xl font-medium hover:text-primary">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>

                                <div className="mt-4">
                                    <Link href="" className="btn btn-link text-primary hover:text-primary after:bg-primary transition duration-500">Read More <FiArrowRight className="ms-1"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                    <p className="text-slate-400 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <Categories/>
            </div>

            <Property/>

            <ClientTwo/>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <TeamOne/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs & News</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>

                <BlogOne/>
            </div>

            <GetInTuch/>
        </section>

        <Footer/>
        <Switcher/>
    </>
  )
}
