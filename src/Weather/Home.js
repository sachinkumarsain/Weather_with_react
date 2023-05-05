import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Weather.css"

function Home() {
    const [value, setValue] = useState('')
    const [data, setData] = useState('')
    const keys = "9b0931d9808c87226df2970dd5402599"
    function submitForm(e) {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${keys}`)
            .then((result) => {
                console.log(result.data)
                setData(result.data)
            })
    }

    function onchangeHandler(e) {
        setValue(e.target.value)
    }

    return (
        <>
            <div className='container'>
               <div className='box'>
               <form onSubmit={submitForm}>
                    <h1>Weather</h1>
                    <input type='text' placeholder='Enter place' onChange={onchangeHandler}></input><br/>
                    <button type='submit'> submit</button>
                </form>
                {
                    data ? (<div className='weather'>
                        <h1>{data.name}<span>
                                <img src={`https://flagcdn.com/60x45/${data.sys.country.toLowerCase()}.png`}></img>
                        </span></h1>
                        <h2> Temp:-{data.main.temp}</h2>
                        <h3>Description:-{data.weather[0].description}</h3>
                    </div>)
                        : ("")
                }
               </div>
            </div>
        </>
    )
}

export default Home