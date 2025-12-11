import React from 'react'
import { invoiceData } from '../data/data'
import Link from 'next/link'
import Wrapper from '../components/wrapper'

export default function InvoiceList() {
  return (
    <>
    <Wrapper>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Invoice</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-primary dark:hover:text-white"><Link href="/">WhyNotBroker</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-primary dark:text-white" aria-current="page">Invoice</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 mt-6">
                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 rounded-md">
                        <table className="w-full text-start">
                            <thead className="text-base">
                                <tr>
                                    <th className="text-start p-4 min-w-[128px]">Invoice No.</th>
                                    <th className="text-start p-4 min-w-[192px]">Client Name</th>
                                    <th className="text-center p-4 min-w-[200px]">Phone</th>
                                    <th className="text-center p-4">Amount</th>
                                    <th className="text-center p-4 min-w-[150px]">Generate(Dt.)</th>
                                    <th className="text-center p-4">Status</th>
                                    <th className="text-end p-4 min-w-[200px]"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceData.map((item,index)=>( 
                                    <tr key={index}>
                                        <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4">{item.no}</th>
                                        <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                            <Link href="#" className="hover:text-primary">
                                                <div className="flex items-center">
                                                    <img src={item.image} className="size-9 rounded-full shadow-sm dark:shadow-gray-700" alt=""/>
                                                    <span className="ms-2 font-medium">{item.name}</span>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span className="text-slate-400">{item.phone}</span>
                                        </td>
                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span className="text-slate-400">{item.amount}</span>
                                        </td>
                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                            <span className="text-slate-400">{item.date}</span>
                                        </td>
                                        {item.status === "Unpaid" && 
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className="bg-red-600/10 dark:bg-red-600/20 text-red-600 inline-block text-[12px] font-bold px-2.5 rounded leading-5 ms-1">Unpaid</span>
                                            </td>
                                        }
                                        {item.status === "Paid" && 
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className="bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600 inline-block text-[12px] font-bold px-2.5 rounded leading-5 ms-1">Paid</span>
                                            </td>
                                        }
                                        <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                            <Link href="/invoice" className="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-white rounded-md">Preview</Link>
                                            <Link href="#" className="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-primary/5 hover:bg-primary border-primary/10 hover:border-primary text-primary hover:text-white rounded-md ms-2">Print</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                        <div>
                            <Link href="#" className="size-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i className="mdi mdi-arrow-left"></i></Link>
                            <Link href="#" className="size-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i className="mdi mdi-arrow-right"></i></Link>
                        </div>

                        <span className="text-slate-400">Showing 1 - 8 out of 45</span>
                    </div>
                </div>
               
            </div>
        </div>
    </Wrapper>
    </>
  )
}
