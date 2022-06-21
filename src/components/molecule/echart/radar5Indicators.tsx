import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'

export function EchartRadar5Indicators(props:any){

  const {indicator1, indicator2, indicator3} = props

  const option = {

    title: {},
    tooltip: {},
    legend: {},
    grid: {
      // top: '10%',
      left: 0,
      right: 0,
      bottom:0
    },
    radar: {
      // shape: 'circle',
      center: ['50%', '50%'],
      indicator: [
          { name: 'Price Change', },
          { name: 'Ask Quantity',},
          { name: 'Last Quantity', },
          { name: 'Best bid Price',},
          { name: 'Best bid quantity', },
          { name: 'Best Ask Price', },

      ]
    },
    series: [{
      name: 'Label A',
      type: 'radar',
    
      // areaStyle: {normal: {}},
      data : [
        {
          value : [indicator1?.C, indicator1?.A, indicator1?.E,  indicator1?.O,  indicator1?.B,  indicator1?.v],
          // name : 'Grupo A',
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            // color: '#303F9F',          
          },   
          
        },
 
        {
          value : [indicator2?.C, indicator2?.A, indicator2?.E,  indicator2?.O,  indicator2?.B,  indicator2?.v],
          // name : 'Grupo A',
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            // color: '#303F9F',          
          },   
          
        },
 
        {
          value : [indicator3?.C, indicator3?.A, indicator3?.E,  indicator3?.O,  indicator3?.B,  indicator3?.v],
          // name : 'Grupo A',
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            // color: '#303F9F',          
          },   
          
        },
 
  
      ]
    }]
  };

  return <ReactECharts
    option={option}
    // style={{ height: 400 }}
  />;
};