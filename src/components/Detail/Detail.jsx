import { useEffect, useState } from "react";
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useParams } from "react-router-dom";

export default function Detail() {

    const [country, setCountry] = useState()
    let {countryName} = useParams()

    const loadCountry = async() => {

        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`)
            const data = await response.json();
            setCountry(data['0'])
        } catch (error) {
            console.log(error);
        }
        
    }
    

    useEffect(() => {
        loadCountry();
    },[])

    return country ? (
    <section className="flex flex-col">
        {/* {console.log(country.borders)} */}
        <div>
            <Link to='/' className="flex gap-2 w-32 items-center ml-20 mt-20 bg-white px-7 py-1 rounded shadow"><BsArrowLeft/> Back</Link>
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-40 mt-10">
            <div className="shadow w-96 h-72 ">
                <img className="object-cover w-full h-full " src={country.flags.png} alt={country.name.common + 'flag'} />
            </div>
            <div className="flex-col p-4">
                <h3 className="font-extrabold text-3xl mb-6">{country.name.common}</h3>
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-32 ">
                    <div className="">
                        <p><strong>Native Name:</strong>  {Object.values(country.name.nativeName)[0].official}</p>
                        <p><strong>Population:</strong> {(country.population).toLocaleString('en-US', {minimumFractionDigits: 0})}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Sub Region:</strong> {country.subregion}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                        
                    </div>
                    <div>
                        
                        <p><strong>Top Level Domain:</strong> {country.tld}</p>
                        <p><strong>Main Currency:</strong> {Object.values(country.currencies)[0].name}</p>
                        <p><strong>Languages:</strong> {Object.values(country.languages).length > 1 ? Object.values(country.languages).map((language) => {
                        return language + ', '
                    }) 
                    : 
                        Object.values(country.languages)
                        }</p>
                        
                    </div>
                </div>
                <div>
                <p className="mt-14"><strong>Borders:</strong>  {country.borders && country.borders.length > 0 ? 
                        (country.borders).length > 1 ? (country.borders).map((border, index) => {
                        return <button className="px-8 py-2 mr-2 rounded shadow-md bg-white" disabled key={index}>{border}</button>
                    }) 
                    : 
                        <button className="px-8 py-2 rounded shadow-md bg-white" disabled>{country.borders[0]}</button>
                        : "no borders"}
                        </p>
                </div>
            </div>
        </div>
    </section>)
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