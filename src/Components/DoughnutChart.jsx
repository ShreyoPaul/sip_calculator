import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {
  return (
    <div>
        <Doughnut className='Doughnut' data={props.d} />
    </div>
  )
}

export default DoughnutChart