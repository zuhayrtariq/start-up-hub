import SearchForm from '@/components/SearchForm'
import React from 'react'

const Home = async({searchParams} : {searchParams : Promise<{query?:string}>}) => {
  const query = (await searchParams).query
  return (
    <>
    <section className='pink_container'>

    <h1 className='heading'>Empowering Entrepreneurs,<br/>Shaping Tomorrow</h1>
    <p className="sub-heading !max-w-3xl">Share Your Vision, Cast Your Vote, and Get Recognized Online.</p>
    <SearchForm query={query}/>
    </section>
    </>
  )
}

export default Home