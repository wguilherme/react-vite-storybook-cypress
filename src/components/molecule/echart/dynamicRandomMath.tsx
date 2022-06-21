import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import cloneDeep from 'lodash.clonedeep';

export const DynamicEcharts: React.FC = () => {
  const DEFAULT_OPTION = {
    title: {
      text:'',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['Preço', 'Compras']
    },
    toolbox: {
      show: false,
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom:30
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: ['#FFEB3C', '#C83E4D', '#FFC108', '#F4B860', '#C83E4D', '#FFEB3C', '#FFEB3C',
        '#303F9F', '#303F9F', '#303F9F', '#303F9F', '#303F9F', '#303F9F', '#303F9F',
        '#9ED900', '#00E500', '#57A773', '#0AA344', '#69DC9E', '#00D243', '#167045']
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
          let now:any = new Date();
          let res:any = [];
          let len = 50;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
            now = new Date(now - 2000);
          }
          return res;
        })()
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (function (){
          let res = [];
          let len = 50;
          while (len--) {
            res.push(50 - len + 1);
          }
          return res;
        })()
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Preço',
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: 'Compras',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name:'Compras',
        type:'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          }
        },
        animationEasing: 'elasticOut',
        animationDelay: function (idx:number) {
          return idx * 10;
        },
        animationDelayUpdate: function (idx:number) {
          return idx * 10;
        },
        data:(function (){
          let res = [];
          let len = 50;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name:'Preço',
        type:'line',
        data:(function (){
          let res:any = [];
          let len:any = 0;
          while (len < 50) {
            const mathRandom:any = ((Math.random()*10 + 5).toFixed(1))
            res.push(mathRandom-0)
            len++;
          }
          return res;
        })()
      }
    ]
  };

  let count:any;

  const [option, setOption] = useState(DEFAULT_OPTION);

  function fetchNewData() {
    const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    const newOption = cloneDeep(option); // immutable
    newOption.title.text = '' + new Date().getSeconds();
    const data0 = newOption.series[0].data;
    const data1 = newOption.series[1].data;
    data0.shift();
    data0.push(Math.round(Math.random() * 1000));
    data1.shift();
    data1.push((Math.random() * 10 + 5).toFixed(1));

    newOption.xAxis[0].data.shift();
    newOption.xAxis[0].data.push(axisData);
    newOption.xAxis[1].data.shift();
    newOption.xAxis[1].data.push(count++);

    setOption(newOption);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchNewData();
    }, 1000);

    return () => clearInterval(timer);
  });

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};
