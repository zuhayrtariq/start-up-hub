import { auth, signIn, signOut } from '@/auth'
import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async() => {
    const session : Session | null = await auth(); 
    console.log(session)
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans text-black'>
        <nav className='flex justify-between items-center'>
            <Link href={''}>
            <Image src={'/logo.png'} alt='Logo' width={60} height={10}/>
            </Link>
            <div className="flex items-center gap-5">
                {session && session?.user ? (
                    
                    <>
                    <Link href={'/startup/create'}><span>Create</span></Link>
                    <form action={async()=>{
                        'use server';
                        await signOut();}}><button type='submit'>Logout</button></form>
                    <Link href={`/user/{session?.id}`}><span>{session?.user?.name}</span></Link>
                    </>
                ):(
                    <>
                    <form action={async()=>{
                        "use server";
                        await signIn( 'github')}}>
                    <button type='submit'>Github Login</button>
                    </form>
                     <form action={async()=>{
                        "use server";
                        await signIn( 'google')}}>
                    <button type='submit'>Google Login</button>
                    </form>
                </>
                )}
            </div>

        </nav>
    </div>
  )
}

export default Navbar