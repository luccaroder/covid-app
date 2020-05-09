import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function LineChart(props){
  return (
  <div style={{height: 400}}>
    <ResponsiveLine
        data={props.chartInformation}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        curve='monotoneX'
        xScale={{
          type: "time",
          format: "%Y-%m-%d %H:%M",
          precision: "hour"
        }}
        xFormat="time:%Hh"
        yScale={{ type: 'point', min: 'auto', max: 'auto' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            format: "%Hh%M",
            tickSize: 8,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
            tickValues: 'every 5 hours'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor='white'
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="x"
        pointLabelYOffset={-12}
        useMesh={true}
        // legends={[
        //     {
        //         anchor: 'bottom-rigth',
        //         direction: 'column',
        //         justify: false,
        //         itemsSpacing: 0,
        //         translateX: 150,
        //         translateY: 0,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemOpacity: 0.75,
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgba(0, 0, 0, .03)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
  </div>
)};