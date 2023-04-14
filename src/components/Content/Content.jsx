import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Content () {
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState(null)
    const [search, setSearch] = useState(null)


    // loading all countries
    const loadAllCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data)
        } catch (error) {
            console.log(error);
        }
    }
    // loading countries based on region
    const loadRegionCountries = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const data = await response.json();
            setCountries(data)
        } catch (error) {
            console.log(error);
        }
    }
    // loading countries based on the input field
    const loadCountriesByName = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.log(error);
        }
    }

    // setting the region change based on the filter
    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value
        setRegion(selectedRegion);
    }
    // setting the search based on the input change, if the input is deleted search is set back to null
    const handleSearchChange = (e) => {
        const input = e.target.value
        input === '' ? setSearch(null) : setSearch(input)
    }

    
    // if region is not set, load all countries, if it is load only countries based on the region
    useEffect(() => {
        if (region === null && search === null) {
            loadAllCountries();
        } else if (region === null && search !== null) {
            loadCountriesByName();
        } else if (region !== null && search === null) {
            loadRegionCountries();
        }
    },[region, search])

    return countries ? 
    <section>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
            <div className="mt-16 md:ml-20 w-96">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={handleSearchChange} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-white shadow" placeholder="Seach for a country..." />
            </div>
            </div>
            <div className="mt-16 md:mr-20 shadow rounded-xl">
                <select onChange={handleRegionChange} className="p-5 rounded-xl" name="region_select" id="region_select">
                    <option value="" disabled selected>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
         </div>
        <div className="flex flex-wrap justify-evenly">
            {countries.map((country, index) => {
                return (
                <Link to={`/${country.name.common}`} key={index} className="flex-col items-center rounded-2xl bg-white w-96 mt-16 overflow-hidden shadow">              
                    <div className="shadow">
                        <img className="object-cover h-64 w-96 " src={country.flags.png} alt="country flag" />
                    </div>
                    <div className="px-10 pt-8 pb-16 text-start">
                        <h3 className="font-bold text-2xl mb-6">{country.name.common}</h3>
                        <p><strong>Population: </strong>{(country.population).toLocaleString('en-US', {minimumFractionDigits: 0})}</p>
                        <p><strong>Region: </strong>{country.region}</p>
                        <p><strong>Capital: </strong>{country.capital}</p>
                    </div>           
                </Link>)
            })}
        </div>
    </section>
    : 
    <div className="text-center">
        <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    
    
}