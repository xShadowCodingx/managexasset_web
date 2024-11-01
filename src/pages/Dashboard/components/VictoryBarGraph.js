// This is the bar graph component on the dashboard

import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory'

export default function VictoryBarGraph(props) {
    return (
        <div>
            <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.clean}
            >
                <VictoryBar
                    labelComponent={<VictoryTooltip />}
                    data={props.data}
                    x="category"
                    y="quantity"
                />
            </VictoryChart>
        </div>
    )
}
