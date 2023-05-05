import React, { useEffect, useState } from 'react'
import axios from "axios"

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
                <form onSubmit={submitForm}>
                    <h2>Weather</h2>
                    <input type='text' placeholder='Enter place' onChange={onchangeHandler}></input>
                    <button type='submit'> submit</button>
                </form>
                {
                    data ? (<div className='weather'>
                        <h1>{data.name}</h1>
                        <h2> Temp:-{data.main.temp}</h2>
                        <h3>Description:-{data.weather[0].description}</h3>
                    </div>)
                        : ("")
                }
            </div>
        </>
    )
}

export default Home