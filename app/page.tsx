import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Homepage() {
  return (
    <>
        <figure className='flex flex-col items-center justify-center'>
            <DocumentMagnifyingGlassIcon className={`w-64 h-64 text-[#FF9900] `}/>
            <h1 className='mt-2 mb-5 text-3xl font-bold text-center text-black' >Welcome to the Amazon Web Scraper</h1>
            <span className='text-center '>- A website to get useful data from Amazon -</span>
            <a target='_blank' href='https://github.com/Marcelo64/Amazon-Web-Scraper' className='underline text-sky-700'>Check Repo</a>
        </figure>
    </>
  )
}