'use client'
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const SearchFormReset = () => {
    const reset = () =>{
        const form= document.querySelector('.search-form') as HTMLFormElement;
        if(form)
            form.reset()
    }
  return (
    <Button type='reset' size={'icon'}  className='text-white search-btn font-semibold ' onClick={reset} > 
    <Link href={'/'}><XIcon/>
    </Link>
    </Button>
  )
}

export default SearchFormReset