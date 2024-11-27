import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartUpCard = ({post} : {post : any}) => {
    const {_createdAt,author : {_id : authorId,name},views,title,category,_id,image,description} = post
  return (
    <li className='startup-card group'><div className="flex-between">
        <p className='startup-card-date'>{formatDate(_createdAt) }</p>
        <div className="flex gap-1.5 ">
            <EyeIcon className='size-6 text-primary'/>
            <span className='text-16-medium'>{views}</span>
        </div>

        </div>
        <div className='flex-between mt-5 gap-6'> <div className="flex-1"><Link href={`/user/${authorId}`}><p className='text-16-medium line-clamp-1'>{name}</p></Link>
        <Link href={`/startup/post/${_id}`}><h3 className='text-26-semibold line-clamp-1'>{title}</h3></Link></div>
        <Link href={`/user/${authorId}`}><Image src={`https://placehold.co/48x48`} alt='Avatar' className='rounded-full' width={48} height={48}/></Link>
        </div>
        <Link href={`   `}>
        <p className='startup-card_desc'>{description}</p>
        <img src={image} alt='placehold' className='startup-card_img'/>
        </Link>
        <div className="flex-between gap-3 mt-5"><Link href={`/?query=${category.toLowerCase()}`}> <p className="text-16-medium">{category}</p> </Link>
        <Button className='startup-card_btn' asChild>
        <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
        </div>
        </li>
  )
}

export default StartUpCard