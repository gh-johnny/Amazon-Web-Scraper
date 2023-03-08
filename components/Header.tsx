"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import  React from 'react'
import { useRef } from 'react'

export default function Header() {
    // Input pointer
    const inputRef = useRef<HTMLInputElement>(null)
    
    function handleSearch(e : React.FormEvent<HTMLFormElement>){
        // Preventing from refresehing the page
        e.preventDefault();
        
        // Sanitize input after search 
        const input = inputRef.current?.value
        if(!input) return
        if(inputRef.current?.value) inputRef.current.value = ''

        // Call API
        try{
            
        // Handle errors
        }catch(err){console.error(err)}

        // Wait for the res
        
    }

    
  return (
    <header>
        <form 
            className='flex items-center justify-center space-x-1 bg-[#ffffff] max-w-md mx-auto py-3 px-4 rounded-full border focus-within:border-[#ff9900]' onSubmit={handleSearch}>
            <input 
                ref={inputRef}
                type="text"
                placeholder='Search...'
                className='flex-1 text-black bg-transparent outline-none placeholder:text-black/70'/>
            <button type='button' className='hidden'>Search</button>
            <MagnifyingGlassIcon className='w-6 h-6 text-[#FF9900]'/>
        </form>
    </header>
  )
}
