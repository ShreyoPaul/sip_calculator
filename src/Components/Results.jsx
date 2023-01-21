import React from 'react'

const Results = (props) => {
    let gain = parseInt(props.FV-props.investment * props.period)
    return (
        <div className="results">
            <div className="total">
                <span>
                    Total Invested
                </span>
                <span className='result'>
                    {props.investment * props.period}
                </span>
            </div>
            <div className="total">
                <span>
                    Gains
                </span>
                <span className='result' style={gain >= props.investment * props.period/1.2 ? props.style1 : null}>
                    {gain}
                </span>
            </div>
            <div className="total">
                <span>
                    Maturity value
                </span>
                <span className='result'>
                    {props.FV}
                </span>
            </div>
        </div>
    )
}

export default Results