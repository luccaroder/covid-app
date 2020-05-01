import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function LineChart(props){
  return (
  <div style={{height: 400}}>
    <ResponsiveLine
        data={props.chartInformation}
        margin={{ top: 50, right: 150, bottom: 50, left: 80 }}
        yScale={{ type: "linear" }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d %H:%M",
          precision: "hour"
        }}
        xFormat="time:%Hh"
        axisBottom={{
          orient: "left",
          format: "%Hh%M",
          legendOffset: 10,
          legendPosition: "middle",
          tickValues: 'every 4 hours'
        }}
        axisLeft={{
          tickValues: 8
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor="white"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 125,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 108,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
          }
        ]}
      />
  </div>
)
    }