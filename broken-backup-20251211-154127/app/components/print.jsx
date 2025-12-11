'use client'
import React from "react"
import Link from "next/link"

export default function Print(){
    return(
    <div className="mt-6">
        <Link href="" onClick={()=>window.print()} className="btn bg-primary hover:bg-primary-dark border-primary hover:border-primary-dark text-white rounded-md">Print</Link>
    </div>
    )
}