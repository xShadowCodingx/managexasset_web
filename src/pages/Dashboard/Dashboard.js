// This is the dashboard file, it handles displaying the correct components for the dashboard

import React from 'react'
import Layout from '../../components/Layout/Layout'

import dashboard_styles from './Dashboard.module.css'
import VictoryBarGraph from './components/VictoryBarGraph'

const data = [
  {category: "DVD", quantity: 132, label: 132},
  {category: "Figurine", quantity: 101, label: 101},
  {category: "Blu-Ray", quantity: 92, label: 92},
  {category: "Other", quantity: 91, label: 91},
  {category: "Book", quantity: 75, label: 75},
]

export default function Dashboard() {
  return (
    <Layout>
      <div className={dashboard_styles.__dashboard_main_container}>
        <div className={dashboard_styles.__dashboard_graph_row}>
          <div className={dashboard_styles.__dashboard_graph_card}>
            <h3>Highest Assets</h3>
            <VictoryBarGraph data={data} />
          </div>
          <div className={dashboard_styles.__dashboard_graph_card}>

          </div>
        </div>
      </div>
    </Layout>
  )
}
