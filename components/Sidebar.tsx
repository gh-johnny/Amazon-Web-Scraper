import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Sidebar() {
  return (
    <div className={`p-2 py-6 overflow-y-auto border-b border-[#FF9900] md:p-10`}>
        <figure className='flex flex-col items-center justify-center mb-10'>
            <DocumentMagnifyingGlassIcon className={`h-16 text-[#FF9900] md:w-16`}/>
            <h1 className='hidden mt-2 mb-2 font-bold text-center md:inline text3xl'>Web Scraper</h1>
            <h2 className='hidden text-xs italic text-center md:inline'>Scraping the Unscrapable</h2>
        </figure>
        <ul>
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
            {/* SidebarRow */}
        </ul>
    </div>
  )
}
