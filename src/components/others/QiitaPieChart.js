import * as React from 'react'
import { Pie, PieChart, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const QiitaPieChart = ({
  data,
}) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        nameKey='name'
        dataKey='count'
      >
        {
          data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  )
}

export default QiitaPieChart
