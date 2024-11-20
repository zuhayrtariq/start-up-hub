import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
const SearchForm = ({query} : {query?:string}) => {
  
  return (
    <>
    <Form action={'/'} scroll={false} className='search-form' >
    <input type="text" name='query' defaultValue={query} className='search-input' placeholder='Search Startups' />
    <div className="flex gap-x-2">
        {query && <SearchFormReset/>}
        <Button type="submit" className='search-btn text-white'><SearchIcon/></Button>
    </div>
    </Form></>
  )
}

export default SearchForm