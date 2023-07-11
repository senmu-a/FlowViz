import React, { Component } from "react";
import { Chart, Axis, Area, Line } from "@antv/f2";
import F2Canvas from "../../components/senmu-canvas";

interface ChartProps {
  data: any
}

export default class LineChart extends Component<ChartProps> {
  render() {
    return (
      <F2Canvas>
        <Chart
          data={this.props.data}
          scale={{
            time: {
              type: "timeCat",
              tickCount: 3,
            },
            tem: {
              min: 0,
            },
          }}
        >
          <Axis
            field='time'
            style={{
              label: { align: "between" },
            }}
          />
          <Axis field='tem' />
          <Area
            x='time'
            y='tem'
            color='l(180) 0:#5986F2 1:#ffffff'
            shape='smooth'
          />
          <Line
            x='time'
            y='tem'
            color='#9AB8FF'
            shape='smooth'
          />
        </Chart>
      </F2Canvas>
    );
  }
}
