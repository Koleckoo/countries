import { useContext } from 'react'
import {BsMoon} from 'react-icons/bs'
import ThemeContext from '../Context/ThemeContext'

export default function Navbar () {
    const {theme, setTheme} = useContext(ThemeContext)
    
    const switchTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('light')
        } 

    }

    return (
        <nav className={`flex justify-between items-center h-24 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'} ${theme === 'light' ? 'text-black' : 'text-white'} shadow`} >
            <div className='ml-4 md:ml-16 lg:ml-20'>
                <h1 className='font-extrabold text-3xl'>Where in the world?</h1>
            </div>
            <div className='font-bold mr-4 md:mr-16 lg:mr-20'>
                <button onClick={switchTheme} className='flex gap-2'>
                  <BsMoon/>
                <h2> Dark Mode</h2>  
                </button>
            </div>
        </nav>
    )
}