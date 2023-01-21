import React from 'react'
import { useState, useEffect } from 'react'

const Input = () => {
    const [val, setVal] = useState({
        m: 500,
        x: 5
    })
    const [labelarr, setLabelarr] = useState([0, 1, 2, 3, 4])

    let m = parseInt(parseInt(val.x) / labelarr[4])
    console.log(val.x)

    const change = (e) => {

        const { name, value } = e.target
        setVal((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

        setLabelarr([0,1*m,2*m,3*m,parseInt(val.x)])
        
    }
    console.log(labelarr)

    return (
        <div>
            <input type="number" onChange={change} name="x" id="" value={val.x} />
        </div>
    )
}

export default Input