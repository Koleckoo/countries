import {BsMoon} from 'react-icons/bs'

export default function Navbar () {

    return (
        <nav className='flex justify-between items-center h-24 bg-white shadow' >
            <div className='ml-4 md:ml-16 lg:ml-20'>
                <h1 className='font-extrabold text-3xl'>Where in the world?</h1>
            </div>
            <div className='font-bold mr-4 md:mr-16 lg:mr-20'>
                <button className='flex gap-2'>
                  <BsMoon/>
                <h2> Dark Mode</h2>  
                </button>
            </div>
        </nav>
    )
}