import React, { useState, useEffect } from 'react'
import DoughnutChart from './DoughnutChart';
import { Doughnut, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import Results from './Results';
import { Link } from "react-router-dom";



const SIPcard = () => {

    const [data, setData] = useState({
        invest: 500,
        period: 5,
        interest: 12
    })

    //-------------------------------------

    let style1 = {
        color: '#000'
    }
    if (data.interest >= 12) {
        style1 = {
            color: '#03C988'
        }
    }

    //-------------------------------------

    let FV = 0
    let P, r, n
    P = data.invest <= 10000000 ? data.invest : 10000000
    r = data.interest / 1200
    n = data.period <= 50 ? data.period * 12 : 50 * 12

    FV = parseInt(P * ((((1 + r) ** n) - 1) / r) * (1 + r))

    //-------------------------------------

    const dataChange = (e) => {

        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    //---------------------------------------


    const x = {
        datasets: [{
            data: [data.invest * 12],
            backgroundColor: ['#DDDDDD']
        }]
    }

    const d = {
        datasets: [{
            data: data.invest <= 10000000 ? [data.invest * data.period * 12, FV - data.invest * data.period * 12] : [10000000 * data.period * 12, FV - 10000000 * data.period * 12],
            backgroundColor: ['#DDDDDD', '#03C988']
        }]
    }

    //------------------------------------------


    return (
        <div className='card'>
            <h3>
                Calculate the future value of your SIP investment
            </h3>
            <div className="inputs">
                <div className="input1">
                    <span className="pretxt">I want to invest monthly</span>

                    <input
                        type="number"
                        name="invest"
                        value={data.invest <= 10000000 ? data.invest : 10000000}
                        id="invest"
                        onChange={dataChange} />
                    <label className="material-symbols-outlined currency">
                        currency_rupee
                    </label>

                </div>
                <div className="input2">
                    <span className="pretxt">For a period of</span>
                    <input
                        type="number"
                        name="period"
                        value={data.period < 50 ? data.period : 50}
                        id=""
                        onChange={dataChange}
                        style={data.period >= 10 ? style1 : null} />
                </div>
                <div className="input3">
                    <span className="pretxt">My Investment Strategy</span>
                    <input
                        type="number"
                        name="interest"
                        value={data.interest}
                        id=""
                        onChange={dataChange}
                        style={style1} />
                </div>
                <a
                    target="_blank"
                    href={`https://github.com/ShreyoPaul/`}
                    className="btn" >Rate my GitHUB</a>
            </div>

            {
                data.period > 0 && data.interest > 0 && data.invest > 100
                    ?
                    <div className="doughnut">
                        <DoughnutChart d={d} />
                        <Results investment={P} FV={FV} period={n} style1={style1} />
                    </div>
                    : <div className="not_chart">
                        <DoughnutChart d={x} />
                    </div>
            }


        </div>
    )
}

export default SIPcard