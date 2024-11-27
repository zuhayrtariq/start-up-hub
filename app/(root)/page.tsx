import SearchForm from '@/components/SearchForm'
import StartUpCard from '@/components/StartUpCard';
import React from 'react'

const Home = async({searchParams} : {searchParams : Promise<{query?:string}>}) => {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt : new Date(),
    views : 25,
    author : {
      _id : 1,
      name : "Zuhayr",
    },
    _id : 1,
    description : "This is a dummy description",
    image : "https://plus.unsplash.com/premium_photo-1682814732010-d7f4917fad03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category : "Robots",
    title : "WE ROBOTS"
  }]
  return (
    <>
    <section className='primary_container'>

    <h1 className='heading'>Empowering Entrepreneurs,<br/>Shaping Tomorrow</h1>
    <p className="sub-heading !max-w-3xl">Share Your Vision, Cast Your Vote, and Get Recognized Online.</p>
    <SearchForm query={query}/>
    </section>

    <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for ${query}` : "All Startups"}
    </p>
    <ul className="mt-7 card_grid">
      {
        posts?.length > 0 ? (posts.map((post : any,index:number) =><StartUpCard key={post._id} post={post}/>
        )) : (
          <p>No Posted Found</p>
        )
      }
    </ul>
    </section>
    </>
  )
}

export default Home